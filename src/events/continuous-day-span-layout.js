export function buildContinuousDaySpanLayout(days, options = {}) {
  const {
    getDateKey,
    getEventsForDay,
    getEventDaySegment,
    getEventKey,
    isEventVisible = () => true,
    includeEvent = () => true,
    sortEvents = null
  } = options;

  const spans = [];
  const spanMap = new Map();

  days.forEach((date, dayIndex) => {
    const events = getEventsForDay(date) || [];
    events.forEach((event) => {
      if (!isEventVisible(event) || !includeEvent(event, date)) {
        return;
      }

      const daySegment = getEventDaySegment(event, date);
      if (!daySegment) {
        return;
      }

      const eventKey = getEventKey(event);
      let span = spanMap.get(eventKey);
      if (!span) {
        span = {
          event,
          displayTitle: daySegment.displayTitle,
          startIndex: dayIndex,
          endIndex: dayIndex,
          startsOnDayAtStartIndex: daySegment.startsOnDay,
          endsOnDayAtEndIndex: daySegment.endsOnDay
        };
        spanMap.set(eventKey, span);
        spans.push(span);
      } else {
        if (dayIndex < span.startIndex) {
          span.startIndex = dayIndex;
          span.startsOnDayAtStartIndex = daySegment.startsOnDay;
        }
        if (dayIndex > span.endIndex) {
          span.endIndex = dayIndex;
          span.endsOnDayAtEndIndex = daySegment.endsOnDay;
        }
      }

      if (dayIndex === span.startIndex) {
        span.startsOnDayAtStartIndex = daySegment.startsOnDay;
      }
      if (dayIndex === span.endIndex) {
        span.endsOnDayAtEndIndex = daySegment.endsOnDay;
      }
    });
  });

  const sortedSpans = sortEvents ? [...spans].sort(sortEvents) : spans.sort((a, b) => {
    if (a.startIndex !== b.startIndex) return a.startIndex - b.startIndex;
    const aDuration = a.endIndex - a.startIndex;
    const bDuration = b.endIndex - b.startIndex;
    if (aDuration !== bDuration) return bDuration - aDuration;
    return (a.event.summary || '').localeCompare(b.event.summary || '');
  });

  const laneEndIndexes = [];
  sortedSpans.forEach((span) => {
    let laneIndex = laneEndIndexes.findIndex((endIndex) => endIndex < span.startIndex);
    if (laneIndex === -1) {
      laneIndex = laneEndIndexes.length;
      laneEndIndexes.push(span.endIndex);
    } else {
      laneEndIndexes[laneIndex] = span.endIndex;
    }
    span.laneIndex = laneIndex;
  });

  const maxLanes = laneEndIndexes.length;
  const dayLanesByDateKey = new Map();
  days.forEach((date, dayIndex) => {
    const lanes = new Array(maxLanes).fill(null);
    sortedSpans.forEach((span) => {
      if (dayIndex < span.startIndex || dayIndex > span.endIndex) return;
      lanes[span.laneIndex] = {
        event: span.event,
        displayTitle: span.displayTitle,
        spanStartIndex: span.startIndex,
        spanEndIndex: span.endIndex,
        dayIndex,
        segmentIndexWithinVisibleSpan: dayIndex - span.startIndex,
        continuesFromPreviousDay: dayIndex > span.startIndex || !span.startsOnDayAtStartIndex,
        continuesToNextDay: dayIndex < span.endIndex || !span.endsOnDayAtEndIndex,
        startsBeforeVisibleSegment: !span.startsOnDayAtStartIndex,
        extendsBeforeVisibleRange: !span.startsOnDayAtStartIndex,
        extendsAfterVisibleRange: !span.endsOnDayAtEndIndex,
        bridgeFromPreviousDay: dayIndex > span.startIndex,
        bridgeToNextDay: dayIndex < span.endIndex,
        isFirstVisibleSegment: dayIndex === span.startIndex,
        isLastVisibleSegment: dayIndex === span.endIndex,
        showTitle: dayIndex === span.startIndex,
        visibleDaySpan: span.endIndex - span.startIndex + 1
      };
    });
    dayLanesByDateKey.set(getDateKey(date), lanes);
  });

  return { maxLanes, dayLanesByDateKey, spans: sortedSpans };
}
