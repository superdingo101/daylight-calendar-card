// ============================================================================
// TRANSLATIONS
// ============================================================================
// To add a new language:
// 1. Add a new entry to the TRANSLATIONS object below
// 2. Set the locale (e.g., 'es-ES' for Spanish)
// 3. Copy the strings from 'en' and translate each value
// ============================================================================

const TRANSLATIONS = {
  en: {
    locale: 'en-US',
    strings: {
      defaultTitle: 'Family Calendar',
      addEvent: 'Add Event',
      today: 'Today',
      month: 'Month',
      week: 'Week',
      schedule: 'Schedule',
      calendars: 'Calendars',
      calendar: 'Calendar',
      eventTitle: 'Event Title',
      eventTitlePlaceholder: 'Team Meeting',
      allDayEvent: 'All-day event',
      recurring: 'Recurring',
      eventOptions: 'Event Options',
      recurringEventOptions: 'Recurring options',
      recurrenceFrequency: 'Repeat',
      recurrenceEvery: 'Every',
      recurrenceIntervalSuffix: 'interval(s)',
      recurrenceEndsOn: 'Ends on',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Weekdays',
      recurrenceNoEndDate: 'No end date (optional)',
      recurrenceDaily: 'Daily',
      recurrenceWeekly: 'Weekly',
      recurrenceMonthly: 'Monthly',
      recurrenceYearly: 'Yearly',
      recurrenceNever: 'Never',
      recurrenceOn: 'On',
      recurrenceAfter: 'After',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Select at least one weekday for weekly recurring events',
      start: 'Start',
      end: 'End',
      startDate: 'Start Date',
      endDate: 'End Date',
      location: 'Location',
      locationPlaceholder: 'Conference Room A',
      description: 'Description',
      descriptionPlaceholder: 'Event details...',
      cancel: 'Cancel',
      createEvent: 'Create Event',
      creating: 'Creating...',
      editEvent: 'Edit Event',
      saveChanges: 'Save Changes',
      saving: 'Saving...',
      delete: 'Delete',
      deleting: 'Deleting...',
      deleteEventTitle: 'Delete Event',
      deleteRecurringEventTitle: 'Delete Recurring Event',
      deleteEventConfirm: 'Are you sure you want to delete "{title}"? This action cannot be undone.',
      deleteRecurringPrompt: '"{title}" is a recurring event. How would you like to delete it?',
      editRecurringEventTitle: 'Edit Recurring Event',
      editRecurringPrompt: '"{title}" is a recurring event. How would you like to edit it?',
      editThisOccurrence: 'Edit just this occurrence',
      editThisOccurrenceAndFuture: 'Edit this occurrence and all future occurrences',
      editEntireSeries: 'Edit the entire recurring series',
      deleteThisEventOnly: 'This event only',
      deleteThisOccurrence: 'Delete just this occurrence',
      deleteThisAndFutureEvents: 'This and future events',
      deleteThisOccurrenceAndFuture: 'Delete this occurrence and all future occurrences',
      deleteAllEvents: 'All events',
      deleteEntireSeries: 'Delete the entire recurring series',
      noEvents: 'No events',
      allDay: 'All Day',
      at: 'at',
      duration: 'Duration',
      attendees: 'Attendees',
      recurrence: 'Recurrence',
      recurringEvent: 'Recurring Event',
      unknownAttendee: 'Unknown',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar Limitation:',
      googleCalendarLimitationBody: 'Editing events is not currently supported for Google Calendar through Home Assistant. You can delete events from here, but to edit please use the Google Calendar app or website.',
      cannotModifyTitle: 'ℹ️ Cannot Modify:',
      cannotModifyBody: 'This event is missing required information (UID) for editing or deletion. You may need to recreate it.',
      untitledEvent: 'Untitled Event',
      noWritableCalendars: 'No writable calendars available',
      eventTitleRequired: 'Event title is required',
      startEndDatesRequired: 'Start and end dates are required',
      endDateBeforeStart: 'End date cannot be before start date',
      startEndTimesRequired: 'Start and end times are required',
      endTimeBeforeStart: 'End time must be after start time',
      failedCreateEvent: 'Failed to create event. Please try again.',
      failedUpdateEvent: 'Failed to update event. Please try again.',
      failedDeleteEvent: 'Failed to delete event. Please try again.',
      homeAssistantUnavailable: 'Home Assistant not available',
      googleCalendarEditError: 'Google Calendar does not support editing events through Home Assistant. Please use the Google Calendar app or website.',
      missingUidError: 'This event is missing required information (UID) and cannot be edited.',
      calendarNoModifyError: 'This calendar does not support event modifications. Try creating a new event instead.',
      createEventServiceError: 'Failed to create event',
      deleteEventServiceError: 'Failed to delete event',
      updateEventServiceError: 'Failed to update event. The calendar may not support modifications.',
      durationHour: '{count} hour',
      durationHours: '{count} hours',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} more',
      eventTitleWithStartTime: '{title}, {time}'
    }
  },

  fr: {
    locale: 'fr-FR',
    strings: {
      defaultTitle: 'Calendrier familial',
      addEvent: 'Ajouter un événement',
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      schedule: 'Planning',
      calendars: 'Calendriers',
      calendar: 'Calendrier',
      eventTitle: "Titre de l'événement",
      eventTitlePlaceholder: "Réunion d'équipe",
      allDayEvent: 'Événement sur toute la journée',
      recurring: 'Récurrent',
      eventOptions: "Options de l'événement",
      recurringEventOptions: 'Options de récurrence',
      recurrenceFrequency: 'Répéter',
      recurrenceEvery: 'Chaque',
      recurrenceIntervalSuffix: 'intervalle(s)',
      recurrenceEndsOn: 'Se termine le',
      recurrenceCount: 'Occurrences (COUNT)',
      recurrenceWeekdays: 'Jours de la semaine',
      recurrenceNoEndDate: 'Pas de date de fin (optionnel)',
      recurrenceDaily: 'Quotidien',
      recurrenceWeekly: 'Hebdomadaire',
      recurrenceMonthly: 'Mensuel',
      recurrenceYearly: 'Annuel',
      recurrenceNever: 'Jamais',
      recurrenceOn: 'Le',
      recurrenceAfter: 'Après',
      recurrenceOccurrences: 'occurrences',
      recurrenceSelectWeekday: 'Sélectionnez au moins un jour pour les événements hebdomadaires',
      start: 'Début',
      end: 'Fin',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      location: 'Lieu',
      locationPlaceholder: 'Salle de conférence A',
      description: 'Description',
      descriptionPlaceholder: "Détails de l'événement...",
      cancel: 'Annuler',
      createEvent: 'Créer un événement',
      creating: 'Création...',
      editEvent: "Modifier l'événement",
      saveChanges: 'Enregistrer les modifications',
      saving: 'Enregistrement...',
      delete: 'Supprimer',
      deleting: 'Suppression...',
      deleteEventTitle: "Supprimer l'événement",
      deleteRecurringEventTitle: "Supprimer l'événement récurrent",
      deleteEventConfirm: 'Voulez-vous vraiment supprimer "{title}" ? Cette action est irréversible.',
      deleteRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le supprimer ?',
      editRecurringEventTitle: 'Modifier un événement récurrent',
      editRecurringPrompt: '"{title}" est un événement récurrent. Comment souhaitez-vous le modifier ?',
      editThisOccurrence: 'Modifier uniquement cette occurrence',
      editThisOccurrenceAndFuture: 'Modifier cette occurrence et toutes les occurrences futures',
      editEntireSeries: 'Modifier toute la série récurrente',
      deleteThisEventOnly: 'Cet événement uniquement',
      deleteThisOccurrence: 'Supprimer uniquement cette occurrence',
      deleteThisAndFutureEvents: 'Cet événement et les suivants',
      deleteThisOccurrenceAndFuture: 'Supprimer cette occurrence et toutes les occurrences futures',
      deleteAllEvents: 'Tous les événements',
      deleteEntireSeries: 'Supprimer toute la série récurrente',
      noEvents: 'Aucun événement',
      allDay: 'Toute la journée',
      at: 'à',
      duration: 'Durée',
      attendees: 'Participants',
      recurrence: 'Récurrence',
      recurringEvent: 'Événement récurrent',
      unknownAttendee: 'Inconnu',
      googleCalendarLimitationTitle: 'ℹ️ Limitation Google Agenda :',
      googleCalendarLimitationBody: "La modification des événements n'est pas prise en charge pour Google Agenda via Home Assistant. Vous pouvez supprimer des événements ici, mais pour les modifier veuillez utiliser l'application ou le site Google Agenda.",
      cannotModifyTitle: 'ℹ️ Impossible de modifier :',
      cannotModifyBody: 'Cet événement ne contient pas les informations requises (UID) pour être modifié ou supprimé. Vous devrez peut-être le recréer.',
      untitledEvent: 'Événement sans titre',
      noWritableCalendars: 'Aucun calendrier modifiable disponible',
      eventTitleRequired: "Le titre de l'événement est requis",
      startEndDatesRequired: 'Les dates de début et de fin sont requises',
      endDateBeforeStart: 'La date de fin ne peut pas être antérieure à la date de début',
      startEndTimesRequired: 'Les heures de début et de fin sont requises',
      endTimeBeforeStart: "L'heure de fin doit être après l'heure de début",
      failedCreateEvent: "Impossible de créer l'événement. Veuillez réessayer.",
      failedUpdateEvent: "Impossible de modifier l'événement. Veuillez réessayer.",
      failedDeleteEvent: "Impossible de supprimer l'événement. Veuillez réessayer.",
      homeAssistantUnavailable: "Home Assistant n'est pas disponible",
      googleCalendarEditError: "Google Agenda ne permet pas la modification des événements via Home Assistant. Veuillez utiliser l'application ou le site Google Agenda.",
      missingUidError: 'Cet événement ne contient pas les informations requises (UID) et ne peut pas être modifié.',
      calendarNoModifyError: "Ce calendrier ne prend pas en charge les modifications d'événements. Essayez plutôt de créer un nouvel événement.",
      createEventServiceError: "Impossible de créer l'événement",
      deleteEventServiceError: "Impossible de supprimer l'événement",
      updateEventServiceError: "Impossible de modifier l'événement. Le calendrier ne prend peut-être pas en charge les modifications.",
      durationHour: '{count} heure',
      durationHours: '{count} heures',
      durationMinute: '{count} minute',
      durationMinutes: '{count} minutes',
      moreEvents: '+{count} de plus',
      eventTitleWithStartTime: '{title}, {time}'
    }
  },

  de: {
    locale: 'de-DE',
    strings: {
      defaultTitle: 'Familienkalender',
      addEvent: 'Termin hinzufügen',
      today: 'Heute',
      month: 'Monat',
      week: 'Woche',
      schedule: 'Zeitplan',
      calendars: 'Kalender',
      calendar: 'Kalender',
      eventTitle: 'Terminname',
      eventTitlePlaceholder: 'Team-Meeting',
      allDayEvent: 'Ganztägiges Ereignis',
      recurring: 'Wiederkehrend',
      eventOptions: 'Terminoptionen',
      recurringEventOptions: 'Wiederholungsoptionen',
      recurrenceFrequency: 'Wiederholen',
      recurrenceEvery: 'Alle',
      recurrenceIntervalSuffix: 'Intervall(e)',
      recurrenceEndsOn: 'Endet am',
      recurrenceCount: 'Anzahl (COUNT)',
      recurrenceWeekdays: 'Wochentage',
      recurrenceNoEndDate: 'Kein Enddatum (optional)',
      recurrenceDaily: 'Täglich',
      recurrenceWeekly: 'Wöchentlich',
      recurrenceMonthly: 'Monatlich',
      recurrenceYearly: 'Jährlich',
      recurrenceNever: 'Nie',
      recurrenceOn: 'Am',
      recurrenceAfter: 'Nach',
      recurrenceOccurrences: 'Vorkommen',
      recurrenceSelectWeekday: 'Wählen Sie mindestens einen Wochentag für wöchentliche Termine aus',
      start: 'Beginn',
      end: 'Ende',
      startDate: 'Startdatum',
      endDate: 'Enddatum',
      location: 'Ort',
      locationPlaceholder: 'Konferenzraum A',
      description: 'Beschreibung',
      descriptionPlaceholder: 'Ereignisdetails...',
      cancel: 'Abbrechen',
      createEvent: 'Termin erstellen',
      creating: 'Wird erstellt...',
      editEvent: 'Termin bearbeiten',
      saveChanges: 'Änderungen speichern',
      saving: 'Wird gespeichert...',
      delete: 'Löschen',
      deleting: 'Wird gelöscht...',
      deleteEventTitle: 'Termin löschen',
      deleteRecurringEventTitle: 'Wiederkehrenden Termin löschen',
      deleteEventConfirm: 'Möchten Sie "{title}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
      deleteRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn löschen?',
      editRecurringEventTitle: 'Wiederkehrenden Termin bearbeiten',
      editRecurringPrompt: '"{title}" ist ein wiederkehrender Termin. Wie möchten Sie ihn bearbeiten?',
      editThisOccurrence: 'Nur dieses Vorkommen bearbeiten',
      editThisOccurrenceAndFuture: 'Dieses und alle zukünftigen Vorkommen bearbeiten',
      editEntireSeries: 'Die gesamte Serie bearbeiten',
      deleteThisEventOnly: 'Nur dieses Ereignis',
      deleteThisOccurrence: 'Nur dieses Vorkommen löschen',
      deleteThisAndFutureEvents: 'Dieses und zukünftige Ereignisse',
      deleteThisOccurrenceAndFuture: 'Dieses Vorkommen und alle zukünftigen Vorkommen löschen',
      deleteAllEvents: 'Alle Ereignisse',
      deleteEntireSeries: 'Die gesamte Serie löschen',
      noEvents: 'Keine Ereignisse',
      allDay: 'Ganztägig',
      at: 'um',
      duration: 'Dauer',
      attendees: 'Teilnehmende',
      recurrence: 'Wiederholung',
      recurringEvent: 'Wiederkehrender Termin',
      unknownAttendee: 'Unbekannt',
      googleCalendarLimitationTitle: 'ℹ️ Google-Kalender-Einschränkung:',
      googleCalendarLimitationBody: 'Das Bearbeiten von Terminen wird für Google Kalender in Home Assistant derzeit nicht unterstützt. Sie können Termine hier löschen, zum Bearbeiten nutzen Sie bitte die Google Kalender App oder Website.',
      cannotModifyTitle: 'ℹ️ Kann nicht bearbeitet werden:',
      cannotModifyBody: 'Diesem Ereignis fehlen erforderliche Informationen (UID) zum Bearbeiten oder Löschen. Möglicherweise müssen Sie es neu erstellen.',
      untitledEvent: 'Unbenannter Termin',
      noWritableCalendars: 'Keine beschreibbaren Kalender verfügbar',
      eventTitleRequired: 'Ein Terminname ist erforderlich',
      startEndDatesRequired: 'Start- und Enddatum sind erforderlich',
      endDateBeforeStart: 'Das Enddatum darf nicht vor dem Startdatum liegen',
      startEndTimesRequired: 'Start- und Endzeit sind erforderlich',
      endTimeBeforeStart: 'Die Endzeit muss nach der Startzeit liegen',
      failedCreateEvent: 'Termin konnte nicht erstellt werden. Bitte erneut versuchen.',
      failedUpdateEvent: 'Termin konnte nicht aktualisiert werden. Bitte erneut versuchen.',
      failedDeleteEvent: 'Termin konnte nicht gelöscht werden. Bitte erneut versuchen.',
      homeAssistantUnavailable: 'Home Assistant nicht verfügbar',
      googleCalendarEditError: 'Google Kalender unterstützt das Bearbeiten von Terminen über Home Assistant nicht. Bitte verwenden Sie die Google Kalender App oder Website.',
      missingUidError: 'Dieses Ereignis enthält keine erforderlichen Informationen (UID) und kann nicht bearbeitet werden.',
      calendarNoModifyError: 'Dieser Kalender unterstützt keine Terminänderungen. Bitte erstellen Sie stattdessen einen neuen Termin.',
      createEventServiceError: 'Termin konnte nicht erstellt werden',
      deleteEventServiceError: 'Termin konnte nicht gelöscht werden',
      updateEventServiceError: 'Termin konnte nicht aktualisiert werden. Der Kalender unterstützt möglicherweise keine Änderungen.',
      durationHour: '{count} Stunde',
      durationHours: '{count} Stunden',
      durationMinute: '{count} Minute',
      durationMinutes: '{count} Minuten',
      moreEvents: '+{count} mehr',
      eventTitleWithStartTime: '{title}, {time}'
    }
  },

  nl: {
    locale: 'nl-NL',
    strings: {
      defaultTitle: 'Familie agenda',
      addEvent: 'Nieuwe afspraak',
      today: 'Vandaag',
      month: 'Maand',
      week: 'Week',
      schedule: 'Schema',
      calendars: "Agenda's",
      calendar: 'agenda',
      eventTitle: 'Afspraak onderwerp',
      eventTitlePlaceholder: 'Groepsafspraak',
      allDayEvent: 'Hele dag',
      recurring: 'Terugkerend',
      eventOptions: 'Afspraakopties',
      recurringEventOptions: 'terugkerend mogelijkheden',
      recurrenceFrequency: 'Herhaal',
      recurrenceEvery: 'Elke',
      recurrenceIntervalSuffix: 'herhalen elke',
      recurrenceEndsOn: 'Stop op',
      recurrenceCount: 'Gebeurtenissen (COUNT)',
      recurrenceWeekdays: 'Werkdagen',
      recurrenceNoEndDate: 'Geen einddatum (optioneel)',
      recurrenceDaily: 'Dagelijks',
      recurrenceWeekly: 'Wekelijks',
      recurrenceMonthly: 'Maandelijks',
      recurrenceYearly: 'Jaarlijks',
      recurrenceNever: 'Nooit',
      recurrenceOn: 'Op',
      recurrenceAfter: 'Na',
      recurrenceOccurrences: 'gebeurtenissen',
      recurrenceSelectWeekday: 'Selecteer ten minste één dag voor wekelijks terugkerende afspraken',
      start: 'Start',
      end: 'Einde',
      startDate: 'Begindatum',
      endDate: 'Einddatum',
      location: 'Locatie',
      locationPlaceholder: 'Vergaderruimte A',
      description: 'Omschrijving',
      descriptionPlaceholder: 'Afspraak details...',
      cancel: 'Annuleren',
      createEvent: 'Afspraak toevoegen',
      creating: 'Aanmaken...',
      editEvent: 'Afspraak bewerken',
      saveChanges: 'Wijzigingen opslaan',
      saving: 'Opslaan...',
      delete: 'Verwijder',
      deleting: 'Verwijderen...',
      deleteEventTitle: 'Afspraak verwijderen',
      deleteRecurringEventTitle: 'Herhaalafspraak verwijderen',
      deleteEventConfirm: 'Ben je er zeker van dat je "{title}" wil verwijderen? Deze actie is onomkeerbaar.',
      deleteRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem verwijderen?',
      editRecurringEventTitle: 'Herhalende afspraak bewerken',
      editRecurringPrompt: '"{title}" is een herhalende afspraak. Hoe wil je hem bewerken?',
      editThisOccurrence: 'Alleen deze afspraak wijzigen',
      editThisOccurrenceAndFuture: 'Deze afspraak en alle toekomstige afspraken bewerken',
      editEntireSeries: 'Bewerk de volledige afspraken reeks',
      deleteThisEventOnly: 'Alleen deze afspraak',
      deleteThisOccurrence: 'Verwijder alleen dit moment',
      deleteThisAndFutureEvents: 'Deze en alle toekomstige afspraken',
      deleteThisOccurrenceAndFuture: 'Verwijder deze en alle toekomstige afspraken',
      deleteAllEvents: 'Alle afspraken',
      deleteEntireSeries: 'Verwijder de volledige reeks',
      noEvents: 'Geen afspraken',
      allDay: 'Hele dag',
      at: 'op',
      duration: 'Duur',
      attendees: 'Deelnemers',
      recurrence: 'Terugkerend',
      recurringEvent: 'Terugkerende afpraak',
      unknownAttendee: 'Onbekend',
      googleCalendarLimitationTitle: 'ℹ️ Google Calendar beperking:',
      googleCalendarLimitationBody: 'Het bewerken van Google Calendar afspraken wordt momenteel niet ondersteund in Home Assistant. Je kunt afspraken verwijderen, maar voor het bewerken kun je de Google Calendar app of website gebruiken.',
      cannotModifyTitle: 'ℹ️ Kan het volgende niet aanpassen:',
      cannotModifyBody: 'Deze afspraak mist de vereiste informatie (UID) om te kunnen bewerken of verwijderen. Mogelijk moet je hem opnieuw aanmaken.',
      untitledEvent: 'Afspraak zonder onderwerp',
      noWritableCalendars: "Geen bewerkbare agenda's beschikbaar",
      eventTitleRequired: 'Afspraak onderwerp is verplicht',
      startEndDatesRequired: 'Begin- en einddatum zijn verplicht',
      endDateBeforeStart: 'Einddatum mag niet voor begindatum zijn',
      startEndTimesRequired: 'Begin- en eindtijd is verplicht',
      endTimeBeforeStart: 'Eindtijd mag niet voor begintijd zijn',
      failedCreateEvent: 'Niet gelukt om afspraak aan te maken. Probeer opnieuw.',
      failedUpdateEvent: 'Niet gelukt om afspraak bij te werken. Probeer opnieuw.',
      failedDeleteEvent: 'Niet gelukt om afspraak te verwijderen. Probeer opnieuw.',
      homeAssistantUnavailable: 'Home Assistant niet beschikbaar',
      googleCalendarEditError: 'Het wordt niet ondersteund om Google Calendar afspraken te bewerken binnen Home Assistant. Maak gebruik van de Google Calendar app of website.',
      missingUidError: 'Deze afspraak mist de vereiste informatie (UID) en kan daarom niet bewerkt worden.',
      calendarNoModifyError: 'Het bewerken van afspraken wordt niet ondersteund in deze agenda. Maak een nieuwe afspraak aan.',
      createEventServiceError: 'Niet gelukt om afspraak aan te maken',
      deleteEventServiceError: 'Niet gelukt om afspraak te verwijderen',
      updateEventServiceError: 'Niet gelukt om afspraak bij te werken. Mogelijk wordt dit niet ondersteund.',
      durationHour: '{count} uur',
      durationHours: '{count} uren',
      durationMinute: '{count} minuut',
      durationMinutes: '{count} minuten',
      moreEvents: '+{count} meer',
      eventTitleWithStartTime: '{title}, {time}'
    }
  }
};

// ============================================================================
// TRANSLATION HELPER FUNCTIONS
// ============================================================================

const DEFAULT_LANGUAGE = 'en';

const normalizeLanguage = (language) => {
  if (!language) return DEFAULT_LANGUAGE;
  return language.toLowerCase().split('-')[0];
};

const resolveLanguage = (language) => {
  const normalized = normalizeLanguage(language);
  return TRANSLATIONS[normalized] ? normalized : DEFAULT_LANGUAGE;
};

const interpolate = (template, params = {}) =>
  template.replace(/\{(\w+)\}/g, (_, key) => (params[key] !== undefined ? params[key] : ''));

const translate = (language, key, params = {}) => {
  const resolved = resolveLanguage(language);
  const fallbackStrings = TRANSLATIONS[DEFAULT_LANGUAGE]?.strings || {};
  const strings = TRANSLATIONS[resolved]?.strings || fallbackStrings;
  const fallback = fallbackStrings[key] || key;
  return interpolate(strings[key] || fallback, params);
};

// ============================================================================
// MAIN CALENDAR CARD CLASS
// ============================================================================

class SkylightCalendarCard extends HTMLElement {
  static COMMON_NAMED_COLORS = {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    lime: '#00FF00',
    green: '#008000',
    'lime/green': '#00FF00',
    limegreen: '#00FF00',
    blue: '#0000FF',
    yellow: '#FFFF00',
    cyan: '#00FFFF',
    aqua: '#00FFFF',
    'cyan/aqua': '#00FFFF',
    magenta: '#FF00FF',
    fuchsia: '#FF00FF',
    'magenta/fuchsia': '#FF00FF',
    silver: '#C0C0C0',
    gray: '#808080',
    grey: '#808080',
    maroon: '#800000',
    olive: '#808000',
    darkgreen: '#008000',
    'dark green': '#008000',
    'green dark': '#008000',
    greendark: '#008000',
    purple: '#800080',
    teal: '#008080',
    navy: '#000080',
    orange: '#FFA500',
    pink: '#FFC0CB'
  };

  constructor() {
    super();
    this._root = this;
    this._config = {};
    this._events = [];
    this._currentDate = new Date();
    this._viewMode = 'month'; // 'month', 'week-compact', or 'week-standard'
    this._weekStart = new Date();
    this._fetching = false;
    this._lastFetch = null;
    this._loadedEventRange = null;
    this._calendarDataSignatures = {}; // Track per-calendar data for change detection
    this._lastUnchangedDataRender = null; // Throttle unchanged-data UI refreshes
    this._hiddenCalendars = new Set(); // Track which calendars are hidden
    this._calendarCapabilities = {}; // Track calendar capabilities
    this._activeLanguage = DEFAULT_LANGUAGE;
    this._hasCustomTitle = false;
    this._isDarkMode = false;
    this._themeMode = 'auto';
    this._systemThemeMediaQuery = null;
    this._handleSystemThemeChange = (event) => {
      if (this._themeMode !== 'auto') {
        return;
      }

      this._isDarkMode = !!event.matches;
      this.render();
    };
    this._weekStandardFixedOffsetHeight = null;
    this._weekStandardContainerTopInViewport = null;
    this._monthContainerTopInViewport = null;
    this._activeModalBackHandler = null;
    this._combinedEditTargets = null;
    this._combinedDeleteTargets = null;
    this._handleViewportResize = () => {
      if (this.isEventManagementDialogOpen()) {
        return;
      }

      if (this._config.compact_height && (this._viewMode === 'week-standard' || (this._viewMode === 'month' && !this._config.show_all_events_month))) {
        this.render();
        return;
      }

      this.updateCompactHeaderWrapState();
      this.updateCalendarBadgesScrollState();
    };
  }

  getRootElementById(id) {
    return this._root?.querySelector(`#${id}`) || null;
  }

  getDashboardScopeKey() {
    const pathnameSegments = (window.location?.pathname || '').split('/').filter(Boolean);
    if (pathnameSegments.length > 0) {
      return pathnameSegments[0];
    }

    const hashPath = (window.location?.hash || '').replace(/^#/, '');
    const hashSegments = hashPath.split('/').filter(Boolean);
    if (hashSegments.length > 0) {
      return hashSegments[0];
    }

    return 'default';
  }

  getPreferenceStorageKey() {
    const dashboardScope = this.getDashboardScopeKey();
    const baseKey = this._config.preference_storage_key || (this._config.entities || []).join('|');

    if (!baseKey) {
      return null;
    }

    return `skylight-calendar-card:${dashboardScope}:${baseKey}`;
  }

  normalizeDefaultDarkMode(value) {
    if (value === true) return 'dark';
    if (value === false || value === undefined || value === null || value === '') return 'auto';

    const normalizedValue = String(value).trim().toLowerCase();
    if (['auto', 'light', 'dark'].includes(normalizedValue)) {
      return normalizedValue;
    }

    return 'auto';
  }

  applyThemeMode(mode = this._themeMode) {
    this._themeMode = this.normalizeDefaultDarkMode(mode);

    if (this._themeMode === 'dark') {
      this._isDarkMode = true;
      return;
    }

    if (this._themeMode === 'light') {
      this._isDarkMode = false;
      return;
    }

    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    this._isDarkMode = !!mediaQuery?.matches;
  }

  attachSystemThemeListener() {
    const mediaQuery = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mediaQuery || this._systemThemeMediaQuery === mediaQuery) {
      return;
    }

    this.detachSystemThemeListener();
    this._systemThemeMediaQuery = mediaQuery;

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', this._handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(this._handleSystemThemeChange);
    }
  }

  detachSystemThemeListener() {
    if (!this._systemThemeMediaQuery) {
      return;
    }

    if (typeof this._systemThemeMediaQuery.removeEventListener === 'function') {
      this._systemThemeMediaQuery.removeEventListener('change', this._handleSystemThemeChange);
    } else if (typeof this._systemThemeMediaQuery.removeListener === 'function') {
      this._systemThemeMediaQuery.removeListener(this._handleSystemThemeChange);
    }

    this._systemThemeMediaQuery = null;
  }

  loadPersistedPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const raw = window.localStorage?.getItem(storageKey);
      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed.hiddenCalendars)) {
        const knownEntities = new Set(this._config.entities || []);
        this._hiddenCalendars = new Set(parsed.hiddenCalendars.filter((entityId) => knownEntities.has(entityId)));
      }
    } catch (error) {
      console.warn('Failed to load persisted calendar preferences:', error);
    }
  }

  persistPreferences() {
    const storageKey = this.getPreferenceStorageKey();
    if (!storageKey) return;

    try {
      const payload = {
        hiddenCalendars: Array.from(this._hiddenCalendars)
      };
      window.localStorage?.setItem(storageKey, JSON.stringify(payload));
    } catch (error) {
      console.warn('Failed to persist calendar preferences:', error);
    }
  }

  updateCompactHeaderWrapState() {
    if (!this._root) return;

    const headerSelector = this._config.compact_header ? '.header-compact' : '.header';
    const header = this._root.querySelector(headerSelector);
    if (header) {
      const topLevelChildren = Array.from(header.children).filter((child) => child.offsetParent !== null);
      if (topLevelChildren.length <= 1) {
        header.classList.remove('is-wrapped');
      } else {
        const firstTop = topLevelChildren[0].offsetTop;
        const headerWrapped = topLevelChildren.some((child) => Math.abs(child.offsetTop - firstTop) > 1);
        header.classList.toggle('is-wrapped', headerWrapped);
      }
    }

    const controlsSelector = this._config.compact_header ? '.compact-header-controls' : '.header-controls';
    const controls = this._root.querySelector(controlsSelector);
    if (controls) {
      const visibleChildren = Array.from(controls.children).filter((child) => child.offsetParent !== null);
      if (visibleChildren.length <= 1) {
        controls.classList.remove('is-wrapped');
      } else {
        const firstRowTop = visibleChildren[0].offsetTop;
        const isWrapped = visibleChildren.some((child) => Math.abs(child.offsetTop - firstRowTop) > 1);
        controls.classList.toggle('is-wrapped', isWrapped);
      }
    }

    if (!this._config.compact_header) return;

    const badges = this._root.querySelector('.calendar-badges-inline');
    if (!badges) return;

    const visibleBadges = Array.from(badges.children).filter((child) => child.offsetParent !== null);
    if (visibleBadges.length <= 1) {
      badges.classList.remove('is-wrapped');
      return;
    }

    const firstBadgeTop = visibleBadges[0].offsetTop;
    const badgesWrapped = visibleBadges.some((child) => Math.abs(child.offsetTop - firstBadgeTop) > 1);
    badges.classList.toggle('is-wrapped', badgesWrapped);
  }


  updateCalendarBadgesScrollState() {
    if (!this._root || this._config.compact_header) return;

    const badgesContainer = this._root.querySelector('.calendar-badges-container');
    const badges = this._root.querySelector('.calendar-badges');
    if (!badgesContainer || !badges) return;

    const maxScrollLeft = badges.scrollWidth - badges.clientWidth;
    const hasOverflow = maxScrollLeft > 1;
    const showLeftIndicator = hasOverflow && badges.scrollLeft > 1;
    const showRightIndicator = hasOverflow && badges.scrollLeft < (maxScrollLeft - 1);

    badgesContainer.classList.toggle('has-overflow', hasOverflow);
    badgesContainer.classList.toggle('show-left-indicator', showLeftIndicator);
    badgesContainer.classList.toggle('show-right-indicator', showRightIndicator);
  }

  isEventManagementDialogOpen() {
    const modal = this.getRootElementById('event-modal');
    return !!modal && modal.classList.contains('show');
  }

  setConfig(config) {
    if (!config.entities || !Array.isArray(config.entities)) {
      throw new Error('You need to define calendar entities');
    }
    const language = resolveLanguage(config.language || this._hass?.language || this._hass?.locale?.language);
    this._hasCustomTitle = config.title !== undefined && config.title !== null;
    const previousHiddenCalendars = new Set(this._hiddenCalendars);
    const configuredMaxEvents = Number(config.max_events);
    const normalizedDefaultView = config.default_view === 'week'
      ? 'week-compact'
      : config.default_view === 'schedule'
        ? 'week-standard'
        : config.default_view;

    const normalizedCalendarColors = this.normalizeColorMap(config.colors || {});
    const normalizedEventFontColors = this.normalizeColorMap(config.event_font_colors || {});
    const normalizedHeaderColor = this.normalizeSingleColor(config.header_color);
    const normalizedHeaderTextColor = this.normalizeSingleColor(config.header_text_color);

    const configuredWeekStartHour = Number(config.week_start_hour);
    const normalizedWeekStartHour = Number.isFinite(configuredWeekStartHour)
      ? Math.min(23, Math.max(0, configuredWeekStartHour))
      : 0;
    const configuredWeekEndHour = Number(config.week_end_hour);
    const normalizedWeekEndHour = Number.isFinite(configuredWeekEndHour)
      ? Math.min(23, Math.max(0, configuredWeekEndHour))
      : 23;

    this._config = {
      title: this._hasCustomTitle ? config.title : translate(language, 'defaultTitle'),
      entities: config.entities,
      firstDayOfWeek: config.first_day_of_week || 0, // 0 = Sunday
      colors: normalizedCalendarColors,
      calendar_names: config.calendar_names || {}, // Map entity IDs to friendly names
      calendar_badge_icons: config.calendar_badge_icons || {}, // Map entity IDs to badge icon (mdi:*) or photo URL
      maxEvents: Number.isFinite(configuredMaxEvents) && configuredMaxEvents >= 0 ? configuredMaxEvents : 0,
      default_view: normalizedDefaultView || 'month', // Default view on load
      week_days: config.week_days || [0, 1, 2, 3, 4, 5, 6], // Which days to show in week view
      rolling_days_week_compact: config.rolling_days_week_compact ?? null, // If set, compact week view shows current day + N days instead of week_days
      rolling_days_schedule: config.rolling_days_schedule ?? null, // If set, schedule week view shows current day + N days instead of week_days
      rolling_weeks: config.rolling_weeks || null, // If set, show current week + N weeks in month view
      show_all_events_month: config.show_all_events_month || false, // In month view, show all events and allow week rows to grow while keeping row minimum height
      week_start_hour: normalizedWeekStartHour, // Start hour for week-standard view
      week_end_hour: normalizedWeekEndHour, // End hour for week-standard view
      lock_schedule_hours: config.lock_schedule_hours ?? false, // Keep schedule hours fixed even when events are outside the configured range
      compact_height: config.compact_height || false, // Fit to screen height
      compact_width: config.compact_width || false, // Schedule view: allow day columns to shrink below minimum width
      height_scale: config.height_scale || 1.0, // Scale factor for height (0.5 = 50%, 2.0 = 200%)
      compact_header: config.compact_header || false, // Compact header layout
      hide_calendars: config.hide_calendars || false, // Hide calendar badges from header area
      hide_controls: config.hide_controls || false, // Hide header controls (add/view/theme/navigation)
      hide_dark_mode_toggle: config.hide_dark_mode_toggle || false, // Hide dark mode toggle from header controls
      hide_event_calendar_bubble: config.hide_event_calendar_bubble || false, // Hide calendar initial bubble on events
      show_event_location: config.show_event_location || false, // Show event location in week and schedule views
      event_font_size: config.event_font_size ?? 11, // Font size for event bubble text in every view
      event_time_font_size: config.event_time_font_size ?? 9, // Font size for event time text in every view
      event_location_font_size: config.event_location_font_size ?? 9, // Font size for event location text in week and schedule views
      event_calendar_friendly_name: config.event_calendar_friendly_name || false, // Show friendly calendar name in event bubble area instead of icon
      event_font_colors: normalizedEventFontColors, // Per-calendar font colors for event bubble text
      hide_times_for_calendars: config.hide_times_for_calendars || [], // Hide times in schedule view for specific calendars
      show_current_time_bar: config.show_current_time_bar || false, // Show a "now" indicator in schedule view
      use_24hr_schedule: config.use_24hr_schedule ?? false, // Use 24-hour time notation in schedule view
      header_color: normalizedHeaderColor !== undefined ? normalizedHeaderColor : 'var(--primary-color)', // Custom header background color/gradient
      header_text_color: normalizedHeaderTextColor, // Optional custom header text color (auto contrast by default)
      background_transparent: config.background_transparent || false, // Make calendar surfaces transparent in every view
      background_image_url: config.background_image_url || null, // Optional background image URL for the calendar
      background_image_size: config.background_image_size || 'cover', // CSS background-size for calendar image
      background_image_position: config.background_image_position || 'center', // CSS background-position for calendar image
      background_image_repeat: config.background_image_repeat || 'no-repeat', // CSS background-repeat for calendar image
      combine_calendars: config.combine_calendars ?? false, // Combine exact duplicate events across calendars with zebra striping
      combine_style: this.normalizeCombineStyle(config.combine_style ?? 'bars'), // Visual treatment for merged calendar events
      combine_background: this.normalizeCombineBackground(config.combine_background ?? 'primary'), // Background for merged events: neutral, primary, or hex
      combine_calendars_width: config.combine_calendars_width ?? 18, // Stripe width in pixels for combined calendar zebra styling
      enable_event_management: config.enable_event_management !== false, // Enable create/edit/delete
      readonly_calendars: config.readonly_calendars || [], // Calendars that should not allow modifications
      language: config.language || null, // Language code for translations (e.g., 'en', 'de', 'fr')
      locale: config.locale || null, // Locale override for date/time formatting (e.g., 'en-US')
      color_scheme: this.normalizeDefaultDarkMode(config.color_scheme), // Controls theme mode on initial load: auto, light, or dark
      preference_storage_key: config.preference_storage_key || null, // Optional key to isolate saved preferences per card
      ...config,
      default_view: normalizedDefaultView || 'month', // Re-apply normalization after spread for legacy values
      color_scheme: this.normalizeDefaultDarkMode(config.color_scheme) // Re-apply normalization after spread for color scheme values
    };
    this._viewMode = this._config.default_view;
    this.applyThemeMode(this._config.color_scheme);
    this._hiddenCalendars = new Set(
      Array.from(previousHiddenCalendars).filter((entityId) => this._config.entities.includes(entityId))
    );
    this.loadPersistedPreferences();
    this._loadedEventRange = null;
    this._calendarDataSignatures = {};
    this._lastUnchangedDataRender = null;
    this.setWeekStart();
    this.render();
    this._activeLanguage = language;
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;

    // Check calendar capabilities when hass is set
    if (!oldHass || this._hass !== oldHass) {
      this.checkAllCalendarCapabilities();
    }

    const resolvedLanguage = this.getLanguage();
    if (resolvedLanguage !== this._activeLanguage) {
      this._activeLanguage = resolvedLanguage;
      if (!this._hasCustomTitle) {
        this._config.title = translate(this._activeLanguage, 'defaultTitle');
      }
      this.render();
    }

    // Refresh only when stale or when current view needs dates outside loaded range.
    if (!oldHass) {
      this.ensureEventsForCurrentRange({ force: true });
    } else {
      this.ensureEventsForCurrentRange();
    }
  }

  async checkAllCalendarCapabilities() {
    if (!this._hass) return;

    for (const entityId of this._config.entities) {
      const entity = this._hass.states[entityId];
      if (entity) {
        const features = entity.attributes?.supported_features || 0;

        // Check if this is a Google Calendar (which doesn't support UPDATE/DELETE services)
        const isGoogleCalendar = entityId.includes('google') ||
                                 entity.attributes?.integration === 'google';

        this._calendarCapabilities[entityId] = {
          canCreate: true, // Most calendars support creation
          canUpdate: (features & 2) !== 0, // UPDATE_EVENT = 2
          canDelete: (features & 4) !== 0, // DELETE_EVENT = 4
          isReadonly: this._config.readonly_calendars.includes(entityId),
          isGoogleCalendar: isGoogleCalendar // Track Google Calendar separately
        };
      }
    }
  }


  normalizeColorMap(colorMap) {
    if (!colorMap || typeof colorMap !== 'object') return {};

    return Object.entries(colorMap).reduce((acc, [entityId, color]) => {
      const normalized = this.normalizeSingleColor(color);
      if (normalized !== undefined && normalized !== null && normalized !== '') {
        acc[entityId] = normalized;
      }
      return acc;
    }, {});
  }

  normalizeSingleColor(colorValue) {
    if (colorValue === undefined || colorValue === null) {
      return colorValue;
    }

    const trimmed = String(colorValue).trim();
    if (!trimmed) return trimmed;

    const normalizedName = trimmed
      .toLowerCase()
      .replace(/[()]/g, '')
      .replace(/\s*\/\s*/g, '/')
      .replace(/\s+/g, ' ')
      .trim();
    const mappedColor = SkylightCalendarCard.COMMON_NAMED_COLORS[normalizedName];
    if (mappedColor) {
      return mappedColor;
    }

    return trimmed;
  }

  colorToHex(color) {
    if (!color) return null;

    const normalizedColor = this.normalizeSingleColor(color);
    if (typeof normalizedColor !== 'string') return null;

    const hex3Match = normalizedColor.match(/^#([\da-fA-F]{3})$/);
    if (hex3Match) {
      const [r, g, b] = hex3Match[1].split('');
      return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
    }

    const hex6Match = normalizedColor.match(/^#([\da-fA-F]{6})$/);
    if (hex6Match) {
      return `#${hex6Match[1].toUpperCase()}`;
    }

    return null;
  }

  colorToRgb(color) {
    const normalizedColor = this.normalizeSingleColor(color);
    if (typeof normalizedColor === 'string') {
      const rgbMatch = normalizedColor
        .match(/^rgba?\((.+)\)$/i);
      if (rgbMatch) {
        const normalizedChannels = rgbMatch[1]
          .replace(/\s*\/\s*.*/, '')
          .replace(/,/g, ' ')
          .trim()
          .split(/\s+/)
          .slice(0, 3)
          .map((channel) => Number(channel));

        if (normalizedChannels.length === 3 && normalizedChannels.every((value) => Number.isFinite(value))) {
          const [r, g, b] = normalizedChannels.map((value) => Math.max(0, Math.min(255, Math.round(value))));
          return { r, g, b };
        }
      }
    }

    const hex = this.colorToHex(normalizedColor);
    if (!hex) return null;

    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16)
    };
  }

  colorWithAlpha(color, alpha = 1) {
    const rgb = this.colorToRgb(color);
    if (!rgb) return color;

    const clamped = Math.max(0, Math.min(1, alpha));
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${clamped})`;
  }

  normalizeCombineStyle(styleValue) {
    const normalized = String(styleValue || '').trim().toLowerCase();
    return ['stripes', 'bars', 'dots'].includes(normalized) ? normalized : 'bars';
  }

  normalizeCombineBackground(backgroundValue) {
    const normalized = String(backgroundValue || '').trim();
    if (!normalized) return 'primary';

    const lower = normalized.toLowerCase();
    if (lower === 'neutral' || lower === 'primary') {
      return lower;
    }

    const hex = this.colorToHex(normalized);
    return hex || 'primary';
  }

  getWritableCalendars() {
    return this._config.entities.filter(entityId => {
      const caps = this._calendarCapabilities[entityId];
      return caps && caps.canCreate && !caps.isReadonly;
    });
  }

  getEventIdentityKey(entityId, event) {
    return `${entityId}|${event.uid || ''}|${event.recurring_event_id || ''}|${event.start?.dateTime || event.start?.date || event.start || ''}|${event.end?.dateTime || event.end?.date || event.end || ''}|${event.summary || ''}`;
  }

  async fetchEventsInRange(startDate, endDate) {
    const eventsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
    return Object.values(eventsByCalendar).flat();
  }

  async fetchEventsByCalendarInRange(startDate, endDate) {
    const chunks = this.getDateRangeChunks(startDate, endDate, 30);
    const eventsByCalendar = await Promise.all(
      this._config.entities.map((entityId, index) =>
        this.fetchEventsForCalendar(entityId, index, chunks)
      )
    );

    return this._config.entities.reduce((acc, entityId, index) => {
      acc[entityId] = eventsByCalendar[index] || [];
      return acc;
    }, {});
  }

  async fetchEventsForCalendar(entityId, colorIndex, chunks) {
    const seen = new Set();
    const color = this.normalizeSingleColor(this._config.colors[entityId] || this.getDefaultColor(colorIndex));

    const chunkEventLists = await Promise.all(
      chunks.map(chunk => this.fetchEventsForChunk(entityId, chunk))
    );

    const mergedEvents = [];
    chunkEventLists.forEach(events => {
      if (!events || !Array.isArray(events)) return;

      events.forEach(event => {
        const key = this.getEventIdentityKey(entityId, event);
        if (seen.has(key)) return;
        seen.add(key);

        mergedEvents.push({
          ...event,
          entityId,
          color
        });
      });
    });

    return mergedEvents;
  }

  async fetchEventsForChunk(entityId, chunk) {
    const chunkStartStr = chunk.startDate.toISOString();
    const chunkEndStr = chunk.endDate.toISOString();

    try {
      // Use WebSocket API to get calendar events.
      // Home Assistant command name varies by version.
      return await this.fetchEventsViaWebSocket(entityId, chunkStartStr, chunkEndStr);
    } catch (error) {
      // WebSocket API might not be available in older HA versions or for some integrations
      // Try REST API fallback without logging (this is expected)
      try {
        const startDateOnly = this.formatLocalDate(chunk.startDate);
        const endDateOnly = this.formatLocalDate(chunk.endDate);
        return await this._hass.callApi('GET', `calendars/${entityId}?start=${startDateOnly}T00:00:00Z&end=${endDateOnly}T23:59:59Z`);
      } catch (error2) {
        // Both methods failed - this is a real error
        console.error(`Failed to fetch events for ${entityId}:`, error2.message || error2);
        return [];
      }
    }
  }

  async fetchEventsViaWebSocket(entityId, chunkStartStr, chunkEndStr) {
    return this._hass.callWS({
      type: 'calendar/events',
      entity_id: entityId,
      start_date_time: chunkStartStr,
      end_date_time: chunkEndStr
    });
  }

  mergeEvents(existingEvents, incomingEvents) {
    const mergedByKey = new Map();

    existingEvents.forEach(event => {
      mergedByKey.set(this.getEventIdentityKey(event.entityId, event), event);
    });

    incomingEvents.forEach(event => {
      mergedByKey.set(this.getEventIdentityKey(event.entityId, event), event);
    });

    const merged = Array.from(mergedByKey.values());
    merged.sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b));
    return this.limitEvents(merged);
  }

  limitEvents(events) {
    if (this._config.maxEvents === 0) {
      return events;
    }

    return events.slice(0, this._config.maxEvents);
  }

  toStableString(value) {
    if (Array.isArray(value)) {
      return `[${value.map(item => this.toStableString(item)).join(',')}]`;
    }

    if (value && typeof value === 'object') {
      const entries = Object.keys(value)
        .sort()
        .map(key => `${JSON.stringify(key)}:${this.toStableString(value[key])}`);
      return `{${entries.join(',')}}`;
    }

    return JSON.stringify(value);
  }

  getCalendarDataSignature(events = []) {
    return events
      .map(event => {
        const { entityId, color, ...eventData } = event;
        return this.toStableString(eventData);
      })
      .sort()
      .join('|');
  }

  async updateEvents() {
    if (!this._hass || this._fetching) return;

    const { startDate, endDate } = this.getEventFetchRange();
    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const newEventsByCalendar = await this.fetchEventsByCalendarInRange(startDate, endDate);
      const changedCalendars = this._config.entities.filter(entityId => {
        const hasOldSignature = Object.prototype.hasOwnProperty.call(this._calendarDataSignatures, entityId);
        if (!hasOldSignature) {
          return true;
        }

        const oldSignature = this._calendarDataSignatures[entityId];
        const newSignature = this.getCalendarDataSignature(newEventsByCalendar[entityId]);
        return oldSignature !== newSignature;
      });

      if (changedCalendars.length === 0) {
        this._loadedEventRange = { startDate, endDate };

        const now = Date.now();
        const shouldRenderForUnchangedData = !this._lastUnchangedDataRender ||
          (now - this._lastUnchangedDataRender >= 15 * 60 * 1000);

        if (shouldRenderForUnchangedData) {
          this._lastUnchangedDataRender = now;
          this.render();
        }

        return;
      }

      this._config.entities.forEach(entityId => {
        this._calendarDataSignatures[entityId] = this.getCalendarDataSignature(newEventsByCalendar[entityId]);
      });

      const mergedEvents = Object.values(newEventsByCalendar)
        .flat()
        .sort((a, b) => this.getEventStartDate(a) - this.getEventStartDate(b));

      this._events = this.limitEvents(mergedEvents);
      this._loadedEventRange = { startDate, endDate };
      this._lastUnchangedDataRender = Date.now();
      this.render();
    } finally {
      this._fetching = false;
    }
  }

  async extendEventsForRange(startDate, endDate) {
    if (!this._hass || this._fetching) return;

    this._fetching = true;
    this._lastFetch = Date.now();

    try {
      const additionalEvents = await this.fetchEventsInRange(startDate, endDate);
      this._events = this.mergeEvents(this._events, additionalEvents);
      this.render();
    } finally {
      this._fetching = false;
    }
  }

  isDateRangeCoveredByLoadedEvents(targetStartDate, targetEndDate) {
    if (!this._loadedEventRange) return false;

    return targetStartDate >= this._loadedEventRange.startDate &&
           targetEndDate <= this._loadedEventRange.endDate;
  }

  async ensureEventsForCurrentRange({ force = false, renderIfCovered = false } = {}) {
    const shouldRefreshForAge = !this._lastFetch || (Date.now() - this._lastFetch > 60000);
    const { startDate: visibleStartDate, endDate: visibleEndDate } = this.getVisibleDateRange();

    // Background stale refreshes run through this path via hass updates.
    // Keep dialogs stable by postponing only those refreshes while modal is open.
    if (this.isEventManagementDialogOpen() && (force || shouldRefreshForAge)) {
      return;
    }

    if (force || shouldRefreshForAge || !this._loadedEventRange) {
      await this.updateEvents();
      return;
    }

    // Gate fetches on the actually visible range. If the user can already see
    // all required dates from loaded data, avoid any network call.
    if (this.isDateRangeCoveredByLoadedEvents(visibleStartDate, visibleEndDate)) {
      if (renderIfCovered) {
        this.render();
      }
      return;
    }

    // Once visible range falls outside loaded coverage, fetch around current view
    // (with buffer) and only request missing leading/trailing segments.
    const { startDate, endDate } = this.getEventFetchRange();
    const missingRanges = [];

    if (startDate < this._loadedEventRange.startDate) {
      const missingStartEnd = new Date(this._loadedEventRange.startDate);
      missingStartEnd.setDate(missingStartEnd.getDate() - 1);
      missingStartEnd.setHours(23, 59, 59, 999);
      missingRanges.push({ startDate, endDate: missingStartEnd });
    }

    if (endDate > this._loadedEventRange.endDate) {
      const missingEndStart = new Date(this._loadedEventRange.endDate);
      missingEndStart.setDate(missingEndStart.getDate() + 1);
      missingEndStart.setHours(0, 0, 0, 0);
      missingRanges.push({ startDate: missingEndStart, endDate });
    }

    for (const range of missingRanges) {
      await this.extendEventsForRange(range.startDate, range.endDate);
    }

    this._loadedEventRange = {
      startDate: new Date(Math.min(this._loadedEventRange.startDate.getTime(), startDate.getTime())),
      endDate: new Date(Math.max(this._loadedEventRange.endDate.getTime(), endDate.getTime()))
    };

    this.render();
  }

  getEventFetchRange() {
    const { startDate: visibleStart, endDate: visibleEnd } = this.getVisibleDateRange();

    // Keep a small look-behind and look-ahead buffer.
    const startDate = new Date(visibleStart);
    startDate.setDate(startDate.getDate() - 7);

    const endDate = new Date(visibleEnd);
    endDate.setDate(endDate.getDate() + 30);

    return { startDate, endDate };
  }

  getVisibleDateRange() {
    // Month rolling-weeks mode: from start of anchor week through configured weeks.
    if (this._viewMode === 'month' && this._config.rolling_weeks !== null) {
      const anchorDate = new Date(this._currentDate);
      anchorDate.setHours(0, 0, 0, 0);
      const currentDay = anchorDate.getDay();
      const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;

      const startDate = new Date(anchorDate);
      startDate.setDate(anchorDate.getDate() - diff);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + ((this._config.rolling_weeks + 1) * 7) - 1);
      endDate.setHours(23, 59, 59, 999);
      return { startDate, endDate };
    }

    // Standard month mode: full rendered grid (including adjacent month cells).
    if (this._viewMode === 'month') {
      const year = this._currentDate.getFullYear();
      const month = this._currentDate.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startOffset = (firstDay - this._config.firstDayOfWeek + 7) % 7;
      const totalCells = startOffset + daysInMonth;
      const trailingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

      const startDate = new Date(year, month, 1 - startOffset);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(year, month, daysInMonth + trailingCells);
      endDate.setHours(23, 59, 59, 999);

      return { startDate, endDate };
    }

    // Week views: from first shown day to last shown day.
    const weekDays = this.getWeekDays();
    const startDate = new Date(weekDays[0]);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(weekDays[weekDays.length - 1]);
    endDate.setHours(23, 59, 59, 999);
    return { startDate, endDate };
  }

  getDateRangeChunks(startDate, endDate, chunkDays = 30) {
    const chunks = [];
    let cursor = new Date(startDate);
    cursor.setHours(0, 0, 0, 0);

    while (cursor <= endDate) {
      const chunkStart = new Date(cursor);
      const chunkEnd = new Date(cursor);
      chunkEnd.setDate(chunkEnd.getDate() + chunkDays - 1);
      if (chunkEnd > endDate) {
        chunkEnd.setTime(endDate.getTime());
      }
      chunkEnd.setHours(23, 59, 59, 999);

      chunks.push({ startDate: chunkStart, endDate: chunkEnd });

      cursor = new Date(chunkEnd);
      cursor.setDate(cursor.getDate() + 1);
      cursor.setHours(0, 0, 0, 0);
    }

    return chunks;
  }

  getEventStartDate(event) {
    if (event.start?.dateTime) return new Date(event.start.dateTime);
    if (event.start?.date) return this.parseLocalDate(event.start.date);
    return new Date(event.start);
  }

  parseLocalDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return new Date(dateStr);
    const [year, month, day] = dateStr.split('-').map(Number);
    if (![year, month, day].every(Number.isFinite)) return new Date(dateStr);
    return new Date(year, month - 1, day);
  }

  parsePossiblyLocalDateTime(value) {
    if (!value || typeof value !== 'string') return new Date(value);

    const hasTimezone = /(?:[zZ]|[+-]\d{2}:?\d{2})$/.test(value);
    if (hasTimezone) return new Date(value);

    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/);
    if (!match) return new Date(value);

    const [, year, month, day, hour, minute, second = '0'] = match;
    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second)
    );
  }

  formatLocalDate(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getDefaultColor(index) {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    return colors[index % colors.length];
  }

  connectedCallback() {
    window.addEventListener('resize', this._handleViewportResize);
    window.visualViewport?.addEventListener('resize', this._handleViewportResize);
    this.attachSystemThemeListener();
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleViewportResize);
    window.visualViewport?.removeEventListener('resize', this._handleViewportResize);
    this.detachSystemThemeListener();
  }

  getCompactMaxHeight(containerTopInViewport = null) {
    if (!this._config.compact_height) return null;

    const viewportHeight = window.visualViewport?.height || window.innerHeight;
    const containerTop = Math.max(
      containerTopInViewport ?? this.getBoundingClientRect().top,
      0
    );
    const bottomSpacing = 24;
    const minimumHeight = 180;

    return Math.max(minimumHeight, Math.floor(viewportHeight - containerTop - bottomSpacing));
  }

  getCompactContainerStyle(maxHeight = null) {
    if (!this._config.compact_height) return '';

    const resolvedMaxHeight = maxHeight || this.getCompactMaxHeight();
    if (!resolvedMaxHeight) return '';

    return `max-height: ${resolvedMaxHeight}px; overflow-y: auto;`;
  }

  updateWeekStandardFixedOffsetHeightFromDom() {
    if (this._viewMode !== 'week-standard' || !this._config.compact_height || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.week-standard-container');
    const headerSpacer = this._root.querySelector('.time-column-header-spacer');
    const extraSpacer = this._root.querySelector('.time-column-extra-spacer');
    const allDaySpacer = this._root.querySelector('.time-column-allday-spacer');
    if (!container || !headerSpacer || !extraSpacer) return;

    const computed = window.getComputedStyle(container);
    const containerPadding = (parseFloat(computed.paddingTop) || 0) + (parseFloat(computed.paddingBottom) || 0);
    const measuredOffset = Math.ceil(
      containerPadding +
      headerSpacer.getBoundingClientRect().height +
      extraSpacer.getBoundingClientRect().height +
      (allDaySpacer ? allDaySpacer.getBoundingClientRect().height : 0)
    );
    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);

    if (!Number.isFinite(measuredOffset) || !Number.isFinite(measuredContainerTop)) return;

    const offsetChanged = this._weekStandardFixedOffsetHeight === null || Math.abs(this._weekStandardFixedOffsetHeight - measuredOffset) > 1;
    const containerTopChanged = this._weekStandardContainerTopInViewport === null || Math.abs(this._weekStandardContainerTopInViewport - measuredContainerTop) > 1;

    if (offsetChanged || containerTopChanged) {
      this._weekStandardFixedOffsetHeight = measuredOffset;
      this._weekStandardContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  updateMonthContainerTopInViewportFromDom() {
    if (this._viewMode !== 'month' || !this._config.compact_height || this._config.show_all_events_month || !this._root) return;
    if (this.isEventManagementDialogOpen()) return;

    const container = this._root.querySelector('.calendar-grid');
    if (!container) return;

    const measuredContainerTop = Math.max(container.getBoundingClientRect().top, 0);
    if (!Number.isFinite(measuredContainerTop)) return;

    const containerTopChanged = this._monthContainerTopInViewport === null || Math.abs(this._monthContainerTopInViewport - measuredContainerTop) > 1;
    if (containerTopChanged) {
      this._monthContainerTopInViewport = measuredContainerTop;
      this.render();
    }
  }


  getLanguage() {
    return resolveLanguage(this._config.language || this._hass?.language || this._hass?.locale?.language);
  }

  getLocale() {
    const resolved = this._activeLanguage || this.getLanguage();
    return this._config.locale || TRANSLATIONS[resolved]?.locale || this._hass?.locale?.language || TRANSLATIONS[DEFAULT_LANGUAGE]?.locale || 'en-US';
  }

  t(key, params = {}) {
    return translate(this.getLanguage(), key, params);
  }

  getWeekdayNames(format = 'short') {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { weekday: format });
    const baseDate = new Date(2021, 5, 6);
    const names = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + i);
      names.push(formatter.format(date));
    }
    return names;
  }

  setWeekStart() {
    const date = new Date(this._currentDate);
    const day = date.getDay();
    const diff = (day - this._config.firstDayOfWeek + 7) % 7;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    this._weekStart = date;
  }

  getRollingDaysForView(viewMode = this._viewMode) {
    if (viewMode === 'week-compact' && this._config.rolling_days_week_compact !== null) {
      return this._config.rolling_days_week_compact;
    }

    if (viewMode === 'week-standard' && this._config.rolling_days_schedule !== null) {
      return this._config.rolling_days_schedule;
    }

    return null;
  }

  getWeekDays(viewMode = this._viewMode) {
    const rollingDays = this.getRollingDaysForView(viewMode);

    // If rolling days are set, show current date + N days
    if (rollingDays !== null) {
      const days = [];
      const startDate = new Date(this._currentDate);
      startDate.setHours(0, 0, 0, 0);

      for (let i = 0; i <= rollingDays; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        days.push(date);
      }
      return days;
    }

    // Otherwise use the week-based approach
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(this._weekStart);
      date.setDate(this._weekStart.getDate() + i);
      if (this._config.week_days.includes(date.getDay())) {
        days.push(date);
      }
    }
    return days;
  }

  getStyles() {
    return `
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        width: 100%;
      }

      .calendar-container {
        background: var(--calendar-background, #ffffff);
        background-image: var(--calendar-background-image, none);
        background-size: var(--calendar-background-size, cover);
        background-position: var(--calendar-background-position, center);
        background-repeat: var(--calendar-background-repeat, no-repeat);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        width: 100%;
        color-scheme: light;
      }

      .calendar-container,
      .calendar-container input,
      .calendar-container select,
      .calendar-container textarea,
      .calendar-container button {
        color-scheme: light;
      }

      .header {
        background: var(--header-background);
        color: var(--header-text-color, white);
        padding: 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      .header-compact {
        padding: 16px 24px;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .compact-header-left {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .header-compact.is-wrapped .compact-header-left,
      .header-compact.is-wrapped .compact-header-controls {
        width: 100%;
        justify-content: center;
      }

      .header.is-wrapped .header-left,
      .header.is-wrapped .header-controls {
        width: 100%;
        justify-content: center;
      }

      .header-controls.is-wrapped .period-controls {
        margin-left: 0;
      }

      .calendar-badges-inline {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .calendar-badges-inline.is-wrapped {
        justify-content: center;
      }

      .calendar-badge-inline {
        padding: 6px 12px !important;
        font-size: 12px !important;
      }

      .calendar-badge-inline .calendar-badge-icon {
        width: 20px !important;
        height: 20px !important;
        font-size: 10px !important;
      }

      .calendar-badge-inline .calendar-badge-name {
        font-size: 12px;
      }

      .header-title {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
      }

      .add-event-button,
      .compact-add-event-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: background 0.2s;
      }

      .add-event-button:hover,
      .compact-add-event-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
        transform: none;
      }

      .add-event-button .icon,
      .compact-add-event-button .icon {
        font-size: 14px;
      }

      .header-controls {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }

      .compact-header-controls {
        justify-content: flex-end;
      }

      .period-controls,
      .compact-period-controls {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 0 1 auto;
        margin-left: auto;
      }

      .header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped {
        justify-content: center;
      }

      .compact-header-controls.is-wrapped .compact-period-controls {
        margin-left: 0;
      }

      .view-mode-buttons {
        display: flex;
        gap: 4px;
        background: var(--header-control-bg, rgba(255, 255, 255, 0.15));
        padding: 4px;
        border-radius: 8px;
      }

      .view-mode-button {
        background: transparent;
        border: none;
        color: inherit;
        padding: 6px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        transition: background 0.2s;
      }

      .view-mode-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.15));
      }

      .view-mode-button.active {
        background: var(--header-control-bg-active, rgba(255, 255, 255, 0.3));
      }

      .nav-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
      }

      .nav-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .today-button {
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        border: none;
        color: inherit;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: background 0.2s;
      }

      .today-button:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
      }

      .theme-toggle {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid var(--header-control-border, rgba(255, 255, 255, 0.4));
        background: var(--header-control-bg, rgba(255, 255, 255, 0.2));
        color: inherit;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        line-height: 1;
        transition: all 0.2s;
      }

      .theme-toggle:hover {
        background: var(--header-control-bg-hover, rgba(255, 255, 255, 0.3));
        border-color: var(--header-control-border-hover, rgba(255, 255, 255, 0.6));
      }

      .month-year {
        font-size: 18px;
        font-weight: 500;
        color: inherit;
        min-width: 210px;
        text-align: center;
      }

      .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
      }


      .calendar-grid.compact-month {
        align-items: stretch;
      }

      .calendar-grid.compact-month .day-cell {
        min-height: 0;
        overflow: hidden;
      }

      .day-header {
        background: #f9fafb;
        padding: 12px 8px;
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .day-cell {
        background: white;
        min-height: 100px;
        min-width: 0;
        padding: 8px;
        position: relative;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-cell:hover {
        background: #f9fafb;
      }

      .day-cell.other-month {
        background: #fafafa;
        opacity: 0.5;
      }

      .day-cell.today {
        background: #eff6ff;
      }

      .day-number {
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 4px;
      }

      .day-cell.today .day-number {
        background: #3b82f6;
        color: white;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }

      .event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 4px 6px 4px calc(6px + var(--combine-left-offset, 0px));
        border-radius: 4px;
        font-size: var(--event-bubble-font-size, 11px);
        line-height: 1.2;
        margin-bottom: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-weight: 500;
      }

      .event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }

      .event-time {
        font-size: var(--event-time-font-size, 9px);
        opacity: 0.9;
        margin-right: 4px;
      }

      .more-events {
        font-size: 10px;
        color: #6b7280;
        margin-top: 2px;
        font-weight: 500;
        cursor: pointer;
        width: fit-content;
      }

      .more-events:hover {
        text-decoration: underline;
      }

      .week-compact-container.single-day-modal {
        grid-template-columns: 1fr;
        border-top: none;
        background: transparent;
      }

      /* Week Compact View Styles */
      .week-compact-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1px;
        background: #e5e7eb;
        border-top: 1px solid #e5e7eb;
      }

      .week-day-column {
        background: white;
        padding: 16px 12px;
        min-height: 200px;
      }

      .week-day-header {
        text-align: center;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 2px solid #e5e7eb;
      }

      .week-day-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .week-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
      }

      .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .week-compact-event {
        background: #3b82f6;
        color: var(--event-bubble-text-color, white);
        font-size: var(--event-bubble-font-size, 11px);
        padding: 8px 10px 8px calc(10px + var(--combine-left-offset, 0px));
        border-radius: 6px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .week-compact-event:hover {
        transform: translateX(2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .week-compact-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 600;
        opacity: 0.9;
        margin-bottom: 4px;
      }

      .week-compact-event-title {
        font-size: 1em;
        font-weight: 500;
        line-height: 1.3;
      }

      .week-compact-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      /* Week Standard View Styles */

      .calendar-badges-container {
        position: relative;
      }

      .calendar-badges {
        padding: 16px 24px;
        display: flex;
        gap: 12px;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        background: white;
        border-bottom: 1px solid #e5e7eb;
      }

      .calendar-badges-container.has-overflow::after,
      .calendar-badges-container.has-overflow::before {
        position: absolute;
        top: 0;
        bottom: 1px;
        width: 44px;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 800;
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .calendar-badges-container.has-overflow::after {
        content: '»';
        right: 0;
        color: rgba(17, 24, 39, 0.85);
        background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.has-overflow::before {
        content: '«';
        left: 0;
        color: rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
      }

      .calendar-badges-container.show-right-indicator::after,
      .calendar-badges-container.show-left-indicator::before {
        opacity: 1;
      }

      .calendar-badges-container.show-right-indicator::after {
        animation: badges-overflow-nudge-right 1.2s ease-in-out infinite;
      }

      .calendar-badges-container.show-left-indicator::before {
        animation: badges-overflow-nudge-left 1.2s ease-in-out infinite;
      }

      @keyframes badges-overflow-nudge-right {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(3px);
        }
      }

      @keyframes badges-overflow-nudge-left {
        0%,
        100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-3px);
        }
      }

      .calendar-badge {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        gap: 8px;
        padding: 8px 16px;
        border-radius: 20px;
        border: 2px solid;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        user-select: none;
      }

      .calendar-badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      .calendar-badge-hidden {
        opacity: 0.5;
      }

      .calendar-badge-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 11px;
        font-weight: 600;
        overflow: hidden;
      }

      .calendar-badge-icon ha-icon {
        --mdc-icon-size: 14px;
      }

      .calendar-badge-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .calendar-badge-name {
        color: #374151;
      }

      .week-standard-container {
        --week-standard-column-gap: 12px;
        --week-standard-bridge-overlap: 2px;
        display: flex;
        align-items: flex-start;
        background: #f9fafb;
        overflow-x: auto;
        padding: 16px;
        gap: var(--week-standard-column-gap);
        width: 100%;
        box-sizing: border-box;
      }

      .time-column {
        min-width: 60px;
        flex-shrink: 0;
        position: relative;
      }

      .time-column-header-spacer {
        height: 60px;
        background: transparent;
        flex-shrink: 0;
      }

      .time-column-allday-spacer {
        padding: 8px;
        background: transparent;
        border-bottom: 2px solid transparent;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      .time-column-extra-spacer {
        height: 35px;
        background: transparent;
        flex-shrink: 0;
      }

      .time-slot {
        height: 120px;
        font-size: 11px;
        color: #9ca3af;
        text-align: right;
        font-weight: 500;
        position: relative;
        padding-right: 8px;
        display: flex;
        align-items: flex-start;
        padding-top: 0;
        box-sizing: border-box;
        border-top: 1px solid transparent;
      }

      .time-slot-label {
        position: absolute;
        top: -6px;
        right: 8px;
        line-height: 1;
      }

      .week-standard-day-column {
        flex: 1;
        min-width: 140px;
        background: white;
        border-radius: 8px;
        overflow: visible;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }

      .week-standard-container.compact-width .week-standard-day-column {
        min-width: 0;
      }

      .week-standard-day-header {
        padding: 16px;
        text-align: center;
        border-bottom: 1px solid #e5e7eb;
        background: white;
      }

      .week-standard-day-name {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        color: #6b7280;
        letter-spacing: 0.5px;
      }

      .week-standard-day-date {
        font-size: 24px;
        font-weight: 700;
        color: #111827;
        margin-top: 4px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .day-time-slots {
        position: relative;
        min-height: 600px;
      }

      .all-day-events {
        padding: 8px;
        background: #f9fafb;
        border-bottom: 2px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        overflow: visible;
      }

      .all-day-event {
        padding: 4px 8px 4px calc(8px + var(--combine-left-offset, 0px));
        color: var(--event-bubble-text-color, white);
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        font-size: var(--event-bubble-font-size, 11px);
        flex-shrink: 0;
        height: 24px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        overflow: visible;
        position: relative;
      }

      .all-day-event.continues-prev {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      .all-day-event.continues-next {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .all-day-event.bridge-prev {
        margin-left: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-left: calc(8px + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap) + var(--combine-left-offset, 0px));
      }

      .all-day-event.bridge-next {
        margin-right: calc(-1 * (var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)));
        padding-right: calc(8px + var(--week-standard-column-gap) + var(--week-standard-bridge-overlap));
      }

      .all-day-event-spacer {
        height: 24px;
        flex-shrink: 0;
      }

      .all-day-event:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      }

      .all-day-event.leading-span-title {
        z-index: 2;
      }

      .all-day-event-title {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: inherit;
        display: block;
        min-width: 0;
        max-width: 100%;
        flex: 1 1 auto;
      }

      .all-day-event-title.spans-multiple-days {
        position: absolute;
        top: 50%;
        left: calc(8px + var(--combine-left-offset, 0px));
        transform: translateY(-50%);
        width: calc(((100% * var(--all-day-title-span-days, 1)) + ((var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)) * var(--all-day-title-gap-count, 0))) - (24px + var(--combine-left-offset, 0px)));
        max-width: calc(((100% * var(--all-day-title-span-days, 1)) + ((var(--week-standard-column-gap) + var(--week-standard-bridge-overlap)) * var(--all-day-title-gap-count, 0))) - (24px + var(--combine-left-offset, 0px)));
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 1;
        pointer-events: none;
      }

      .day-time-slot {
        height: 120px;
        border-top: 1px solid #f3f4f6;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        transition: background 0.2s;
      }

      .day-time-slot:hover {
        background: rgba(59, 130, 246, 0.05);
      }

      .week-standard-event {
        position: absolute;
        left: 8px;
        right: 8px;
        color: var(--event-bubble-text-color, white);
        padding: 4px 8px 4px calc(8px + var(--combine-left-offset, 0px));
        border-radius: 8px;
        font-size: var(--event-bubble-font-size, 11px);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        z-index: 1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        box-sizing: border-box;
      }

      .week-standard-event:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10;
      }

      .week-standard-event-title {
        font-weight: 600;
        margin-bottom: 4px;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .week-standard-event-time {
        font-size: var(--event-time-font-size, 9px);
        font-weight: 500;
        opacity: 0.85;
      }

      .week-standard-event-location {
        font-size: var(--event-location-font-size, 9px);
        opacity: 0.9;
        margin-top: 4px;
        line-height: 1.3;
        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      .week-standard-event-calendar-name {
        font-size: 10px;
        font-weight: 600;
        opacity: 0.9;
      }

      .week-standard-event-icons {
        display: flex;
        justify-content: flex-end;
        gap: 4px;
        margin-top: 4px;
      }

      .week-standard-event-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        flex-shrink: 0;
      }

      .current-time-line {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #ef4444;
        z-index: 5;
        pointer-events: none;
      }

      .current-time-line::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ef4444;
        left: -4px;
        top: -3px;
      }

      .event-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
      }

      .event-modal.show {
        display: flex;
      }

      .modal-content {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 16px;
      }

      .modal-title {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
        margin: 0;
      }

      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: background 0.2s;
      }

      .modal-close:hover {
        background: #f3f4f6;
      }

      .modal-body {
        color: #374151;
      }

      .modal-row {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
        font-size: 14px;
      }

      .modal-label {
        font-weight: 600;
        min-width: 80px;
        color: #6b7280;
      }

      .modal-value {
        flex: 1;
      }

      #create-event-form,
      #edit-event-form {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .form-group,
      .form-group-inline {
        margin-bottom: 0;
      }

      .form-label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 8px;
      }

      .form-group-inline .form-label {
        margin-bottom: 0;
      }

      .form-inline-row {
        display: grid;
        grid-template-columns: 120px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
      }

      .form-inline-row.form-inline-row-top {
        align-items: start;
      }

      .form-required {
        color: #ef4444;
        margin-left: 4px;
      }

      .form-input {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-input:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-input.error {
        border-color: #ef4444;
      }

      .form-select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        background: white;
        cursor: pointer;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-select:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-textarea {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        font-family: inherit;
        min-height: 80px;
        resize: vertical;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-textarea:focus {
        outline: none;
        border-color: #3b82f6;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .form-checkbox-group {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .form-checkbox-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 10px 14px;
      }

      .form-checkbox-row {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        margin-bottom: 0;
      }

      .form-checkbox-row .form-group {
        margin-bottom: 0;
      }

      .form-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .form-checkbox-label {
        font-size: 14px;
        color: #374151;
        cursor: pointer;
        user-select: none;
      }

      .recurrence-ends-label {
        margin-bottom: 10px;
      }

      .recurrence-end-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 12px;
        align-items: center;
        margin-bottom: 10px;
      }

      .recurrence-end-option {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: #374151;
        cursor: pointer;
      }

      .recurrence-end-option input[type="radio"] {
        margin: 0;
      }

      .recurrence-end-row .form-input {
        margin: 0;
      }

      .recurrence-after-input {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .recurrence-after-input .form-input {
        max-width: 80px;
      }

      .form-error {
        color: #ef4444;
        font-size: 13px;
        margin-top: 4px;
      }

      .form-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 6px;
      }

      .btn {
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        font-family: inherit;
      }

      .btn-primary {
        background: #3b82f6;
        color: white;
      }

      .btn-primary:hover {
        background: #2563eb;
        transform: translateY(-1px);
      }

      .btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }

      .btn-secondary {
        background: #f3f4f6;
        color: #374151;
      }

      .btn-secondary:hover {
        background: #e5e7eb;
      }

      .btn-danger {
        background: #ef4444;
        color: white;
      }

      .btn-danger:hover {
        background: #dc2626;
        transform: translateY(-1px);
      }

      .btn-danger:disabled {
        background: #fca5a5;
        cursor: not-allowed;
        transform: none;
      }

      .modal-actions {
        display: flex;
        gap: 12px;
        justify-content: space-between;
        margin-top: 24px;
        align-items: center;
      }

      .modal-actions-left {
        display: flex;
        gap: 12px;
      }

      .modal-actions-right {
        display: flex;
        gap: 12px;
      }

      .confirm-dialog {
        background: white;
        border-radius: 12px;
        padding: 24px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .confirm-title {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px 0;
      }

      .confirm-message {
        font-size: 14px;
        color: #6b7280;
        margin-bottom: 20px;
        line-height: 1.5;
      }

      .confirm-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
      }

      .recurring-options {
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }

      .recurring-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        cursor: pointer;
        border-radius: 6px;
        transition: background 0.2s;
        margin-bottom: 8px;
      }

      .recurring-option:hover {
        background: #f3f4f6;
      }

      .recurring-option:last-child {
        margin-bottom: 0;
      }

      .recurring-option input[type="radio"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      .recurring-option-label {
        flex: 1;
      }

      .recurring-option-title {
        font-weight: 600;
        color: #111827;
        font-size: 14px;
        margin-bottom: 2px;
      }

      .recurring-option-description {
        font-size: 13px;
        color: #6b7280;
      }

      .error-message {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #991b1b;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .success-message {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        color: #166534;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .empty-state {
        padding: 40px 24px;
        text-align: center;
        color: #6b7280;
      }

      .empty-state-icon {
        font-size: 48px;
        margin-bottom: 16px;
        opacity: 0.5;
      }

      .empty-state-text {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
      }

      .empty-state-subtext {
        font-size: 14px;
        opacity: 0.8;
      }

      .day-modal-event {
        margin-bottom: 16px;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
      }

      .day-modal-event-title {
        font-weight: 600;
        margin-bottom: 4px;
      }

      .day-modal-event-meta {
        font-size: 13px;
        color: #6b7280;
      }

      .day-modal-event-location {
        font-size: 13px;
        color: #6b7280;
        margin-top: 4px;
      }

      .info-banner {
        border-radius: 8px;
        padding: 12px;
        margin-top: 16px;
        font-size: 13px;
      }

      .info-banner.warning {
        background: #fef3c7;
        border: 1px solid #fbbf24;
        color: #92400e;
      }


      .calendar-container.dark-mode {
        background: #2a2f36;
        color: #e8ecf1;
        color-scheme: dark;
      }

      .calendar-container.dark-mode,
      .calendar-container.dark-mode input,
      .calendar-container.dark-mode select,
      .calendar-container.dark-mode textarea,
      .calendar-container.dark-mode button {
        color-scheme: dark;
      }

      .calendar-container.dark-mode .week-standard-container,
      .calendar-container.dark-mode .calendar-badges {
        background: #30363f;
        border-color: #4b5563;
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::after {
        color: rgba(248, 250, 252, 0.95);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to left, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }

      .calendar-container.dark-mode .calendar-badges-container.has-overflow::before {
        color: rgba(248, 250, 252, 0.9);
        text-shadow: 0 0 10px rgba(17, 24, 39, 0.75);
        background: linear-gradient(to right, rgba(48, 54, 63, 1), rgba(48, 54, 63, 0));
      }


      .calendar-container.dark-mode .day-cell,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-standard-day-header,
      .calendar-container.dark-mode .all-day-events,
      .calendar-container.dark-mode .day-time-slot,
      .calendar-container.dark-mode .time-slot,
      .calendar-container.dark-mode .time-slot-label,
      .calendar-container.dark-mode .empty-state {
        background: #353c45;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .time-slot {
        background: #353c45;
        color: #dde3ea;
        border-color: #353c45;
      }

	  .calendar-container.dark-mode .day-header {
        background: #353b42;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-header {
        border-bottom-color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-name,
      .calendar-container.dark-mode .week-standard-day-date,
      .calendar-container.dark-mode .week-day-name,
      .calendar-container.dark-mode .week-day-date {
        background: #3b434d;
        color: #dde3ea;
        border-color: #556070;
      }

      .calendar-container.dark-mode .week-day-column.today .week-day-date {
        color: #3b82f6;
      }

      .calendar-container.dark-mode .week-standard-day-column.today .week-standard-day-date {
        background: #3b82f6;
        color: white;
        border-radius: 50%;
      }

      .calendar-container.dark-mode .day-cell:hover,
      .calendar-container.dark-mode .day-time-slot:hover,
      .calendar-container.dark-mode .recurring-option:hover,
      .calendar-container.dark-mode .modal-close:hover,
      .calendar-container.dark-mode .btn-secondary:hover {
        background: #3f4752;
      }

      .calendar-container.dark-mode .day-cell.other-month {
        background: #2f353e;
      }

      .calendar-container.dark-mode .day-number,
      .calendar-container.dark-mode .month-year,
      .calendar-container.dark-mode .all-day-event-title,
      .calendar-container.dark-mode .week-standard-event,
      .calendar-container.dark-mode .modal-title,
      .calendar-container.dark-mode .confirm-title,
      .calendar-container.dark-mode .recurring-option-title {
        color: #f4f7fb;
      }

      .calendar-container.dark-mode .event-time,
      .calendar-container.dark-mode .more-events,
      .calendar-container.dark-mode .week-standard-event-time,
      .calendar-container.dark-mode .modal-label,
      .calendar-container.dark-mode .confirm-message,
      .calendar-container.dark-mode .recurring-option-description,
      .calendar-container.dark-mode .day-modal-event-meta,
      .calendar-container.dark-mode .day-modal-event-location,
      .calendar-container.dark-mode .empty-state {
        color: #c7d0db;
      }

      .calendar-container.dark-mode .event,
      .calendar-container.dark-mode .week-compact-event,
      .calendar-container.dark-mode .week-standard-event,
      .calendar-container.dark-mode .all-day-event,
      .calendar-container.dark-mode .week-standard-day-column,
      .calendar-container.dark-mode .week-day-column,
      .calendar-container.dark-mode .modal-content,
      .calendar-container.dark-mode .confirm-dialog,
      .calendar-container.dark-mode .form-input,
      .calendar-container.dark-mode .form-select,
      .calendar-container.dark-mode .form-textarea,
      .calendar-container.dark-mode .recurring-options,
      .calendar-container.dark-mode .btn-secondary,
      .calendar-container.dark-mode .day-modal-event {
        background: #3b434d;
        color: #e2e8f0;
        border-color: #606b7b;
        box-shadow: none;
      }

      .calendar-container.dark-mode .modal-header,
      .calendar-container.dark-mode .modal-row {
        border-color: #5b6676;
      }

      .calendar-container.dark-mode .form-checkbox-label,
      .calendar-container.dark-mode .recurrence-end-option,
      .calendar-container.dark-mode .modal-value,
      .calendar-container.dark-mode .form-label {
        color: #d6dee8;
      }

      .calendar-container.dark-mode .form-required {
        color: #f87171;
      }

      .calendar-container.dark-mode .form-input::placeholder,
      .calendar-container.dark-mode .form-textarea::placeholder {
        color: #9aa6b8;
      }

      .calendar-container.dark-mode input[type="date"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="datetime-local"]::-webkit-calendar-picker-indicator,
      .calendar-container.dark-mode input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(1) brightness(0.9);
      }

      .calendar-container.dark-mode .btn-secondary {
        border: 1px solid #606b7b;
      }

      .calendar-container.dark-mode .info-banner {
        background: #5a4a34;
        border-color: #8f7a56;
        color: #f3e5c7;
      }

      .calendar-container.dark-mode .view-mode-buttons,
      .calendar-container.dark-mode .add-event-button,
      .calendar-container.dark-mode .compact-add-event-button,
      .calendar-container.dark-mode .nav-button,
      .calendar-container.dark-mode .today-button,
      .calendar-container.dark-mode .theme-toggle {
        background: rgba(226, 232, 240, 0.14);
        border-color: rgba(226, 232, 240, 0.28);
      }

      .calendar-container.dark-mode .view-mode-button.active {
        background: rgba(226, 232, 240, 0.24);
      }

      .calendar-container.dark-mode .week-day-header,
      .calendar-container.dark-mode .week-standard-day-header {
        background: #3b434d;
      }

      .calendar-container.dark-mode .week-standard-event-time,
      .calendar-container.dark-mode .event-time {
        color: rgba(255, 255, 255, 0.92);
      }


      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .week-standard-container,
      .calendar-container.custom-background .calendar-badges,
      .calendar-container.custom-background .day-header,
      .calendar-container.custom-background .day-cell,
      .calendar-container.custom-background .week-day-column,
      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-column,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .all-day-events,
      .calendar-container.custom-background .day-time-slot,
      .calendar-container.custom-background .time-slot,
      .calendar-container.custom-background .time-slot-label,
      .calendar-container.custom-background .empty-state {
        background: transparent !important;
      }

      .calendar-container.custom-background .week-day-header,
      .calendar-container.custom-background .week-standard-day-header,
      .calendar-container.custom-background .all-day-events,
      .calendar-container.custom-background .day-time-slot,
      .calendar-container.custom-background .calendar-grid,
      .calendar-container.custom-background .week-compact-container,
      .calendar-container.custom-background .calendar-badges {
        border-color: rgba(255, 255, 255, 0.35) !important;
      }

      .calendar-container.custom-background .calendar-badges-container.has-overflow::after,
      .calendar-container.custom-background .calendar-badges-container.has-overflow::before {
        display: none;
      }


      .calendar-container.custom-background .day-cell.other-month {
        background: rgba(255, 255, 255, 0.12) !important;
      }

      .calendar-container.dark-mode.custom-background .day-cell.other-month {
        background: rgba(0, 0, 0, 0.2) !important;
      }

      @media (max-width: 768px) {
        .header {
          flex-direction: column;
          align-items: stretch;
        }

        .header-controls {
          justify-content: space-between;
        }

        .compact-header-controls {
          justify-content: flex-start;
        }

        .period-controls,
        .compact-period-controls {
          width: 100%;
          justify-content: space-between;
          gap: 8px;
          margin-left: 0;
        }

        .period-controls .month-year,
        .compact-period-controls .month-year {
          flex: 1;
          text-align: center;
        }


        .week-standard-container {
          font-size: 10px;
        }

        .week-standard-day-date {
          font-size: 14px;
        }

        .form-row {
          grid-template-columns: 1fr;
        }

        .form-inline-row {
          grid-template-columns: 88px minmax(0, 1fr);
          gap: 8px;
          align-items: center;
        }

        .form-group-inline .form-label {
          margin-bottom: 0;
        }
      }
    `;
  }

  render() {
    const today = new Date();
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();

    const resolvedHeaderBackground = this.normalizeSingleColor(this._config.header_color) || 'var(--primary-color)';
    const resolvedHeaderTextColor = this.normalizeSingleColor(this._config.header_text_color)
      || this.getContractColor(resolvedHeaderBackground);
    const headerControlBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.16);
    const headerControlHoverBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.24);
    const headerControlActiveBackground = this.colorWithAlpha(resolvedHeaderTextColor, 0.32);
    const headerControlBorder = this.colorWithAlpha(resolvedHeaderTextColor, 0.4);
    const headerControlBorderHover = this.colorWithAlpha(resolvedHeaderTextColor, 0.6);
    const headerStyle = `--header-background: ${resolvedHeaderBackground}; --header-text-color: ${resolvedHeaderTextColor}; --header-control-bg: ${headerControlBackground}; --header-control-bg-hover: ${headerControlHoverBackground}; --header-control-bg-active: ${headerControlActiveBackground}; --header-control-border: ${headerControlBorder}; --header-control-border-hover: ${headerControlBorderHover};`;
    const normalizedBackgroundImageUrl = this.normalizeBackgroundImageUrl(this._config.background_image_url);
    const safeBackgroundImageUrl = normalizedBackgroundImageUrl
      ? String(normalizedBackgroundImageUrl).replace(/[\'\\]/g, '\\$&')
      : null;
    const backgroundImageStyle = safeBackgroundImageUrl
      ? `--calendar-background-image: url('${safeBackgroundImageUrl}'); --calendar-background-size: ${this._config.background_image_size}; --calendar-background-position: ${this._config.background_image_position}; --calendar-background-repeat: ${this._config.background_image_repeat};`
      : '';
    const hasCustomBackground = !!(this._config.background_transparent || this._config.background_image_url);
    const backgroundStyle = this._config.background_transparent
      ? '--calendar-background: transparent;'
      : '';
    const containerStyle = `${headerStyle} ${backgroundStyle} ${backgroundImageStyle}`.trim();
    const externalStyleOverrides = typeof this._config?.uix?.style === 'string'
      ? this._config.uix.style
      : '';

    this._root.innerHTML = `
      <style>
        ${this.getStyles()}
        ${externalStyleOverrides}
      </style>

      <div class="calendar-container ${this._isDarkMode ? 'dark-mode' : ''} ${hasCustomBackground ? 'custom-background' : ''}" style="${containerStyle}">
        ${this._config.compact_header ? this.renderCompactHeader() : this.renderStandardHeader()}

        ${this.renderCalendarView()}

        <div class="event-modal" id="event-modal">
          <div class="modal-content" id="modal-content">
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
    this.updateCompactHeaderWrapState();
    this.updateCalendarBadgesScrollState();
    this.updateWeekStandardFixedOffsetHeightFromDom();
    this.updateMonthContainerTopInViewportFromDom();
  }

  renderStandardHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0;
    const shouldShowControls = !this._config.hide_controls;

    return `
      <div class="header">
        <div class="header-left">
          <h2 class="header-title">${this._config.title}</h2>
        </div>
        ${shouldShowControls ? `
          <div class="header-controls">
            ${canAddEvents ? `<button class="add-event-button" id="add-event-btn"><span class="icon">+</span>${this.t('addEvent')}</button>` : ''}
            ${this.renderThemeToggle()}
            ${this.renderViewModeButtons()}
            <div class="period-controls">
              <button class="nav-button" id="prev-period">‹</button>
              <div class="month-year">${this.getPeriodLabel()}</div>
              <button class="nav-button" id="next-period">›</button>
              <button class="today-button" id="today">${this.t('today')}</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderCompactHeader() {
    const writableCalendars = this.getWritableCalendars();
    const canAddEvents = this._config.enable_event_management && writableCalendars.length > 0;
    const shouldShowCalendars = !this._config.hide_calendars;
    const shouldShowControls = !this._config.hide_controls;

    return `
      <div class="header header-compact">
        <div class="compact-header-left">
          <h2 class="header-title">${this._config.title}</h2>
          ${shouldShowCalendars ? this.renderCalendarBadgesInline() : ''}
        </div>
        ${shouldShowControls ? `
          <div class="header-controls compact-header-controls">
            ${canAddEvents ? `<button class="compact-add-event-button" id="add-event-btn"><span class="icon">+</span>${this.t('addEvent')}</button>` : ''}
            ${this.renderThemeToggle()}
            ${this.renderViewModeButtons()}
            <div class="compact-period-controls">
              <button class="nav-button" id="prev-period">‹</button>
              <div class="month-year">${this.getPeriodLabel()}</div>
              <button class="nav-button" id="next-period">›</button>
              <button class="today-button" id="today">${this.t('today')}</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderCalendarBadgesInline() {
    if (!this._config.entities || this._config.entities.length === 0) return '';

    return `
      <div class="calendar-badges-inline">
        ${this._config.entities.map((entityId, index) => {
          const name = this.getCalendarName(entityId);
          const color = this.normalizeSingleColor(this._config.colors[entityId] || this.getDefaultColor(index));
          const isHidden = this._hiddenCalendars.has(entityId);

          const badgeBackground = isHidden ? '#f3f4f6' : this.lightenColor(color, 0.85);
          const badgeTextColor = isHidden ? '#9ca3af' : this.getContractColor(badgeBackground);

          return `
            <div class="calendar-badge calendar-badge-inline ${isHidden ? 'calendar-badge-hidden' : ''}"
                 data-entity="${entityId}"
                 style="background: ${badgeBackground};
                        border-color: ${isHidden ? '#d1d5db' : color};">
              ${this.renderCalendarBadgeIcon(entityId, name, color, isHidden)}
              <span class="calendar-badge-name" style="color: ${badgeTextColor}">${this.escapeHtml(name)}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderViewModeButtons() {
    return `
      <div class="view-mode-buttons">
        <button class="view-mode-button ${this._viewMode === 'month' ? 'active' : ''}" data-view="month">${this.t('month')}</button>
        <button class="view-mode-button ${this._viewMode === 'week-compact' ? 'active' : ''}" data-view="week-compact">${this.t('week')}</button>
        <button class="view-mode-button ${this._viewMode === 'week-standard' ? 'active' : ''}" data-view="week-standard">${this.t('schedule')}</button>
      </div>
    `;
  }

  renderThemeToggle() {
    if (this._config.hide_dark_mode_toggle) return '';
    return `<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">${this._isDarkMode ? '☀︎' : '☾'}</button>`;
  }

  getPeriodLabel() {
    if (this._viewMode === 'month') {
      // If rolling_weeks mode is active, show date range
      if (this._config.rolling_weeks !== null) {
        const anchorDate = new Date(this._currentDate);
        anchorDate.setHours(0, 0, 0, 0);

        const currentDay = anchorDate.getDay();
        const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
        const weekStart = new Date(anchorDate);
        weekStart.setDate(anchorDate.getDate() - diff);

        const totalWeeks = this._config.rolling_weeks + 1;
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + (totalWeeks * 7) - 1);

        return this.formatPeriodDateRange(weekStart, weekEnd);
      }

      // Standard month view
      const month = this._currentDate.getMonth();
      const year = this._currentDate.getFullYear();
      return `${this.getMonthName(month)} ${year}`;
    } else {
      const weekDays = this.getWeekDays();
      if (weekDays.length === 0) return '';
      const start = weekDays[0];
      const end = weekDays[weekDays.length - 1];
      return this.formatPeriodDateRange(start, end);
    }
  }

  formatPeriodDateRange(startDate, endDate) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    if (typeof formatter.formatRange === 'function') {
      return formatter.formatRange(startDate, endDate);
    }

    if (startDate.getTime() === endDate.getTime()) {
      return formatter.format(startDate);
    }

    return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
  }

  renderCalendarView() {
    const shouldShowHeaderBadges = !this._config.compact_header && !this._config.hide_calendars;

    if (this._viewMode === 'month') {
      const showAllEventsMonth = !!this._config.show_all_events_month;
      const isCompactMonth = this._config.compact_height && !showAllEventsMonth;
      const compactMaxHeight = isCompactMonth ? this.getCompactMaxHeight(this._monthContainerTopInViewport) : null;
      const monthWeekRows = this.getMonthWeekRowCount();
      const monthStyle = compactMaxHeight
        ? `height: ${compactMaxHeight}px; overflow-y: auto; grid-template-rows: auto repeat(${monthWeekRows}, minmax(0, 1fr));`
        : '';
      const monthClass = isCompactMonth ? 'calendar-grid compact-month' : 'calendar-grid';

      return `
        ${shouldShowHeaderBadges ? this.renderCalendarBadges() : ''}
        <div class="${monthClass}" style="${monthStyle}">
          ${this.renderDayHeaders()}
          ${this.renderDays()}
        </div>
      `;
    } else if (this._viewMode === 'week-compact') {
      return this.renderWeekCompact();
    } else if (this._viewMode === 'week-standard') {
      return this.renderWeekStandard();
    }
  }

  renderDayHeaders() {
    const days = this.getWeekdayNames('short');
    const firstDay = this._config.firstDayOfWeek;
    const orderedDays = [...days.slice(firstDay), ...days.slice(0, firstDay)];

    return orderedDays.map(day => `
      <div class="day-header">${day}</div>
    `).join('');
  }

  renderWeekCompact() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayNames = this.getWeekdayNames('short');

    return `
      ${!this._config.compact_header && !this._config.hide_calendars ? this.renderCalendarBadges() : ''}
      <div class="week-compact-container">
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const events = this.sortEventsForDate(this.getEventsForDay(date), date);

          return `
            <div class="week-day-column ${isToday ? 'today' : ''}" data-date="${date.toISOString()}" data-click-target="day-header">
              <div class="week-day-header">
                <div class="week-day-name">${dayNames[date.getDay()]}</div>
                <div class="week-day-date">${date.getDate()}</div>
              </div>
              <div class="week-day-events">
                ${events.map(event => {
                  const daySegment = this.getEventDaySegment(event, date);
                  if (!daySegment) return '';
                  const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;
                  const timeLabel = isAllDaySegment
                    ? this.t('allDay')
                    : `${this.formatTime(segmentStart)} - ${this.formatTime(segmentEnd)}`;
                  const eventStyle = this.getEventStyle(event);

                  return `
                    <div class="week-compact-event" style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-location-font-size: ${this.getEventLocationFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                      <div class="week-compact-event-time">${timeLabel}</div>
                      <div class="week-compact-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
                      ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
                    </div>
                  `;
                }).join('')}
                ${events.length === 0 ? `<div style="color: #9ca3af; font-size: 13px; text-align: center; margin-top: 20px;">${this.t('noEvents')}</div>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  renderWeekStandard() {
    const weekDays = this.getWeekDays();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { startHour, endHour } = this.getScheduleHourRangeForWeek(weekDays);
    const hours = [];

    for (let h = startHour; h <= endHour; h++) {
      hours.push(h);
    }

    const baseHourHeight = 120;
    const preferredHourHeight = baseHourHeight * (this._config.height_scale || 1.0);

    const dayNames = this.getWeekdayNames('short');

    const allDayLayout = this.buildAllDayLayoutForSchedule(weekDays);
    const maxAllDayEvents = allDayLayout.maxLanes;

    const hasAllDayEvents = maxAllDayEvents > 0;
    const allDayHeight = hasAllDayEvents
      ? 16 + (maxAllDayEvents * 24) + ((maxAllDayEvents - 1) * 4) + 2
      : 0;

    const compactMaxHeight = this.getCompactMaxHeight(this._weekStandardContainerTopInViewport);
    const fallbackOffsetHeight = 127 + allDayHeight;
    const staticOffsetHeight = this._weekStandardFixedOffsetHeight || fallbackOffsetHeight;
    const availableSlotHeight = compactMaxHeight ? compactMaxHeight - staticOffsetHeight : null;
    const compactHourHeight = availableSlotHeight && availableSlotHeight > 0 ? Math.floor(availableSlotHeight / hours.length) : null;
    const hourHeight = compactHourHeight ? Math.max(20, Math.min(preferredHourHeight, compactHourHeight)) : preferredHourHeight;
    const timelineHeight = hourHeight * hours.length;
    const dayTimeSlotsStyle = `height: ${timelineHeight}px; min-height: ${timelineHeight}px;`;
    const containerStyle = this.getCompactContainerStyle(compactMaxHeight);

    const showCurrentTimeBar = this._config.show_current_time_bar && this.shouldShowCurrentTimeBar(today, startHour, endHour);

    return `
      ${!this._config.compact_header && !this._config.hide_calendars ? this.renderCalendarBadges() : ''}
      <div class="week-standard-container ${this._config.compact_width ? 'compact-width' : ''}" style="${containerStyle}">
        <!-- Time column -->
        <div class="time-column">
          <div class="time-column-header-spacer"></div>
          ${hasAllDayEvents ? `<div class="time-column-allday-spacer" style="height: ${allDayHeight}px;"></div>` : ''}
          <div class="time-column-extra-spacer"></div>
          ${hours.map(hour => `
            <div class="time-slot" style="height: ${hourHeight}px;">
              <span class="time-slot-label">${this.formatScheduleHour(hour)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Day columns -->
        ${weekDays.map(date => {
          const isToday = date.toDateString() === today.toDateString();
          const dayEvents = this.getEventsForDay(date);
          const dateKey = this.getDateKey(date);
          const allDayLanes = allDayLayout.dayLanesByDateKey.get(dateKey) || [];

          return `
            <div class="week-standard-day-column ${isToday ? 'today' : ''}" data-date="${date.toISOString()}">
              <div class="week-standard-day-header" data-click-target="day-header">
                <div class="week-standard-day-name">${dayNames[date.getDay()]}</div>
                <div class="week-standard-day-date">${date.getDate()}</div>
              </div>
              ${hasAllDayEvents ? this.renderAllDayEventsForDay(allDayLanes, allDayHeight) : ''}
              <div class="day-time-slots" style="${dayTimeSlotsStyle}">
                ${hours.map(hour => `
                  <div class="day-time-slot" style="height: ${hourHeight}px;" data-hour="${hour}"></div>
                `).join('')}
                ${showCurrentTimeBar && isToday ? this.renderCurrentTimeLine(startHour, hourHeight) : ''}
                ${this.renderTimedEventsForDay(dayEvents, date, startHour, endHour, hourHeight)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  getScheduleHourRangeForWeek(weekDays) {
    const configuredStartHour = Number.isFinite(Number(this._config.week_start_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_start_hour)))
      : 0;
    const configuredEndHour = Number.isFinite(Number(this._config.week_end_hour))
      ? Math.min(23, Math.max(0, Number(this._config.week_end_hour)))
      : 23;

    if (this._config.lock_schedule_hours) {
      const normalizedEndHour = Math.max(configuredStartHour, configuredEndHour);
      return { startHour: configuredStartHour, endHour: normalizedEndHour };
    }

    let dynamicStartHour = configuredStartHour;
    let dynamicEndHour = configuredEndHour;

    weekDays.forEach((date) => {
      this.getEventsForDay(date).forEach((event) => {
        if (this._hiddenCalendars.has(event.entityId)) {
          return;
        }

        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        if (!daySegment || daySegment.isAllDaySegment) {
          return;
        }

        const startHourFloat = this.getLocalDayHourFloat(daySegment.segmentStart, date);
        const endHourFloat = this.getLocalDayHourFloat(daySegment.segmentEnd, date);

        if (Number.isFinite(startHourFloat)) {
          dynamicStartHour = Math.min(dynamicStartHour, Math.floor(startHourFloat));
        }
        if (Number.isFinite(endHourFloat)) {
          dynamicEndHour = Math.max(dynamicEndHour, Math.floor(endHourFloat));
        }
      });
    });

    const normalizedStartHour = Math.min(23, Math.max(0, dynamicStartHour));
    const normalizedEndHour = Math.max(normalizedStartHour, Math.min(23, Math.max(0, dynamicEndHour)));

    return { startHour: normalizedStartHour, endHour: normalizedEndHour };
  }

  buildAllDayLayoutForSchedule(weekDays) {
    const allDaySpans = [];
    const eventSpanMap = new Map();

    weekDays.forEach((date, dayIndex) => {
      this.getEventsForDay(date).forEach(event => {
        if (this._hiddenCalendars.has(event.entityId)) {
          return;
        }

        const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
        if (!daySegment || !daySegment.isAllDaySegment) {
          return;
        }

        const eventKey = this.getScheduleAllDayEventKey(event);
        let span = eventSpanMap.get(eventKey);
        if (!span) {
          span = {
            event,
            displayTitle: daySegment.displayTitle,
            startIndex: dayIndex,
            endIndex: dayIndex,
            startsOnDayAtStartIndex: daySegment.startsOnDay,
            endsOnDayAtEndIndex: daySegment.endsOnDay
          };
          eventSpanMap.set(eventKey, span);
          allDaySpans.push(span);
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

    allDaySpans.sort((a, b) => {
      if (a.startIndex !== b.startIndex) {
        return a.startIndex - b.startIndex;
      }
      const aDuration = a.endIndex - a.startIndex;
      const bDuration = b.endIndex - b.startIndex;
      if (aDuration !== bDuration) {
        return bDuration - aDuration;
      }
      return (a.event.summary || '').localeCompare(b.event.summary || '');
    });

    const laneEndIndexes = [];
    allDaySpans.forEach(span => {
      let laneIndex = laneEndIndexes.findIndex(endIndex => endIndex < span.startIndex);
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
    weekDays.forEach((date, dayIndex) => {
      const lanes = new Array(maxLanes).fill(null);
      allDaySpans.forEach(span => {
        if (dayIndex < span.startIndex || dayIndex > span.endIndex) {
          return;
        }

        lanes[span.laneIndex] = {
          event: span.event,
          displayTitle: span.displayTitle,
          continuesFromPreviousDay: dayIndex > span.startIndex || !span.startsOnDayAtStartIndex,
          continuesToNextDay: dayIndex < span.endIndex || !span.endsOnDayAtEndIndex,
          bridgeFromPreviousDay: dayIndex > span.startIndex,
          bridgeToNextDay: dayIndex < span.endIndex,
          showTitle: dayIndex === span.startIndex,
          visibleDaySpan: span.endIndex - span.startIndex + 1
        };
      });

      dayLanesByDateKey.set(this.getDateKey(date), lanes);
    });

    return { maxLanes, dayLanesByDateKey };
  }

  getScheduleAllDayEventKey(event) {
    const uid = event.uid || event.id;
    if (uid) {
      return `${uid}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
    }

    return `${event.entityId || 'unknown'}|${event.summary || ''}|${event.start?.date || event.start?.dateTime || event.start}|${event.end?.date || event.end?.dateTime || event.end}`;
  }

  getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  renderCalendarBadges() {
    if (!this._config.entities || this._config.entities.length === 0) return '';

    return `
      <div class="calendar-badges-container">
        <div class="calendar-badges">
          ${this._config.entities.map((entityId, index) => {
            const name = this.getCalendarName(entityId);
            const color = this.normalizeSingleColor(this._config.colors[entityId] || this.getDefaultColor(index));
            const isHidden = this._hiddenCalendars.has(entityId);

            const badgeBackground = isHidden ? '#f3f4f6' : this.lightenColor(color, 0.85);
            const badgeTextColor = isHidden ? '#9ca3af' : this.getContractColor(badgeBackground);

            return `
              <div class="calendar-badge ${isHidden ? 'calendar-badge-hidden' : ''}"
                   data-entity="${entityId}"
                   style="background: ${badgeBackground};
                          border-color: ${isHidden ? '#d1d5db' : color};
                          cursor: pointer;">
                ${this.renderCalendarBadgeIcon(entityId, name, color, isHidden)}
                <span class="calendar-badge-name" style="color: ${badgeTextColor}">${this.escapeHtml(name)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  renderAllDayEventsForDay(allDayLanes, allDayHeight) {
    return `
      <div class="all-day-events" style="min-height: ${allDayHeight}px; height: ${allDayHeight}px;">
        ${allDayLanes.length > 0 ? allDayLanes.map(lane => {
          if (!lane) {
            return '<div class="all-day-event-spacer"></div>';
          }

          const {
            event,
            continuesFromPreviousDay,
            continuesToNextDay,
            bridgeFromPreviousDay,
            bridgeToNextDay,
            showTitle,
            displayTitle,
            visibleDaySpan
          } = lane;
          const eventStyle = this.getEventStyle(event, { withBorderAccent: false });
          return `
            <div class="all-day-event ${continuesFromPreviousDay ? 'continues-prev' : ''} ${continuesToNextDay ? 'continues-next' : ''} ${bridgeFromPreviousDay ? 'bridge-prev' : ''} ${bridgeToNextDay ? 'bridge-next' : ''} ${showTitle && visibleDaySpan > 1 ? 'leading-span-title' : ''}"
                 style="${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)}; --all-day-title-span-days: ${visibleDaySpan}; --all-day-title-gap-count: ${Math.max(visibleDaySpan - 1, 0)};"
                 data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="all-day-event-title ${showTitle && visibleDaySpan > 1 ? 'spans-multiple-days' : ''}">${showTitle ? this.escapeHtml(displayTitle || event.summary || this.t('untitledEvent')) : ''}</div>
            </div>
          `;
        }).join('') : ''}
      </div>
    `;
  }

  renderTimedEventsForDay(events, date, startHour, endHour, hourHeight) {
    const timedEvents = events.map(event => {
      const daySegment = this.getEventDaySegment(event, date, { useScheduleVisualTreatment: true });
      if (!daySegment || daySegment.isAllDaySegment) {
        return null;
      }
      return { event, daySegment };
    }).filter(Boolean);

    // Process timed events for overlaps
    const eventBlocks = timedEvents.map(({ event, daySegment }) => {
      const { segmentStart, segmentEnd } = daySegment;
      const startHourFloat = this.getLocalDayHourFloat(segmentStart, date);
      const endHourFloat = this.getLocalDayHourFloat(segmentEnd, date);

      return {
        event,
        displayTitle: daySegment.displayTitle,
        eventStart: segmentStart,
        eventEnd: segmentEnd,
        startHourFloat,
        endHourFloat,
        startMinutes: Math.round(startHourFloat * 60),
        endMinutes: Math.round(endHourFloat * 60)
      };
    }).filter(block => block.endHourFloat > startHour && block.startHourFloat < (endHour + 1));

    // Sort by start time, then by duration (longer first)
    eventBlocks.sort((a, b) => {
      if (a.startMinutes !== b.startMinutes) {
        return a.startMinutes - b.startMinutes;
      }
      return (b.endMinutes - b.startMinutes) - (a.endMinutes - a.startMinutes);
    });

    const overlaps = (first, second) =>
      first.startMinutes < second.endMinutes && first.endMinutes > second.startMinutes;

    const clusters = [];
    eventBlocks.forEach(block => {
      const matchingClusters = [];
      clusters.forEach((cluster, index) => {
        if (cluster.some(other => overlaps(block, other))) {
          matchingClusters.push(index);
        }
      });

      if (matchingClusters.length === 0) {
        clusters.push([block]);
        return;
      }

      const targetIndex = matchingClusters.shift();
      clusters[targetIndex].push(block);

      matchingClusters.reverse().forEach(index => {
        clusters[targetIndex].push(...clusters[index]);
        clusters.splice(index, 1);
      });
    });

    clusters.forEach(cluster => {
      const columns = [];
      cluster.forEach(block => {
        let placed = false;
        for (const col of columns) {
          const hasOverlap = col.some(other => overlaps(block, other));
          if (!hasOverlap) {
            col.push(block);
            block.column = columns.indexOf(col);
            placed = true;
            break;
          }
        }

        if (!placed) {
          columns.push([block]);
          block.column = columns.length - 1;
        }
      });

      const clusterColumns = columns.length;
      cluster.forEach(block => {
        block.clusterColumns = clusterColumns;
      });
    });

    // Render timed events
    return eventBlocks.map(block => {
      const { event, displayTitle, eventStart, eventEnd, startHourFloat, endHourFloat, column } = block;

      const clampedStartHour = Math.max(startHourFloat, startHour);
      const clampedEndHour = Math.min(endHourFloat, endHour + 1);
      if (clampedEndHour <= clampedStartHour) {
        return '';
      }

      const duration = clampedEndHour - clampedStartHour;
      const top = (clampedStartHour - startHour) * hourHeight;
      const height = duration * hourHeight;

      const clusterColumns = block.clusterColumns || 1;
      // Calculate width and position for concurrent events
      const width = clusterColumns > 1 ? `calc((100% - 16px) / ${clusterColumns})` : 'calc(100% - 16px)';
      const left = clusterColumns > 1 ? `calc(8px + ((100% - 16px) / ${clusterColumns}) * ${column})` : '8px';

      const eventStyle = this.getEventStyle(event, { withBorderAccent: true });

      return `
        <div class="week-standard-event"
             style="top: ${top}px; height: ${height}px; width: ${width}; left: ${left}; ${eventStyle} --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-location-font-size: ${this.getEventLocationFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};"
             data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
          <div class="week-standard-event-title">${this.escapeHtml(displayTitle || event.summary || this.t('untitledEvent'))}</div>
          ${this.shouldShowEventTime(event) ? `<div class="week-standard-event-time">${this.formatScheduleTime(eventStart)} - ${this.formatScheduleTime(eventEnd)}</div>` : ''}
          ${this.shouldShowEventLocation(event) ? `<div class="week-standard-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
          ${this.renderEventIcon(event)}
        </div>
      `;
    }).join('');
  }

  getLocalDayHourFloat(dateTime, referenceDate) {
    // Use wall-clock hour values relative to the rendered day so DST transitions
    // do not visually shift events by ±1 hour in the schedule grid.
    const dayKey = Date.UTC(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate());
    const timeKey = Date.UTC(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());
    const dayDiff = (timeKey - dayKey) / 86400000;

    return (dayDiff * 24) +
      dateTime.getHours() +
      (dateTime.getMinutes() / 60) +
      (dateTime.getSeconds() / 3600) +
      (dateTime.getMilliseconds() / 3600000);
  }

  getVisibleCalendarBadgesForEvent(event) {
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars.filter(calendar => !this._hiddenCalendars.has(calendar.entityId));
    }

    return [{ entityId: event.entityId, color: event.color }];
  }

  renderEventIcon(event) {
    if (this._config.event_calendar_friendly_name) {
      const visibleBadges = this.getVisibleCalendarBadgesForEvent(event);
      if (visibleBadges.length === 0) {
        return '';
      }

      const namesHtml = visibleBadges
        .map(calendar => `<div class="week-standard-event-calendar-name">${this.escapeHtml(this.getCalendarName(calendar.entityId))}</div>`)
        .join('');

      return `<div class="week-standard-event-icons">${namesHtml}</div>`;
    }

    if (this._config.hide_event_calendar_bubble) {
      return '';
    }

    const visibleBadges = this.getVisibleCalendarBadgesForEvent(event);
    if (visibleBadges.length === 0) {
      return '';
    }

    const badgesHtml = visibleBadges.map(calendar => {
      const name = this.getCalendarName(calendar.entityId);
      const initial = name.charAt(0).toUpperCase();
      return `<div class="week-standard-event-icon" style="background: ${calendar.color}; color: white;">${initial}</div>`;
    }).join('');

    return `<div class="week-standard-event-icons">${badgesHtml}</div>`;
  }


  lightenColor(color, amount) {
    const rgb = this.colorToRgb(color);
    if (!rgb) {
      return this.normalizeSingleColor(color);
    }

    // Lighten by blending with white
    const nr = Math.round(rgb.r + (255 - rgb.r) * amount);
    const ng = Math.round(rgb.g + (255 - rgb.g) * amount);
    const nb = Math.round(rgb.b + (255 - rgb.b) * amount);

    return `rgb(${nr}, ${ng}, ${nb})`;
  }

  getEventBubbleFontSize() {
    const configuredSize = this._config?.event_font_size;
    if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
      return '11px';
    }

    if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
      return `${configuredSize}px`;
    }

    const normalized = String(configuredSize).trim();
    if (!normalized) return '11px';
    return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
  }

  getEventTimeFontSize() {
    const configuredSize = this._config?.event_time_font_size;
    if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
      return '9px';
    }

    if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
      return `${configuredSize}px`;
    }

    const normalized = String(configuredSize).trim();
    if (!normalized) return '9px';
    return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
  }

  getEventLocationFontSize() {
    const configuredSize = this._config?.event_location_font_size;
    if (configuredSize === undefined || configuredSize === null || configuredSize === '') {
      return '9px';
    }

    if (typeof configuredSize === 'number' && Number.isFinite(configuredSize)) {
      return `${configuredSize}px`;
    }

    const normalized = String(configuredSize).trim();
    if (!normalized) return '9px';
    return /^\d+(\.\d+)?$/.test(normalized) ? `${normalized}px` : normalized;
  }

  shouldShowEventLocation(event) {
    return !!(this._config.show_event_location && event?.location);
  }

  getEventBubbleFontColor(event) {
    if (!event) return 'white';

    const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
      ? event.sourceEntityIds.filter(entityId => !this._hiddenCalendars.has(entityId))
      : [event.entityId];

    const preferredEntityId = visibleEntityIds[0] || event.entityId;
    const configuredColor = preferredEntityId
      ? this.normalizeSingleColor(this._config?.event_font_colors?.[preferredEntityId])
      : null;
    if (configuredColor) {
      return configuredColor;
    }

    return this.getContractColor(this.getEventBackgroundColor(event));
  }

  shouldShowEventTime(event) {
    if (!event) return true;

    const visibleEntityIds = event.isCombinedCalendarEvent && Array.isArray(event.sourceEntityIds)
      ? event.sourceEntityIds.filter(entityId => !this._hiddenCalendars.has(entityId))
      : [event.entityId];

    if (visibleEntityIds.length === 0) {
      return false;
    }

    return visibleEntityIds.some(entityId => !this._config.hide_times_for_calendars.includes(entityId));
  }

  shouldShowCurrentTimeBar(today, startHour, endHour) {
    const now = new Date();
    now.setSeconds(0, 0);
    if (now.toDateString() !== today.toDateString()) {
      return false;
    }

    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    return currentHourFloat >= startHour && currentHourFloat <= (endHour + 1);
  }

  renderCurrentTimeLine(startHour, hourHeight) {
    const now = new Date();
    const currentHourFloat = now.getHours() + (now.getMinutes() / 60);
    const top = (currentHourFloat - startHour) * hourHeight;
    return `<div class="current-time-line" style="top: ${top}px;"></div>`;
  }

  formatScheduleHour(hour) {
    const date = new Date(2020, 0, 1, hour, 0, 0, 0);
    return this.formatScheduleTime(date);
  }

  formatScheduleTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), {
      hour: 'numeric',
      minute: '2-digit',
      hour12: !this._config.use_24hr_schedule
    }).format(date);
  }

  getMonthWeekRowCount() {
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this._config.rolling_weeks + 1;
    }

    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;
    return Math.ceil((startDay + daysInMonth) / 7);
  }

  getEventBubbleFontSizePx() {
    const fallbackPx = 11;
    const sizeValue = this.getEventBubbleFontSize();

    if (typeof window === 'undefined' || !this._root) {
      const parsed = parseFloat(sizeValue);
      return Number.isFinite(parsed) ? parsed : fallbackPx;
    }

    const probe = document.createElement('span');
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.fontSize = sizeValue;
    probe.style.lineHeight = 'normal';
    probe.textContent = 'M';
    this._root.appendChild(probe);

    const computedFontSize = parseFloat(window.getComputedStyle(probe).fontSize);
    probe.remove();

    return Number.isFinite(computedFontSize) ? computedFontSize : fallbackPx;
  }

  getMonthEventRowHeight() {
    const fontSizePx = this.getEventBubbleFontSizePx();
    const lineHeightPx = fontSizePx * 1.2;
    const verticalPaddingPx = 8; // .event has 4px top + 4px bottom padding
    const marginBottomPx = 3; // .event margin-bottom in month view
    return Math.ceil(lineHeightPx + verticalPaddingPx + marginBottomPx);
  }

  renderDays() {
    const year = this._currentDate.getFullYear();
    const month = this._currentDate.getMonth();

    // If rolling_weeks is set, show current week + N additional weeks
    if (this._config.rolling_weeks !== null && this._viewMode === 'month') {
      return this.renderRollingWeeks();
    }

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const today = new Date();
    const isToday = (d) => {
      return d.getDate() === today.getDate() &&
             d.getMonth() === today.getMonth() &&
             d.getFullYear() === today.getFullYear();
    };

    let html = '';
    const startDay = (firstDay - this._config.firstDayOfWeek + 7) % 7;

    // Previous month days
    for (let i = startDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(year, month - 1, day);
      html += this.renderDay(day, date, true);
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      html += this.renderDay(day, date, false);
    }

    // Next month days
    const totalCells = startDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day);
      html += this.renderDay(day, date, true);
    }

    return html;
  }

  renderRollingWeeks() {
    const anchorDate = new Date(this._currentDate);
    anchorDate.setHours(0, 0, 0, 0);

    // Find the start of the current week based on firstDayOfWeek
    const currentDay = anchorDate.getDay();
    const diff = (currentDay - this._config.firstDayOfWeek + 7) % 7;
    const weekStart = new Date(anchorDate);
    weekStart.setDate(anchorDate.getDate() - diff);

    // Calculate total days to show: (rolling_weeks + 1) * 7 days
    const totalWeeks = this._config.rolling_weeks + 1;
    const totalDays = totalWeeks * 7;

    let html = '';

    // Render all days in the rolling weeks
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);

      // In rolling-weeks month view, keep trailing (next-month) days visually active
      // while still dimming any leading days from the previous month.
      const currentMonthStart = new Date(this._currentDate.getFullYear(), this._currentDate.getMonth(), 1);
      const isOtherMonth = date < currentMonthStart;

      html += this.renderDay(date.getDate(), date, isOtherMonth);
    }

    return html;
  }

  getMaxVisibleEventsForMonthDay() {
    const defaultMaxVisible = 3;

    if (this._viewMode === 'month' && this._config.show_all_events_month) {
      return Number.MAX_SAFE_INTEGER;
    }

    if (this._viewMode !== 'month' || !this._config.compact_height) {
      return defaultMaxVisible;
    }

    const compactMaxHeight = this.getCompactMaxHeight(this._monthContainerTopInViewport);
    if (!compactMaxHeight) {
      return defaultMaxVisible;
    }

    const weekRows = this.getMonthWeekRowCount();
    if (!weekRows || weekRows < 1) {
      return defaultMaxVisible;
    }

    const gridGap = 1;
    const dayHeaderRowHeight = 41;
    const dayCellVerticalPadding = 16; // .day-cell has 8px top + 8px bottom padding
    const dayNumberBlockHeight = 22; // number text + margin-bottom in compact month cell
    const eventRowHeight = this.getMonthEventRowHeight();

    const contentHeight = compactMaxHeight - dayHeaderRowHeight - (weekRows * gridGap);
    const dayCellHeight = Math.floor(contentHeight / weekRows);
    // Do not pre-reserve space for the "+N more" indicator here. Overflow handling
    // swaps one event row for the indicator in renderDay(), so reserving both causes
    // under-counting and hidden space.
    const usableEventHeight = dayCellHeight - dayCellVerticalPadding - dayNumberBlockHeight;
    if (!Number.isFinite(usableEventHeight) || usableEventHeight <= 0) {
      return 1;
    }

    return Math.max(1, Math.floor(usableEventHeight / eventRowHeight));
  }

  renderDay(dayNum, date, isOtherMonth) {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    let dayEvents = this.getEventsForDay(date);

    dayEvents = this.sortEventsForDate(dayEvents, date);

    const maxVisible = this.getMaxVisibleEventsForMonthDay();
    const hasOverflow = dayEvents.length > maxVisible;
    const visibleEvents = hasOverflow ? Math.max(0, maxVisible - 1) : maxVisible;
    const hiddenEventCount = Math.max(0, dayEvents.length - visibleEvents);

    let classes = 'day-cell';
    if (isOtherMonth) classes += ' other-month';
    if (isToday) classes += ' today';

    return `
      <div class="${classes}" data-date="${date.toISOString()}">
        <div class="day-number">${dayNum}</div>
        ${dayEvents.slice(0, visibleEvents).map(event => this.renderEvent(event, date)).join('')}
        ${hiddenEventCount > 0 ? `<div class="more-events" data-click-target="more-events">${this.t('moreEvents', { count: hiddenEventCount })}</div>` : ''}
      </div>
    `;
  }

  renderEvent(event, date) {
    const daySegment = this.getEventDaySegment(event, date);
    if (!daySegment) return '';
    const { segmentStart, isAllDaySegment } = daySegment;
    const eventStyle = this.getEventStyle(event);

    return `
      <div class="event" style="${eventStyle}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
        ${!isAllDaySegment ? `<span class="event-time">${this.formatTime(segmentStart)}</span>` : ''}
        ${this.escapeHtml(event.summary || this.t('untitledEvent'))}
      </div>
    `;
  }

  normalizeEventTextValue(value) {
    return String(value || '')
      .normalize('NFKC')
      .replace(/\s+/g, ' ')
      .trim();
  }

  getNormalizedEventTimeValue(value) {
    if (!value) return '';

    const toDateTimeTimestamp = (rawValue) => {
      const normalizedRaw = this.normalizeEventTextValue(rawValue);
      if (!normalizedRaw) return null;

      const floatingMatch = normalizedRaw.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.(\d+))?(Z|[+-]\d{2}:\d{2})?$/i);
      if (!floatingMatch) {
        return null;
      }

      const [, yearText, monthText, dayText, hourText, minuteText, secondText, fractionText, tzText] = floatingMatch;
      const year = Number(yearText);
      const month = Number(monthText);
      const day = Number(dayText);
      const hour = Number(hourText);
      const minute = Number(minuteText);
      const second = Number(secondText || '0');
      const millis = Number(((fractionText || '').slice(0, 3)).padEnd(3, '0'));

      const timestamp = tzText
        ? Date.parse(`${yearText}-${monthText}-${dayText}T${hourText}:${minuteText}:${String(second).padStart(2, '0')}.${String(millis).padStart(3, '0')}${tzText.toUpperCase()}`)
        : new Date(year, month - 1, day, hour, minute, second, millis).getTime();

      return Number.isFinite(timestamp) ? timestamp : null;
    };

    if (typeof value === 'object') {
      if (value.dateTime) {
        const parsedTimestamp = toDateTimeTimestamp(value.dateTime);
        if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

        const ts = new Date(value.dateTime).getTime();
        return Number.isFinite(ts) ? `dt:${ts}` : `dt:${String(value.dateTime)}`;
      }

      if (value.date) {
        const day = this.normalizeEventTextValue(value.date);
        return `d:${day}`;
      }
    }

    const normalized = this.normalizeEventTextValue(value);
    if (!normalized) return '';

    if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
      return `d:${normalized}`;
    }

    const parsedTimestamp = toDateTimeTimestamp(normalized);
    if (parsedTimestamp !== null) return `dt:${parsedTimestamp}`;

    const ts = new Date(normalized).getTime();
    return Number.isFinite(ts) ? `dt:${ts}` : normalized;
  }

  getEventExactMatchKey(event) {
    const start = this.getNormalizedEventTimeValue(event.start);
    const end = this.getNormalizedEventTimeValue(event.end);
    const summary = this.normalizeEventTextValue(event.summary);
    const location = this.normalizeEventTextValue(event.location);
    return `${start}|${end}|${summary}|${location}`;
  }


  combineDuplicateCalendarEvents(events) {
    if (!this._config.combine_calendars) {
      return events;
    }

    const groupedEvents = new Map();

    events.forEach(event => {
      const key = this.getEventExactMatchKey(event);
      if (!groupedEvents.has(key)) {
        groupedEvents.set(key, {
          baseEvent: event,
          calendars: [{ entityId: event.entityId, color: event.color }],
          sourceEvents: [event]
        });
        return;
      }

      const grouped = groupedEvents.get(key);
      if (!grouped.calendars.some(calendar => calendar.entityId === event.entityId)) {
        grouped.calendars.push({ entityId: event.entityId, color: event.color });
      }
      grouped.sourceEvents.push(event);
    });

    return Array.from(groupedEvents.values()).flatMap(({ baseEvent, calendars, sourceEvents }) => {
      if (calendars.length === 1) {
        return sourceEvents;
      }

      return {
        ...baseEvent,
        isCombinedCalendarEvent: true,
        sourceCalendars: calendars,
        sourceEntityIds: calendars.map(calendar => calendar.entityId),
        sourceEvents,
        entityId: calendars[0].entityId,
        color: calendars[0].color
      };
    });
  }

  getVisibleCalendarColorsForEvent(event) {
    if (event.isCombinedCalendarEvent && Array.isArray(event.sourceCalendars)) {
      return event.sourceCalendars
        .filter(calendar => !this._hiddenCalendars.has(calendar.entityId))
        .map(calendar => calendar.color);
    }

    if (this._hiddenCalendars.has(event.entityId)) {
      return [];
    }

    return [event.color];
  }

  createZebraStripeGradient(colors) {
    if (colors.length === 1) {
      return colors[0];
    }

    const configuredStripeWidth = Number(this._config?.combine_calendars_width);
    const stripeWidthPx = Number.isFinite(configuredStripeWidth) && configuredStripeWidth > 0
      ? configuredStripeWidth
      : 12;
    const cycle = colors.map((color, index) => {
      const start = index * stripeWidthPx;
      const end = start + stripeWidthPx;
      return `${color} ${start}px ${end}px`;
    }).join(', ');

    return `repeating-linear-gradient(135deg, ${cycle})`;
  }

  createVerticalBarsGradient(colors) {
    const segments = colors.map((color, index) => {
      const start = (index / colors.length) * 100;
      const end = ((index + 1) / colors.length) * 100;
      return `${color} ${start}% ${end}%`;
    }).join(', ');
    return `linear-gradient(to bottom, ${segments})`;
  }

  createDotsDecoration(colors, indicatorWidth) {
    const safeWidth = Math.max(1, indicatorWidth);
    const dotRadius = Math.max(2, Math.floor(safeWidth * 0.3));
    const x = safeWidth / 2;
    return colors
      .map((color, index) => {
        const y = (safeWidth / 2) + (index * safeWidth);
        return `radial-gradient(circle at ${x}px ${y}px, ${color} 0 ${dotRadius}px, transparent ${dotRadius + 1}px)`;
      })
      .join(', ');
  }

  getCombinedBackgroundColor(visibleColors, fallbackColor) {
    const primaryColor = visibleColors[0] || fallbackColor;
    const option = this.normalizeCombineBackground(this._config?.combine_background);
    if (option === 'primary') return primaryColor;
    if (option === 'neutral') return '#F8F3E9';
    return option;
  }

  getEventBackgroundColor(event) {
    const visibleColors = this.getVisibleCalendarColorsForEvent(event);
    const primaryColor = visibleColors[0] || event?.color || '#3b82f6';

    if (visibleColors.length <= 1) {
      return primaryColor;
    }

    return this.getCombinedBackgroundColor(visibleColors, primaryColor);
  }

  getContractColor(backgroundColor) {
    const rgb = this.colorToRgb(backgroundColor);
    if (!rgb) return 'white';

    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return luminance > 0.6 ? 'black' : 'white';
  }

  getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption) {
    if ((combineStyle === 'bars' || combineStyle === 'dots') && combineBackgroundOption === 'primary') {
      return visibleColors.slice(1);
    }
    return visibleColors;
  }

  getEventStyle(event, { withBorderAccent = false } = {}) {
    const visibleColors = this.getVisibleCalendarColorsForEvent(event);
    const primaryColor = visibleColors[0] || event.color;

    const shouldShowBorderAccent = withBorderAccent && visibleColors.length <= 1;
    const borderStyle = shouldShowBorderAccent
      ? `border-left: 4px solid ${primaryColor};`
      : 'border-left: none;';

    if (visibleColors.length <= 1) {
      return `background-color: ${primaryColor}; background-image: none; background-clip: padding-box; ${borderStyle}`;
    }

    const combineStyle = this.normalizeCombineStyle(this._config?.combine_style);
    const combineBackgroundOption = this.normalizeCombineBackground(this._config?.combine_background);
    const backgroundColor = this.getCombinedBackgroundColor(visibleColors, primaryColor);
    const indicatorWidth = Number(this._config?.combine_calendars_width) > 0
      ? Number(this._config.combine_calendars_width)
      : 12;
    const indicatorColors = this.getIndicatorColors(visibleColors, combineStyle, combineBackgroundOption);

    if (combineStyle === 'bars') {
      const barsGradient = indicatorColors.length > 0 ? this.createVerticalBarsGradient(indicatorColors) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return `${leftOffset} background-color: ${backgroundColor}; background-image: ${barsGradient}; background-size: ${indicatorWidth}px 100%; background-position: left top; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`;
    }

    if (combineStyle === 'dots') {
      const dots = indicatorColors.length > 0 ? this.createDotsDecoration(indicatorColors, indicatorWidth) : 'none';
      const leftOffset = indicatorColors.length > 0 ? `--combine-left-offset: ${indicatorWidth}px;` : '--combine-left-offset: 0px;';
      return `${leftOffset} background-color: ${backgroundColor}; background-image: ${dots}; background-repeat: no-repeat; background-clip: padding-box; ${borderStyle}`;
    }

    const stripeGradient = this.createZebraStripeGradient(visibleColors);
    return `--combine-left-offset: 0px; background-color: ${backgroundColor}; background-image: ${stripeGradient}; background-clip: padding-box; ${borderStyle}`;
  }

  getEventDateTimeInfo(event) {
    if (event.start.dateTime) {
      return {
        eventStart: new Date(event.start.dateTime),
        eventEnd: new Date(event.end.dateTime),
        isAllDay: false
      };
    }

    if (event.start.date) {
      return {
        eventStart: this.parseLocalDate(event.start.date),
        eventEnd: this.parseLocalDate(event.end.date),
        isAllDay: true
      };
    }

    const isAllDay = !event.start.includes('T');
    return {
      eventStart: new Date(event.start),
      eventEnd: new Date(event.end),
      isAllDay
    };
  }

  getLocalDateKey(date) {
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  }

  eventSpansMultipleLocalDates(eventStart, eventEnd) {
    return this.getLocalDateKey(eventStart) !== this.getLocalDateKey(eventEnd);
  }

  shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd) {
    const durationMs = eventEnd.getTime() - eventStart.getTime();
    return durationMs >= 86400000 && this.eventSpansMultipleLocalDates(eventStart, eventEnd);
  }

  getScheduleVisualInfo(event) {
    const { eventStart, eventEnd, isAllDay } = this.getEventDateTimeInfo(event);
    const rendersAsAllDay = isAllDay || this.shouldRenderTimedEventAsAllDayInSchedule(eventStart, eventEnd);
    const displayTitle = event.summary || this.t('untitledEvent');
    const shouldIncludeStartTime = !isAllDay && rendersAsAllDay && this.shouldShowEventTime(event);

    return {
      eventStart,
      eventEnd,
      isAllDay,
      rendersAsAllDay,
      displayTitle: shouldIncludeStartTime
        ? this.t('eventTitleWithStartTime', {
            title: displayTitle,
            time: this.formatScheduleTime(eventStart)
          })
        : displayTitle
    };
  }

  getEventDaySegment(event, date, options = {}) {
    const scheduleVisualInfo = options.useScheduleVisualTreatment ? this.getScheduleVisualInfo(event) : null;
    const { eventStart, eventEnd, isAllDay } = scheduleVisualInfo || this.getEventDateTimeInfo(event);
    const rendersAsAllDay = scheduleVisualInfo?.rendersAsAllDay || isAllDay;

    const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const nextDayStart = new Date(dayStart);
    nextDayStart.setDate(nextDayStart.getDate() + 1);

    if (eventEnd <= dayStart || eventStart >= nextDayStart) {
      return null;
    }

    const segmentStart = new Date(Math.max(eventStart.getTime(), dayStart.getTime()));
    const segmentEnd = new Date(Math.min(eventEnd.getTime(), nextDayStart.getTime()));
    const isAllDaySegment = rendersAsAllDay || (
      segmentStart.getTime() === dayStart.getTime() &&
      segmentEnd.getTime() === nextDayStart.getTime()
    );

    return {
      eventStart,
      eventEnd,
      segmentStart,
      segmentEnd,
      isAllDay,
      isAllDaySegment,
      startsOnDay: eventStart >= dayStart && eventStart < nextDayStart,
      endsOnDay: eventEnd > dayStart && eventEnd <= nextDayStart,
      displayTitle: scheduleVisualInfo?.displayTitle || event.summary || this.t('untitledEvent'),
      rendersAsAllDay
    };
  }

  sortEventsForDate(events, date) {
    return [...events].sort((a, b) => {
      const aSegment = this.getEventDaySegment(a, date);
      const bSegment = this.getEventDaySegment(b, date);

      if (!aSegment && !bSegment) return 0;
      if (!aSegment) return 1;
      if (!bSegment) return -1;

      if (aSegment.isAllDaySegment && !bSegment.isAllDaySegment) return -1;
      if (!aSegment.isAllDaySegment && bSegment.isAllDaySegment) return 1;

      return aSegment.segmentStart - bSegment.segmentStart;
    });
  }

  getEventsForDay(date) {
    const sourceEvents = this.combineDuplicateCalendarEvents(this._events);

    return sourceEvents.filter(event => {
      if (this.getVisibleCalendarColorsForEvent(event).length === 0) {
        return false;
      }

      return this.getEventDaySegment(event, date) !== null;
    });
  }

  attachEventListeners() {
    const prevButton = this.getRootElementById('prev-period');
    const nextButton = this.getRootElementById('next-period');
    const todayButton = this.getRootElementById('today');
    const addEventButton = this.getRootElementById('add-event-btn');
    const themeToggleButton = this.getRootElementById('theme-toggle');
    const modal = this.getRootElementById('event-modal');

    // View mode buttons
    this._root.querySelectorAll('.view-mode-button').forEach(button => {
      button.addEventListener('click', () => {
        this._viewMode = button.getAttribute('data-view');
        this.setWeekStart();
        this.ensureEventsForCurrentRange({ renderIfCovered: true });
      });
    });

    const calendarBadgesStrip = this._root.querySelector('.calendar-badges');
    if (calendarBadgesStrip) {
      calendarBadgesStrip.addEventListener('scroll', () => this.updateCalendarBadgesScrollState(), { passive: true });
    }

    // Calendar badge toggle (both regular and inline)
    this._root.querySelectorAll('.calendar-badge, .calendar-badge-inline').forEach(badge => {
      badge.addEventListener('click', (e) => {
        const entityId = badge.getAttribute('data-entity');
        if (this._hiddenCalendars.has(entityId)) {
          this._hiddenCalendars.delete(entityId);
        } else {
          this._hiddenCalendars.add(entityId);
        }
        this.persistPreferences();
        this.render();
      });
    });

    // Add event button
    addEventButton?.addEventListener('click', () => {
      this.showCreateEventModal();
    });

    themeToggleButton?.addEventListener('click', () => {
      this.applyThemeMode(this._isDarkMode ? 'light' : 'dark');
      this.persistPreferences();
      this.render();
    });

    prevButton?.addEventListener('click', () => {
      if (this._viewMode === 'month') {
        if (this._config.rolling_weeks !== null) {
          // In rolling weeks mode, go back by the number of weeks shown
          const weeksToAdvance = this._config.rolling_weeks + 1;
          this._currentDate.setDate(this._currentDate.getDate() - (weeksToAdvance * 7));
        } else {
          // Standard month navigation
          this._currentDate.setMonth(this._currentDate.getMonth() - 1);
        }
      } else {
        // In rolling-days mode, advance by rolling days + 1, otherwise by 7
        const rollingDays = this.getRollingDaysForView();
        const daysToAdvance = rollingDays !== null
          ? rollingDays + 1
          : 7;
        this._currentDate.setDate(this._currentDate.getDate() - daysToAdvance);
        if (rollingDays === null) {
          this.setWeekStart();
        }
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    nextButton?.addEventListener('click', () => {
      if (this._viewMode === 'month') {
        if (this._config.rolling_weeks !== null) {
          // In rolling weeks mode, go forward by the number of weeks shown
          const weeksToAdvance = this._config.rolling_weeks + 1;
          this._currentDate.setDate(this._currentDate.getDate() + (weeksToAdvance * 7));
        } else {
          // Standard month navigation
          this._currentDate.setMonth(this._currentDate.getMonth() + 1);
        }
      } else {
        // In rolling-days mode, advance by rolling days + 1, otherwise by 7
        const rollingDays = this.getRollingDaysForView();
        const daysToAdvance = rollingDays !== null
          ? rollingDays + 1
          : 7;
        this._currentDate.setDate(this._currentDate.getDate() + daysToAdvance);
        if (rollingDays === null) {
          this.setWeekStart();
        }
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    todayButton?.addEventListener('click', () => {
      this._currentDate = new Date();
      if (this.getRollingDaysForView() === null) {
        this.setWeekStart();
      }
      this.ensureEventsForCurrentRange({ renderIfCovered: true });
    });

    // Event click handlers for all view modes
    this._root.querySelectorAll('.event, .week-compact-event, .week-standard-event, .all-day-event').forEach(eventEl => {
      eventEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventData = JSON.parse(eventEl.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });

    // +N more click handlers (month view)
    this._root.querySelectorAll('.more-events').forEach(moreEl => {
      moreEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const dayEl = moreEl.closest('.day-cell');
        if (!dayEl) return;

        const date = new Date(dayEl.getAttribute('data-date'));
        const events = this.getEventsForDay(date);

        if (events.length > 0) {
          this.showDayCompactModal(date, events);
        }
      });
    });

    // Day click handlers (month view only)
    this._root.querySelectorAll('.day-cell').forEach(dayEl => {
      dayEl.addEventListener('click', (e) => {
        // Don't open if clicking on an event
        if (e.target.classList.contains('event') || e.target.closest('.event')) {
          return;
        }

        const date = new Date(dayEl.getAttribute('data-date'));

        // If event management is enabled, show create modal
        if (this._config.enable_event_management && this.getWritableCalendars().length > 0) {
          this.showCreateEventModal(date);
        } else {
          // Otherwise show events for that day
          const events = this.getEventsForDay(date);
          if (events.length > 0) {
            this.showDayModal(date, events);
          }
        }
      });
    });

    // Time slot click handlers (schedule view)
    this._root.querySelectorAll('.day-time-slot').forEach(slotEl => {
      slotEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        // Get the date and hour from the parent column
        const column = slotEl.closest('.week-standard-day-column');
        const date = new Date(column.getAttribute('data-date'));
        const hour = parseInt(slotEl.getAttribute('data-hour'));

        // Set the time on the date
        date.setHours(hour, 0, 0, 0);

        this.showCreateEventModal(date, date);
      });
    });

    // Day header click handlers (week views)
    this._root.querySelectorAll('[data-click-target="day-header"]').forEach(headerEl => {
      headerEl.addEventListener('click', (e) => {
        if (!this._config.enable_event_management || this.getWritableCalendars().length === 0) {
          return;
        }

        const column = headerEl.closest('[data-date]');
        const date = new Date(column.getAttribute('data-date'));

        this.showCreateEventModal(date);
      });
    });

    // Modal close
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (this._activeModalBackHandler) {
          const backHandler = this._activeModalBackHandler;
          this._activeModalBackHandler = null;
          backHandler();
        } else {
          modal.classList.remove('show');
        }
      }
    });
  }

  getRecurrenceWeekdayOptions() {
    return [
      { key: 'MO', label: 'Mon' },
      { key: 'TU', label: 'Tue' },
      { key: 'WE', label: 'Wed' },
      { key: 'TH', label: 'Thu' },
      { key: 'FR', label: 'Fri' },
      { key: 'SA', label: 'Sat' },
      { key: 'SU', label: 'Sun' }
    ];
  }

  buildRRuleFromInputs({ frequency, interval, untilDate, count, byDay }) {
    const parts = [`FREQ=${frequency}`];
    const parsedInterval = parseInt(interval, 10);

    if (!Number.isNaN(parsedInterval) && parsedInterval > 1) {
      parts.push(`INTERVAL=${parsedInterval}`);
    }

    if (Array.isArray(byDay) && byDay.length > 0) {
      parts.push(`BYDAY=${byDay.join(',')}`);
    }

    const parsedCount = parseInt(count, 10);
    if (!Number.isNaN(parsedCount) && parsedCount > 0) {
      parts.push(`COUNT=${parsedCount}`);
    } else if (untilDate) {
      const until = new Date(`${untilDate}T23:59:59`);
      if (!Number.isNaN(until.getTime())) {
        const compactUntil = until.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        parts.push(`UNTIL=${compactUntil}`);
      }
    }

    return parts.join(';');
  }

  parseRRule(rrule = '') {
    const parsed = {
      frequency: 'DAILY',
      interval: '1',
      count: '',
      untilDate: '',
      byDay: []
    };

    if (!rrule || typeof rrule !== 'string') {
      return parsed;
    }

    const ruleWithoutPrefix = rrule.replace(/^RRULE:/i, '');
    const segments = ruleWithoutPrefix.split(';');

    segments.forEach((segment) => {
      const [rawKey, rawValue] = segment.split('=');
      const key = (rawKey || '').toUpperCase();
      const value = (rawValue || '').trim();

      if (!key || !value) {
        return;
      }

      if (key === 'FREQ') {
        parsed.frequency = value.toUpperCase();
      } else if (key === 'INTERVAL') {
        parsed.interval = value;
      } else if (key === 'COUNT') {
        parsed.count = value;
      } else if (key === 'BYDAY') {
        parsed.byDay = value.split(',').map((day) => day.trim()).filter(Boolean);
      } else if (key === 'UNTIL') {
        const untilCompact = value.replace(/Z$/, '');
        if (/^\d{8}/.test(untilCompact)) {
          parsed.untilDate = `${untilCompact.slice(0, 4)}-${untilCompact.slice(4, 6)}-${untilCompact.slice(6, 8)}`;
        }
      }
    });

    return parsed;
  }

  getRecurrenceEndMode(recurrenceData = {}) {
    if (recurrenceData.count) return 'after';
    if (recurrenceData.untilDate) return 'on';
    return 'never';
  }

  syncRecurrenceEndInputs() {
    const selected = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
    const untilInput = this.getRootElementById('event-recurrence-until');
    const countInput = this.getRootElementById('event-recurrence-count');

    if (!untilInput || !countInput) return;

    if (selected === 'on') {
      untilInput.disabled = false;
      countInput.disabled = true;
      countInput.value = '';
    } else if (selected === 'after') {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = false;
    } else {
      untilInput.disabled = true;
      untilInput.value = '';
      countInput.disabled = true;
      countInput.value = '';
    }
  }

  setupStartEndDurationSync({ startInputId, endInputId, isDateOnly = false }) {
    const startInput = this.getRootElementById(startInputId);
    const endInput = this.getRootElementById(endInputId);
    if (!startInput || !endInput) return;

    const toDate = (value) => {
      if (!value) return null;
      return isDateOnly ? this.parseLocalDate(value) : this.parsePossiblyLocalDateTime(value);
    };

    const fromDate = (date) => {
      if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      if (isDateOnly) {
        return `${year}-${month}-${day}`;
      }
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    let durationMs = 0;
    const recalculateDuration = () => {
      const start = toDate(startInput.value);
      const end = toDate(endInput.value);
      if (!start || !end) return;
      durationMs = end.getTime() - start.getTime();
    };

    recalculateDuration();

    startInput.addEventListener('change', () => {
      const nextStart = toDate(startInput.value);
      if (!nextStart) return;
      const nextEnd = new Date(nextStart.getTime() + durationMs);
      endInput.value = fromDate(nextEnd);
    });

    endInput.addEventListener('change', recalculateDuration);
  }

  resolveTimedEventRange(startValue, endValue, fallbackDurationMs = 60 * 60 * 1000) {
    const start = this.parsePossiblyLocalDateTime(startValue);
    if (!(start instanceof Date) || Number.isNaN(start.getTime())) {
      return { start: null, end: null };
    }

    const parsedEnd = endValue ? this.parsePossiblyLocalDateTime(endValue) : null;
    if (parsedEnd instanceof Date && !Number.isNaN(parsedEnd.getTime())) {
      return { start, end: parsedEnd };
    }

    return {
      start,
      end: new Date(start.getTime() + fallbackDurationMs)
    };
  }

  showCreateEventModal(defaultDate = null, defaultTime = null) {

    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    // Set defaults
    const now = new Date();
    const startDate = defaultDate ? new Date(defaultDate) : now;
    const hasExplicitDefaultTime = defaultTime instanceof Date;
    const startTime = hasExplicitDefaultTime ? new Date(defaultTime) : new Date(startDate);

    // Round to next half hour for timed events
    if (!hasExplicitDefaultTime && (!defaultDate || defaultDate.getHours() !== 0)) {
      const minutes = startTime.getMinutes();
      if (minutes < 30) {
        startTime.setMinutes(30);
      } else {
        startTime.setHours(startTime.getHours() + 1);
        startTime.setMinutes(0);
      }
    }
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);

    // End time is 1 hour after start (for timed events)
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 1);

    // For all-day events, show same day to user (we'll add +1 when submitting)
    const endDate = new Date(startDate);

    // Format for datetime-local input
    const formatDateTimeLocal = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('createEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="create-event-form">
          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${this.t('calendars')}<span class="form-required">*</span>
              </label>
              <div class="form-checkbox-grid">
                ${writableCalendars.map((entityId, index) => `
                  <label class="form-checkbox-group" style="margin: 0;">
                    <input
                      type="checkbox"
                      class="form-checkbox create-event-calendar"
                      value="${entityId}"
                      ${index === 0 ? 'checked' : ''}
                    />
                    <span class="form-checkbox-label">${this.escapeHtml(this.getCalendarName(entityId))}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${this.t('eventTitle')}<span class="form-required">*</span>
              </label>
              <input type="text" class="form-input" id="event-title" placeholder="${this.t('eventTitlePlaceholder')}" required />
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row form-inline-row-top">
              <label class="form-label">${this.t('eventOptions')}</label>
              <div class="form-checkbox-row">
                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-all-day" />
                    <label class="form-checkbox-label" for="event-all-day">${this.t('allDayEvent')}</label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-recurring" />
                    <label class="form-checkbox-label" for="event-recurring">${this.t('recurring')}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="recurring-event-fields" style="display: none;">
            <div class="form-row">
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceFrequency')}</label>
                  <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY">${this.t('recurrenceDaily')}</option>
                  <option value="WEEKLY">${this.t('recurrenceWeekly')}</option>
                  <option value="MONTHLY">${this.t('recurrenceMonthly')}</option>
                  <option value="YEARLY">${this.t('recurrenceYearly')}</option>
                  </select>
                </div>
              </div>
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceEvery')}</label>
                  <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="1" />
                </div>
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: none;">
              <label class="form-label">${this.t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${this.getRecurrenceWeekdayOptions().map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${this.t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" checked />
                  <span>${this.t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" />
                  <span>${this.t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" disabled />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" />
                  <span>${this.t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" disabled />
                  <span>${this.t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>

          <div id="timed-event-fields">
            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start"
                       value="${formatDateTimeLocal(startTime)}" required />
              </div>
            </div>

            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end"
                       value="${formatDateTimeLocal(endTime)}" />
              </div>
            </div>
          </div>

          <div id="all-day-event-fields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date"
                       value="${formatDate(startDate)}" />
              </div>

              <div class="form-group">
                <label class="form-label">${this.t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date"
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('location')}</label>
              <input type="text" class="form-input" id="event-location" placeholder="${this.t('locationPlaceholder')}" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">${this.t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${this.t('descriptionPlaceholder')}"></textarea>
          </div>

          <div id="form-error" class="error-message" style="display: none;"></div>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${this.t('createEvent')}</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('create-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const selectedCalendarIds = Array.from(this._root.querySelectorAll('.create-event-calendar:checked'))
        .map((input) => input.value);
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDay = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const description = this.getRootElementById('event-description').value.trim();

      if (selectedCalendarIds.length === 0) {
        this.showFormError(errorDiv, this.t('noWritableCalendars'));
        return;
      }

      if (!title) {
        this.showFormError(errorDiv, this.t('eventTitleRequired'));
        return;
      }

      let eventData = {
        summary: title,
        location: location || undefined,
        description: description || undefined
      };

      if (isAllDay) {
        const startDate = this.getRootElementById('event-start-date').value;
        const endDate = this.getRootElementById('event-end-date').value;

        if (!startDate || !endDate) {
          this.showFormError(errorDiv, this.t('startEndDatesRequired'));
          return;
        }

        // Validate that end date is on or after start date
        const start = this.parseLocalDate(startDate);
        const end = this.parseLocalDate(endDate);

        if (end < start) {
          this.showFormError(errorDiv, this.t('endDateBeforeStart'));
          return;
        }

        // For Home Assistant, end date is exclusive, so add 1 day
        const exclusiveEndDate = new Date(end);
        exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
        const exclusiveEndDateStr = this.formatLocalDate(exclusiveEndDate);

        eventData.start = { date: startDate };
        eventData.end = { date: exclusiveEndDateStr };
      } else {
        const startDateTime = this.getRootElementById('event-start').value;
        const endDateTime = this.getRootElementById('event-end').value;

        if (!startDateTime) {
          this.showFormError(errorDiv, this.t('startEndTimesRequired'));
          return;
        }

        const { start, end } = this.resolveTimedEventRange(startDateTime, endDateTime);

        if (end <= start) {
          this.showFormError(errorDiv, this.t('endTimeBeforeStart'));
          return;
        }

        eventData.start = { dateTime: start.toISOString() };
        eventData.end = { dateTime: end.toISOString() };
      }

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);

        if (frequency === 'WEEKLY' && byDay.length === 0) {
          this.showFormError(errorDiv, this.t('recurrenceSelectWeekday'));
          return;
        }

        eventData.rrule = this.buildRRuleFromInputs({
          frequency,
          interval,
          untilDate,
          count: recurrenceCount,
          byDay: frequency === 'WEEKLY' ? byDay : []
        });
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('creating');

      try {
        await Promise.all(selectedCalendarIds.map((calendarId) => this.createEvent(calendarId, eventData)));
        this._combinedDeleteTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents();
      } catch (error) {
        console.error('Failed to create event:', error);
        this.showFormError(errorDiv, error.message || this.t('failedCreateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('createEvent');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  showEditEventModal(event, startDate, endDate, isAllDay, editScope = 'this') {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const writableCalendars = this.getWritableCalendars();
    if (writableCalendars.length === 0) {
      this.showError(this.t('noWritableCalendars'));
      return;
    }

    const selectedEditTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
      ? this._combinedEditTargets
      : null;
    const selectedCombinedCalendarIds = selectedEditTargets
      ? Array.from(new Set(selectedEditTargets.map(target => target.entityId))).filter((entityId) => writableCalendars.includes(entityId))
      : [];
    const visibleCalendarOptions = selectedCombinedCalendarIds.length > 0 ? selectedCombinedCalendarIds : writableCalendars;

    // Format for datetime-local input
    const formatDateTimeLocal = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const recurrenceData = this.parseRRule(event.rrule || '');
    const isRecurring = !!event.rrule;
    const isSingleOccurrenceEdit = editScope === 'this' && isRecurring;
    const recurringSelectedByDefault = isRecurring && !isSingleOccurrenceEdit;

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.t('editEvent')}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <form id="edit-event-form">
          <div class="form-group">
            <label class="form-label">
              ${this.t('calendar')}<span class="form-required">*</span>
            </label>
            <select class="form-select" id="event-calendar" required ${selectedCombinedCalendarIds.length > 1 ? 'disabled' : ''}>
              ${visibleCalendarOptions.map((entityId) => `
                <option value="${entityId}" ${entityId === event.entityId ? 'selected' : ''}>
                  ${this.escapeHtml(this.getCalendarName(entityId))}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">
                ${this.t('eventTitle')}<span class="form-required">*</span>
              </label>
              <input type="text" class="form-input" id="event-title"
                     placeholder="${this.t('eventTitlePlaceholder')}"
                     value="${this.escapeHtml(event.summary || '')}" required />
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row form-inline-row-top">
              <label class="form-label">${this.t('eventOptions')}</label>
              <div class="form-checkbox-row">
                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-all-day" ${isAllDay ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-all-day">${this.t('allDayEvent')}</label>
                  </div>
                </div>

                <div class="form-group">
                  <div class="form-checkbox-group">
                    <input type="checkbox" class="form-checkbox" id="event-recurring" ${recurringSelectedByDefault ? 'checked' : ''} />
                    <label class="form-checkbox-label" for="event-recurring">${this.t('recurring')}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="recurring-event-fields" style="display: ${recurringSelectedByDefault ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceFrequency')}</label>
                  <select class="form-select" id="event-recurrence-frequency">
                  <option value="DAILY" ${recurrenceData.frequency === 'DAILY' ? 'selected' : ''}>${this.t('recurrenceDaily')}</option>
                  <option value="WEEKLY" ${recurrenceData.frequency === 'WEEKLY' ? 'selected' : ''}>${this.t('recurrenceWeekly')}</option>
                  <option value="MONTHLY" ${recurrenceData.frequency === 'MONTHLY' ? 'selected' : ''}>${this.t('recurrenceMonthly')}</option>
                  <option value="YEARLY" ${recurrenceData.frequency === 'YEARLY' ? 'selected' : ''}>${this.t('recurrenceYearly')}</option>
                </select>
                </div>
              </div>
              <div class="form-group form-group-inline">
                <div class="form-inline-row">
                  <label class="form-label">${this.t('recurrenceEvery')}</label>
                  <input type="number" class="form-input" id="event-recurrence-interval" min="1" value="${this.escapeHtml(recurrenceData.interval || '1')}" />
                </div>
              </div>
            </div>
            <div class="form-group" id="event-recurrence-weekdays-group" style="display: ${recurringSelectedByDefault && recurrenceData.frequency === 'WEEKLY' ? 'block' : 'none'};">
              <label class="form-label">${this.t('recurrenceWeekdays')}</label>
              <div class="form-checkbox-group" style="flex-wrap: wrap; gap: 10px;">
                ${this.getRecurrenceWeekdayOptions().map(day => `
                  <label class="form-checkbox-label" style="display:flex;align-items:center;gap:6px;">
                    <input type="checkbox" class="form-checkbox event-recurrence-weekday" value="${day.key}" ${recurrenceData.byDay.includes(day.key) ? 'checked' : ''} />
                    <span>${day.label}</span>
                  </label>
                `).join('')}
              </div>
            </div>
            <div class="form-group">
              <label class="form-label recurrence-ends-label">${this.t('recurrenceEndsOn')}</label>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-never">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-never" value="never" ${this.getRecurrenceEndMode(recurrenceData) === 'never' ? 'checked' : ''} />
                  <span>${this.t('recurrenceNever')}</span>
                </label>
                <div></div>
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-on">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-on" value="on" ${this.getRecurrenceEndMode(recurrenceData) === 'on' ? 'checked' : ''} />
                  <span>${this.t('recurrenceOn')}</span>
                </label>
                <input type="date" class="form-input" id="event-recurrence-until" value="${this.escapeHtml(recurrenceData.untilDate || '')}" ${this.getRecurrenceEndMode(recurrenceData) === 'on' ? '' : 'disabled'} />
              </div>
              <div class="recurrence-end-row">
                <label class="recurrence-end-option" for="event-recurrence-end-after">
                  <input type="radio" name="event-recurrence-end-mode" id="event-recurrence-end-after" value="after" ${this.getRecurrenceEndMode(recurrenceData) === 'after' ? 'checked' : ''} />
                  <span>${this.t('recurrenceAfter')}</span>
                </label>
                <div class="recurrence-after-input">
                  <input type="number" class="form-input" id="event-recurrence-count" min="1" placeholder="13" value="${this.escapeHtml(recurrenceData.count || '')}" ${this.getRecurrenceEndMode(recurrenceData) === 'after' ? '' : 'disabled'} />
                  <span>${this.t('recurrenceOccurrences')}</span>
                </div>
              </div>
            </div>
          </div>

          <div id="timed-event-fields" style="display: ${isAllDay ? 'none' : 'block'};">
            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('start')}</label>
                <input type="datetime-local" class="form-input" id="event-start"
                       value="${formatDateTimeLocal(startDate)}" required />
              </div>
            </div>

            <div class="form-group form-group-inline">
              <div class="form-inline-row">
                <label class="form-label">${this.t('end')}</label>
                <input type="datetime-local" class="form-input" id="event-end"
                       value="${formatDateTimeLocal(endDate)}" />
              </div>
            </div>
          </div>

          <div id="all-day-event-fields" style="display: ${isAllDay ? 'block' : 'none'};">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">${this.t('startDate')}</label>
                <input type="date" class="form-input" id="event-start-date"
                       value="${formatDate(startDate)}" />
              </div>

              <div class="form-group">
                <label class="form-label">${this.t('endDate')}</label>
                <input type="date" class="form-input" id="event-end-date"
                       value="${formatDate(endDate)}" />
              </div>
            </div>
          </div>

          <div class="form-group form-group-inline">
            <div class="form-inline-row">
              <label class="form-label">${this.t('location')}</label>
              <input type="text" class="form-input" id="event-location"
                     placeholder="${this.t('locationPlaceholder')}"
                     value="${this.escapeHtml(event.location || '')}" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">${this.t('description')}</label>
            <textarea class="form-textarea" id="event-description" placeholder="${this.t('descriptionPlaceholder')}">${this.escapeHtml(event.description || '')}</textarea>
          </div>

          <div id="form-error" class="error-message" style="display: none;"></div>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="cancel-btn">${this.t('cancel')}</button>
            <button type="submit" class="btn btn-primary" id="submit-btn">${this.t('saveChanges')}</button>
          </div>
        </form>
      </div>
    `;

    modal.classList.add('show');

    // Event listeners
    const form = this.getRootElementById('edit-event-form');
    const allDayCheckbox = this.getRootElementById('event-all-day');
    const recurringCheckbox = this.getRootElementById('event-recurring');
    const recurrenceFrequency = this.getRootElementById('event-recurrence-frequency');
    const timedFields = this.getRootElementById('timed-event-fields');
    const allDayFields = this.getRootElementById('all-day-event-fields');
    const recurringFields = this.getRootElementById('recurring-event-fields');
    const recurrenceWeekdaysGroup = this.getRootElementById('event-recurrence-weekdays-group');
    const recurrenceEndModeInputs = this._root.querySelectorAll('input[name="event-recurrence-end-mode"]');
    const errorDiv = this.getRootElementById('form-error');

    // Toggle all-day fields
    allDayCheckbox.addEventListener('change', () => {
      if (allDayCheckbox.checked) {
        timedFields.style.display = 'none';
        allDayFields.style.display = 'block';
      } else {
        timedFields.style.display = 'block';
        allDayFields.style.display = 'none';
      }
    });

    const updateRecurringFrequencyVisibility = () => {
      recurrenceWeekdaysGroup.style.display = recurrenceFrequency.value === 'WEEKLY' ? 'block' : 'none';
    };

    recurringCheckbox.addEventListener('change', () => {
      recurringFields.style.display = recurringCheckbox.checked ? 'block' : 'none';
    });

    recurrenceFrequency.addEventListener('change', updateRecurringFrequencyVisibility);
    recurrenceEndModeInputs.forEach((input) => input.addEventListener('change', () => this.syncRecurrenceEndInputs()));
    updateRecurringFrequencyVisibility();
    this.syncRecurrenceEndInputs();

    this.setupStartEndDurationSync({ startInputId: 'event-start', endInputId: 'event-end' });
    this.setupStartEndDurationSync({ startInputId: 'event-start-date', endInputId: 'event-end-date', isDateOnly: true });

    // Close button
    this.getRootElementById('close-modal').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Cancel button
    this.getRootElementById('cancel-btn').addEventListener('click', () => {
      this._combinedEditTargets = null;
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const calendarId = this.getRootElementById('event-calendar').value;
      const title = this.getRootElementById('event-title').value.trim();
      const isAllDayChecked = this.getRootElementById('event-all-day').checked;
      const location = this.getRootElementById('event-location').value.trim();
      const description = this.getRootElementById('event-description').value.trim();

      if (!title) {
        this.showFormError(errorDiv, this.t('eventTitleRequired'));
        return;
      }

      let eventData = {
        summary: title,
        location: location || undefined,
        description: description || undefined
      };

      if (isAllDayChecked) {
        const startDateStr = this.getRootElementById('event-start-date').value;
        const endDateStr = this.getRootElementById('event-end-date').value;

        if (!startDateStr || !endDateStr) {
          this.showFormError(errorDiv, this.t('startEndDatesRequired'));
          return;
        }

        // Validate that end date is on or after start date
        const start = this.parseLocalDate(startDateStr);
        const end = this.parseLocalDate(endDateStr);

        if (end < start) {
          this.showFormError(errorDiv, this.t('endDateBeforeStart'));
          return;
        }

        // For Home Assistant, end date is exclusive, so add 1 day
        const exclusiveEndDate = new Date(end);
        exclusiveEndDate.setDate(exclusiveEndDate.getDate() + 1);
        const exclusiveEndDateStr = this.formatLocalDate(exclusiveEndDate);

        eventData.start = { date: startDateStr };
        eventData.end = { date: exclusiveEndDateStr };
      } else {
        const startDateTime = this.getRootElementById('event-start').value;
        const endDateTime = this.getRootElementById('event-end').value;
        const existingDurationMs = Math.max(endDate.getTime() - startDate.getTime(), 60 * 1000);

        if (!startDateTime) {
          this.showFormError(errorDiv, this.t('startEndTimesRequired'));
          return;
        }

        const { start, end } = this.resolveTimedEventRange(startDateTime, endDateTime, existingDurationMs);

        if (end <= start) {
          this.showFormError(errorDiv, this.t('endTimeBeforeStart'));
          return;
        }

        eventData.start = { dateTime: start.toISOString() };
        eventData.end = { dateTime: end.toISOString() };
      }

      if (recurringCheckbox.checked) {
        const frequency = this.getRootElementById('event-recurrence-frequency').value;
        const interval = this.getRootElementById('event-recurrence-interval').value;
        const untilDateRaw = this.getRootElementById('event-recurrence-until').value;
        const recurrenceCountRaw = this.getRootElementById('event-recurrence-count').value;
        const recurrenceEndMode = this._root.querySelector('input[name="event-recurrence-end-mode"]:checked')?.value || 'never';
        const untilDate = recurrenceEndMode === 'on' ? untilDateRaw : '';
        const recurrenceCount = recurrenceEndMode === 'after' ? recurrenceCountRaw : '';
        const byDay = Array.from(this._root.querySelectorAll('.event-recurrence-weekday:checked')).map((el) => el.value);

        if (frequency === 'WEEKLY' && byDay.length === 0) {
          this.showFormError(errorDiv, this.t('recurrenceSelectWeekday'));
          return;
        }

        eventData.rrule = this.buildRRuleFromInputs({
          frequency,
          interval,
          untilDate,
          count: recurrenceCount,
          byDay: frequency === 'WEEKLY' ? byDay : []
        });
      }

      // Disable submit button
      const submitBtn = this.getRootElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = this.t('saving');

      try {
        const editTargets = Array.isArray(this._combinedEditTargets) && this._combinedEditTargets.length > 0
          ? this._combinedEditTargets
          : [event];

        for (const targetEvent of editTargets) {
          const targetCalendarId = (editTargets.length > 1) ? targetEvent.entityId : calendarId;
          await this.updateEvent(targetEvent, targetCalendarId, eventData, editScope);
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents();
      } catch (error) {
        console.error('Failed to update event:', error);

        // Safety net: if edit was blocked by capability detection, still try create+delete.
        // Some integrations misreport update/delete support even though create+delete works.
        if (error.message === this.t('calendarNoModifyError')) {
          try {
            await this.createEvent(calendarId, eventData);
            await this.deleteEvent(event.entityId, event.uid, event.recurrence_id);
            modal.classList.remove('show');
            this._lastFetch = null;
            await this.updateEvents();
            return;
          } catch (fallbackError) {
            console.error('Safety-net create+delete fallback failed:', fallbackError);
          }
        }

        this._combinedEditTargets = null;
        this._combinedDeleteTargets = null;
        this.showFormError(errorDiv, error.message || this.t('failedUpdateEvent'));
        submitBtn.disabled = false;
        submitBtn.textContent = this.t('saveChanges');
      }
    });

    // Focus on title input
    setTimeout(() => {
      this.getRootElementById('event-title')?.focus();
    }, 100);
  }

  async updateEvent(originalEvent, newCalendarId, eventData, editScope = 'this') {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const capabilities = this._calendarCapabilities[originalEvent.entityId] || {};

    // Check if we're moving to a different calendar
    const movingCalendar = newCalendarId !== originalEvent.entityId;

    if (!originalEvent.uid) {
      throw new Error(this.t('missingUidError'));
    }

    const isRecurringUpdate = !!eventData.rrule || !!originalEvent.rrule;

    const recurrenceId = (isRecurringUpdate && editScope !== 'all') ? originalEvent.recurrence_id : null;
    const recurrenceRange = (isRecurringUpdate && editScope === 'future' && originalEvent.recurrence_id) ? 'THISANDFUTURE' : null;

    if (isRecurringUpdate && !movingCalendar && this._hass.connection?.sendMessagePromise) {
      const dtstart = eventData.start.dateTime || eventData.start.date;
      const dtend = eventData.end.dateTime || eventData.end.date;

      const eventPayload = {
        summary: eventData.summary,
        dtstart,
        dtend
      };

      if (eventData.location) {
        eventPayload.location = eventData.location;
      }

      if (eventData.description) {
        eventPayload.description = eventData.description;
      }

      if (eventData.rrule) {
        eventPayload.rrule = eventData.rrule;
      }

      const wsPayload = {
        type: 'calendar/event/update',
        entity_id: originalEvent.entityId,
        uid: originalEvent.uid,
        event: eventPayload
      };

      if (recurrenceId) {
        wsPayload.recurrence_id = recurrenceId;
      }

      if (recurrenceRange) {
        wsPayload.recurrence_range = recurrenceRange;
      }

      try {
        await this._hass.connection.sendMessagePromise(wsPayload);
        return;
      } catch (error) {
        console.error('Recurring update via WebSocket failed, falling back:', error?.message || error);
      }
    }

    // If calendar supports UPDATE, we're not moving calendars, and service exists, use update service
    const hasUpdateService = !!this._hass.services?.calendar?.update_event;
    if (capabilities.canUpdate && !movingCalendar && hasUpdateService) {
      try {
        const serviceData = {
          entity_id: originalEvent.entityId,
          uid: originalEvent.uid,
          summary: eventData.summary
        };

        // Add location if provided
        if (eventData.location) {
          serviceData.location = eventData.location;
        }

        // Add description if provided
        if (eventData.description) {
          serviceData.description = eventData.description;
        }

        // Add date/time fields
        if (eventData.start.date) {
          serviceData.start_date = eventData.start.date;
          serviceData.end_date = eventData.end.date;
        } else {
          serviceData.start_date_time = eventData.start.dateTime;
          serviceData.end_date_time = eventData.end.dateTime;
        }

        if (eventData.rrule) {
          serviceData.rrule = eventData.rrule;
        }

        // Add recurrence controls for recurring event edits
        if (recurrenceId) {
          serviceData.recurrence_id = recurrenceId;
        }

        if (recurrenceRange) {
          serviceData.recurrence_range = recurrenceRange;
        }

        await this._hass.callService('calendar', 'update_event', serviceData);
        return;
      } catch (error) {
        console.error('Update service failed, trying create+delete fallback:', error.message);
        // Fall through to create+delete pattern
      }
    } else if (capabilities.canUpdate && !movingCalendar && !hasUpdateService) {
      // Some integrations advertise update support but the service is not registered.
      // Skip update call to avoid misleading "Action calendar.update_event not found" pop-ups.
      console.debug('calendar.update_event service unavailable, using create+delete fallback');
    }

    // Fallback: Create new event and then delete old one
    // This prevents data loss when create fails on calendars without UPDATE support

    try {
      // Create in destination calendar first (might be same or different)
      await this.createEvent(newCalendarId, eventData);

      // Delete from original calendar only after successful create
      await this.deleteEvent(originalEvent.entityId, originalEvent.uid, recurrenceId, recurrenceRange);
    } catch (error) {
      console.error('Create+Delete fallback failed:', error);
      throw new Error(error.message || this.t('updateEventServiceError'));
    }
  }

  async deleteEvent(calendarId, uid, recurrenceId = null, recurrenceRange = null) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    // Try WebSocket API first (works for Google Calendar and others)
    // This is the official Calendar WebSocket API that the HA Calendar UI uses
    try {
      if (this._hass.connection && this._hass.connection.sendMessagePromise && uid) {
        const payload = {
          type: 'calendar/event/delete',
          entity_id: calendarId,
          uid: uid
        };

        // Add recurrence_id if deleting a specific instance
        if (recurrenceId) {
          payload.recurrence_id = recurrenceId;
        }

        // Add recurrence_range if deleting this and future events
        if (recurrenceRange) {
          payload.recurrence_range = recurrenceRange;
        }

        await this._hass.connection.sendMessagePromise(payload);
        return; // Success via WebSocket
      }
    } catch (wsError) {
      console.log('WebSocket delete failed, trying service call:', wsError.message);
      // Fall through to service call attempt
    }

    // Fallback to service call (works for Local Calendar and some others)
    const serviceData = {
      entity_id: calendarId,
      uid: uid
    };

    // Add recurrence_id if deleting a specific instance
    if (recurrenceId) {
      serviceData.recurrence_id = recurrenceId;
    }

    // Add recurrence_range if deleting this and future events
    if (recurrenceRange) {
      serviceData.recurrence_range = recurrenceRange;
    }

    try {
      await this._hass.callService('calendar', 'delete_event', serviceData);
    } catch (error) {
      console.error('Service call delete also failed:', error);
      throw new Error(error.message || this.t('deleteEventServiceError'));
    }
  }

  async createEvent(calendarId, eventData) {
    if (!this._hass) {
      throw new Error(this.t('homeAssistantUnavailable'));
    }

    const isRecurring = !!eventData.rrule;

    // Build service-style data (used by both API variants)
    const baseData = {
      entity_id: calendarId,
      summary: eventData.summary
    };

    if (eventData.location) {
      baseData.location = eventData.location;
    }

    if (eventData.description) {
      baseData.description = eventData.description;
    }

    if (eventData.start.date) {
      baseData.start_date = eventData.start.date;
      baseData.end_date = eventData.end.date;
    } else {
      baseData.start_date_time = eventData.start.dateTime;
      baseData.end_date_time = eventData.end.dateTime;
    }

    if (isRecurring) {
      baseData.rrule = eventData.rrule;

      // HA recurring event support is exposed through Calendar WebSocket API.
      // WebSocket schema expects event.dtstart / event.dtend (not start/end keys).
      const wsPayload = {
        type: 'calendar/event/create',
        entity_id: calendarId,
        event: {
          summary: baseData.summary,
          location: baseData.location,
          description: baseData.description,
          rrule: baseData.rrule,
          dtstart: eventData.start.dateTime || eventData.start.date,
          dtend: eventData.end.dateTime || eventData.end.date
        }
      };

      try {
        if (this._hass.connection?.sendMessagePromise) {
          await this._hass.connection.sendMessagePromise(wsPayload);
          return;
        }
      } catch (error) {
        console.error('WebSocket recurring create failed:', error);
        throw new Error(error?.message || this.t('createEventServiceError'));
      }

      throw new Error(this.t('createEventServiceError'));
    }

    try {
      await this._hass.callService('calendar', 'create_event', baseData);
    } catch (error) {
      console.error('Service call failed:', error);
      throw new Error(error.message || this.t('createEventServiceError'));
    }
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }


  showEditConfirmation(event, startDate, endDate, isAllDay, selectedEvents = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const isRecurring = event.rrule || event.recurrence_id;
    if (!isRecurring) {
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, 'this');
      return;
    }

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editRecurringEventTitle')}</h3>
        <p class="confirm-message">
          ${this.t('editRecurringPrompt', { title: this.escapeHtml(event.summary || this.t('untitledEvent')) })}
        </p>

        <div class="recurring-options">
          <label class="recurring-option">
            <input type="radio" name="edit-option" value="this" checked />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
              <div class="recurring-option-description">${this.t('editThisOccurrence')}</div>
            </div>
          </label>

          ${event.recurrence_id ? `
            <label class="recurring-option">
              <input type="radio" name="edit-option" value="future" />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                <div class="recurring-option-description">${this.t('editThisOccurrenceAndFuture')}</div>
              </div>
            </label>
          ` : ''}

          <label class="recurring-option">
            <input type="radio" name="edit-option" value="all" />
            <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('editEntireSeries')}</div>
            </div>
          </label>
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-edit-option-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-edit-option-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-edit-option-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-edit-option-btn')?.addEventListener('click', () => {
      const selectedOption = this._root.querySelector('input[name="edit-option"]:checked')?.value || 'this';
      modal.classList.remove('show');
      this._combinedEditTargets = selectedEvents;
      this.showEditEventModal(event, startDate, endDate, isAllDay, selectedOption);
    });
  }


  showCombinedEditSelectionModal(event, startDate, endDate, isAllDay) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('editEvent')}</h3>
        <p class="confirm-message">Select which calendar copies to edit.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-edit-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-edit-btn">${this.t('cancel')}</button>
          <button class="btn btn-primary" id="confirm-combined-edit-btn">${this.t('editEvent')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-edit-btn')?.addEventListener('click', () => {
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-edit-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-edit-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedEvents = selectedIndexes.map(index => sourceEvents[index]);
      modal.classList.remove('show');
      this.showEditConfirmation(selectedEvents[0], startDate, endDate, isAllDay, selectedEvents);
    });
  }


  showCombinedDeleteSelectionModal(event) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sourceEvents = (event.sourceEvents || []).filter(sourceEvent => !this._hiddenCalendars.has(sourceEvent.entityId));

    content.innerHTML = `
      <div class="confirm-dialog">
        <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
        <p class="confirm-message">Select which calendar copies to delete.</p>

        <div class="recurring-options">
          ${sourceEvents.map((sourceEvent, index) => `
            <label class="recurring-option">
              <input type="checkbox" class="combined-delete-option" data-index="${index}" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.escapeHtml(this.getCalendarName(sourceEvent.entityId))}</div>
                <div class="recurring-option-description">${this.escapeHtml(sourceEvent.summary || this.t('untitledEvent'))}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="confirm-actions">
          <button class="btn btn-secondary" id="cancel-combined-delete-btn">${this.t('cancel')}</button>
          <button class="btn btn-danger" id="confirm-combined-delete-btn">${this.t('delete')}</button>
        </div>
      </div>
    `;

    modal.classList.add('show');

    this.getRootElementById('cancel-combined-delete-btn')?.addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
      this.showEventModal(event);
    });

    this.getRootElementById('confirm-combined-delete-btn')?.addEventListener('click', () => {
      const selectedIndexes = Array.from(this._root.querySelectorAll('.combined-delete-option:checked'))
        .map(input => Number.parseInt(input.getAttribute('data-index'), 10))
        .filter(index => Number.isInteger(index) && index >= 0 && index < sourceEvents.length);

      if (selectedIndexes.length === 0) {
        return;
      }

      const selectedDeleteTargets = selectedIndexes.map(index => sourceEvents[index]);
      this._combinedDeleteTargets = selectedDeleteTargets;
      modal.classList.remove('show');
      this.showDeleteConfirmation(selectedDeleteTargets[0], selectedDeleteTargets);
    });
  }


  showDeleteConfirmation(event, selectedEvents = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');
    const deleteTargets = Array.isArray(selectedEvents) && selectedEvents.length > 0
      ? selectedEvents
      : (Array.isArray(this._combinedDeleteTargets) && this._combinedDeleteTargets.length > 0
          ? this._combinedDeleteTargets
          : [event]);
    const representativeEvent = deleteTargets[0] || event;

    // Check if any selected target is recurring
    const hasRecurringTargets = deleteTargets.some(target => target.rrule || target.recurrence_id);
    const hasFutureCapableTargets = deleteTargets.some(target => target.recurrence_id);

    if (hasRecurringTargets) {
      // Show recurring event deletion options
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteRecurringEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteRecurringPrompt', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>

          <div class="recurring-options">
            <label class="recurring-option">
              <input type="radio" name="delete-option" value="this" checked />
              <div class="recurring-option-label">
                <div class="recurring-option-title">${this.t('deleteThisEventOnly')}</div>
                <div class="recurring-option-description">${this.t('deleteThisOccurrence')}</div>
              </div>
            </label>

            ${hasFutureCapableTargets ? `
              <label class="recurring-option">
                <input type="radio" name="delete-option" value="future" />
                <div class="recurring-option-label">
                  <div class="recurring-option-title">${this.t('deleteThisAndFutureEvents')}</div>
                  <div class="recurring-option-description">${this.t('deleteThisOccurrenceAndFuture')}</div>
                </div>
              </label>
            ` : ''}

            <label class="recurring-option">
              <input type="radio" name="delete-option" value="all" />
              <div class="recurring-option-label">
              <div class="recurring-option-title">${this.t('deleteAllEvents')}</div>
              <div class="recurring-option-description">${this.t('deleteEntireSeries')}</div>
              </div>
            </label>
          </div>

          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    } else {
      // Show simple confirmation for non-recurring events
      content.innerHTML = `
        <div class="confirm-dialog">
          <h3 class="confirm-title">${this.t('deleteEventTitle')}</h3>
          <p class="confirm-message">
            ${this.t('deleteEventConfirm', { title: this.escapeHtml(representativeEvent.summary || this.t('untitledEvent')) })}
          </p>
          <div class="confirm-actions">
            <button class="btn btn-secondary" id="cancel-delete-btn">${this.t('cancel')}</button>
            <button class="btn btn-danger" id="confirm-delete-btn">${this.t('delete')}</button>
          </div>
        </div>
      `;
    }

    modal.classList.add('show');

    // Cancel button
    this.getRootElementById('cancel-delete-btn').addEventListener('click', () => {
      this._combinedDeleteTargets = null;
      modal.classList.remove('show');
    });

    // Confirm delete button
    this.getRootElementById('confirm-delete-btn').addEventListener('click', async () => {
      const deleteBtn = this.getRootElementById('confirm-delete-btn');
      deleteBtn.disabled = true;
      deleteBtn.textContent = this.t('deleting');

      try {
        if (hasRecurringTargets) {
          // Get the selected option
          const selectedOption = this._root.querySelector('input[name="delete-option"]:checked')?.value;

          for (const targetEvent of deleteTargets) {
            const targetIsRecurring = targetEvent.rrule || targetEvent.recurrence_id;

            if (!targetIsRecurring) {
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
              continue;
            }

            if (selectedOption === 'future' && targetEvent.recurrence_id) {
              // Delete this and future instances when this target has an occurrence id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id, 'THISANDFUTURE');
            } else if (selectedOption === 'this' && targetEvent.recurrence_id) {
              // Delete this instance only when this target has an occurrence id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid, targetEvent.recurrence_id);
            } else if (selectedOption === 'all') {
              // Delete entire series
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            } else {
              // Fallback for recurring targets without recurrence_id
              await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
            }
          }
        } else {
          for (const targetEvent of deleteTargets) {
            // Delete single event
            await this.deleteEvent(targetEvent.entityId, targetEvent.uid);
          }
        }

        this._combinedDeleteTargets = null;
        modal.classList.remove('show');

        // Refresh events
        this._lastFetch = null;
        await this.updateEvents();
      } catch (error) {
        console.error('Failed to delete event:', error);
        this._combinedDeleteTargets = null;
        alert(error.message || this.t('failedDeleteEvent'));
        deleteBtn.disabled = false;
        deleteBtn.textContent = this.t('delete');
      }
    });
  }

  showFormError(errorDiv, message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  showError(message) {
    console.error(message);
    // Could add a toast notification here
  }

  setModalBackHandler(onCloseBack = null) {
    this._activeModalBackHandler = typeof onCloseBack === 'function' ? onCloseBack : null;
  }

  showEventModal(event, onCloseBack = null) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    let startDate, endDate, isAllDay;

    if (event.start.dateTime) {
      startDate = new Date(event.start.dateTime);
      endDate = new Date(event.end.dateTime);
      isAllDay = false;
    } else if (event.start.date) {
      // For all-day events, add T00:00:00 to prevent timezone shifts
      startDate = this.parseLocalDate(event.start.date);
      endDate = this.parseLocalDate(event.end.date);

      // End date is exclusive for all-day events, so subtract 1 day for display
      endDate.setDate(endDate.getDate() - 1);
      isAllDay = true;
    } else {
      startDate = new Date(event.start);
      endDate = new Date(event.end);
      isAllDay = !event.start.includes('T');
      // If it's an all-day event in string format, adjust end date
      if (isAllDay && event.end) {
        endDate.setDate(endDate.getDate() - 1);
      }
    }

    // Get calendar info and capabilities
    const calendarName = this.getCalendarName(event.entityId);
    const capabilities = this._calendarCapabilities[event.entityId] || {};
    const visibleBadges = this.getVisibleCalendarBadgesForEvent(event);
    const combinedBadgeHtml = event.isCombinedCalendarEvent
      ? `<div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;">${visibleBadges.map(calendar => `<span class="modal-calendar-badge" style="background: ${calendar.color}; color: white; display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 12px;">${this.escapeHtml(this.getCalendarName(calendar.entityId))}</span>`).join('')}</div>`
      : `<div class="modal-calendar-badge" style="background: ${event.color}; color: white; display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-top: 8px;">${this.escapeHtml(calendarName)}</div>`;

    // For edit/delete to work, we need:
    // 1. Event management enabled
    // 2. Calendar not read-only
    // 3. Event has a UID (required for modifications)
    const hasUID = event.uid !== undefined && event.uid !== null && event.uid !== '';
    const canModify = this._config.enable_event_management &&
                     !capabilities.isReadonly &&
                     hasUID;

    // WebSocket delete works for Google Calendar and other integrations
    const canEdit = canModify;
    const canDelete = canModify; // WebSocket delete works for all calendars including Google

    content.innerHTML = `
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</h3>
          ${combinedBadgeHtml}
        </div>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="modal-row">
          <div class="modal-label">📅 ${this.t('start')}</div>
          <div class="modal-value">
            ${this.formatDate(startDate)}${!isAllDay ? ` ${this.t('at')} ${this.formatTime(startDate)}` : ` (${this.t('allDay')})`}
          </div>
        </div>
        <div class="modal-row">
          <div class="modal-label">🏁 ${this.t('end')}</div>
          <div class="modal-value">
            ${this.formatDate(endDate)}${!isAllDay ? ` ${this.t('at')} ${this.formatTime(endDate)}` : ` (${this.t('allDay')})`}
          </div>
        </div>
        ${!isAllDay ? `
          <div class="modal-row">
            <div class="modal-label">⏱️ ${this.t('duration')}</div>
            <div class="modal-value">${this.formatDuration(startDate, endDate)}</div>
          </div>
        ` : ''}
        ${event.location ? `
          <div class="modal-row">
            <div class="modal-label">📍 ${this.t('location')}</div>
            <div class="modal-value">${this.escapeHtml(event.location)}</div>
          </div>
        ` : ''}
        ${event.description ? `
          <div class="modal-row">
            <div class="modal-label">📝 ${this.t('description')}</div>
            <div class="modal-value" style="white-space: pre-wrap;">${this.escapeHtml(event.description)}</div>
          </div>
        ` : ''}
        ${event.attendees && event.attendees.length > 0 ? `
          <div class="modal-row">
            <div class="modal-label">👥 ${this.t('attendees')}</div>
            <div class="modal-value">
              ${event.attendees.map(a => this.escapeHtml(a.email || a.displayName || this.t('unknownAttendee'))).join(', ')}
            </div>
          </div>
        ` : ''}
        ${event.rrule ? `
          <div class="modal-row">
            <div class="modal-label">🔁 ${this.t('recurrence')}</div>
            <div class="modal-value">${this.t('recurringEvent')}</div>
          </div>
        ` : ''}

        ${!canModify && !capabilities.isReadonly && capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${this.t('googleCalendarLimitationTitle')}</strong> ${this.t('googleCalendarLimitationBody')}
          </div>
        ` : ''}

        ${!canModify && !hasUID && !capabilities.isGoogleCalendar ? `
          <div class="info-banner warning">
            <strong>${this.t('cannotModifyTitle')}</strong> ${this.t('cannotModifyBody')}
          </div>
        ` : ''}

        ${(canEdit || canDelete) ? `
          <div class="modal-actions">
            <div class="modal-actions-left">
              ${canDelete ? `<button class="btn btn-danger" id="delete-event-btn">${this.t('delete')}</button>` : ''}
            </div>
            <div class="modal-actions-right">
              ${canEdit ? `<button class="btn btn-primary" id="edit-event-btn">${this.t('editEvent')}</button>` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    modal.classList.add('show');
    this.setModalBackHandler(onCloseBack);

    // Close button
    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      if (this._activeModalBackHandler) {
        const backHandler = this._activeModalBackHandler;
        this._activeModalBackHandler = null;
        backHandler();
      } else {
        modal.classList.remove('show');
      }
    });

    // Edit button
    this.getRootElementById('edit-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedEditSelectionModal(event, startDate, endDate, isAllDay);
        return;
      }
      this.showEditConfirmation(event, startDate, endDate, isAllDay);
    });

    // Delete button
    this.getRootElementById('delete-event-btn')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
      if (event.isCombinedCalendarEvent && Array.isArray(event.sourceEvents) && event.sourceEvents.length > 1) {
        this.showCombinedDeleteSelectionModal(event);
        return;
      }
      this.showDeleteConfirmation(event);
    });
  }

  showDayCompactModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        <div class="week-compact-container single-day-modal">
          <div class="week-day-column">
            <div class="week-day-header">
              <div class="week-day-name">${this.getWeekdayNames('short')[date.getDay()]}</div>
              <div class="week-day-date">${date.getDate()}</div>
            </div>
            ${sortedEvents.length > 0 ? sortedEvents.map(event => {
              const daySegment = this.getEventDaySegment(event, date);
              if (!daySegment) return '';
              const { segmentStart, isAllDaySegment } = daySegment;
              const timeLabel = isAllDaySegment ? this.t('allDay') : this.formatTime(segmentStart);
              return `
                <div class="week-compact-event" style="background: ${event.color}; --event-bubble-font-size: ${this.getEventBubbleFontSize()}; --event-time-font-size: ${this.getEventTimeFontSize()}; --event-location-font-size: ${this.getEventLocationFontSize()}; --event-bubble-text-color: ${this.getEventBubbleFontColor(event)};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
                  <div class="week-compact-event-time">${timeLabel}</div>
                  <div class="week-compact-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
                  ${this.shouldShowEventLocation(event) ? `<div class="week-compact-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
                </div>
              `;
            }).join('') : `<div class="empty-state-subtext">${this.t('noEvents')}</div>`}
          </div>
        </div>
      </div>
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
    });

    this._root.querySelectorAll('.week-compact-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData, () => this.showDayCompactModal(date, events));
      });
    });
  }

  showDayModal(date, events) {
    const modal = this.getRootElementById('event-modal');
    const content = this.getRootElementById('modal-content');

    const sortedEvents = this.sortEventsForDate(events, date);

    content.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">${this.formatDate(date)}</h3>
        <button class="modal-close" id="close-modal">×</button>
      </div>
      <div class="modal-body">
        ${sortedEvents.map(event => {
          const daySegment = this.getEventDaySegment(event, date);
          if (!daySegment) return '';

          const { segmentStart, segmentEnd, isAllDaySegment } = daySegment;

          return `
            <div class="day-event day-modal-event" style="background: ${this.colorWithAlpha(event.color, 0.08)}; border-left: 4px solid ${event.color};" data-event='${JSON.stringify(event).replace(/'/g, "&#39;")}'>
              <div class="day-modal-event-title">${this.escapeHtml(event.summary || this.t('untitledEvent'))}</div>
              <div class="day-modal-event-meta">
                ${isAllDaySegment ? this.t('allDay') : `${this.formatTime(segmentStart)} - ${this.formatTime(segmentEnd)}`}
              </div>
              ${event.location ? `<div class="day-modal-event-location">📍 ${this.escapeHtml(event.location)}</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    modal.classList.add('show');
    this._activeModalBackHandler = null;

    this.getRootElementById('close-modal')?.addEventListener('click', () => {
      this._activeModalBackHandler = null;
      modal.classList.remove('show');
    });

    this._root.querySelectorAll('.day-event').forEach(el => {
      el.addEventListener('click', () => {
        const eventData = JSON.parse(el.getAttribute('data-event'));
        this.showEventModal(eventData);
      });
    });
  }

  getMonthName(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'long' });
    return formatter.format(new Date(2020, month, 1));
  }

  getMonthNameShort(month) {
    const formatter = new Intl.DateTimeFormat(this.getLocale(), { month: 'short' });
    return formatter.format(new Date(2020, month, 1));
  }

  formatTime(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { hour: 'numeric', minute: '2-digit' }).format(date);
  }

  formatDate(date) {
    return new Intl.DateTimeFormat(this.getLocale(), { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(date);
  }

  formatDuration(startDate, endDate) {
    const diffMs = endDate - startDate;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;

    const parts = [];
    if (hours > 0) {
      parts.push(this.t(hours === 1 ? 'durationHour' : 'durationHours', { count: hours }));
    }
    if (minutes > 0) {
      parts.push(this.t(minutes === 1 ? 'durationMinute' : 'durationMinutes', { count: minutes }));
    }
    if (parts.length === 0) {
      return this.t('durationMinutes', { count: 0 });
    }
    return parts.join(' ');
  }

  getCalendarName(entityId) {
    // Check if there's a custom name mapping
    if (this._config.calendar_names && this._config.calendar_names[entityId]) {
      return this._config.calendar_names[entityId];
    }

    // Otherwise use friendly_name from entity or entity ID
    const entity = this._hass?.states[entityId];
    return entity?.attributes?.friendly_name || entityId.split('.')[1];
  }

  getCalendarBadgeIcon(entityId) {
    const configured = this._config.calendar_badge_icons?.[entityId];
    if (!configured) return null;
    return String(configured).trim() || null;
  }

  renderCalendarBadgeIcon(entityId, name, color, isHidden) {
    const configuredBadgeIcon = this.getCalendarBadgeIcon(entityId);
    const iconBackground = isHidden ? '#9ca3af' : this.normalizeSingleColor(color);

    if (configuredBadgeIcon && configuredBadgeIcon.startsWith('mdi:')) {
      return `<div class="calendar-badge-icon" style="background: ${iconBackground}"><ha-icon icon="${this.escapeHtml(configuredBadgeIcon)}"></ha-icon></div>`;
    }

    if (configuredBadgeIcon) {
      const normalizedUrl = this.normalizeBackgroundImageUrl(configuredBadgeIcon) || configuredBadgeIcon;
      return `<div class="calendar-badge-icon calendar-badge-photo" style="background: ${iconBackground}"><img src="${this.escapeHtml(normalizedUrl)}" alt="${this.escapeHtml(name)}" loading="lazy"></div>`;
    }

    const initial = name.charAt(0).toUpperCase();
    return `<div class="calendar-badge-icon" style="background: ${iconBackground}">${this.escapeHtml(initial)}</div>`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  normalizeBackgroundImageUrl(url) {
    if (!url) return null;

    const value = String(url).trim();
    if (!value) return null;

    const mediaSourcePrefix = 'media-source://media_source/local/';
    if (value.startsWith(mediaSourcePrefix)) {
      const localPath = value.slice(mediaSourcePrefix.length);
      return `/media/local/${localPath}`;
    }

    return value;
  }

  static getStubConfig() {
    return {
      title: 'Family Calendar',
      entities: ['calendar.personal'],
      default_view: 'month',
      first_day_of_week: 0,
      week_days: [0, 1, 2, 3, 4, 5, 6],
      week_start_hour: 0,
      week_end_hour: 23,
      lock_schedule_hours: false,
      show_all_events_month: false,
      compact_width: false,
      show_current_time_bar: false,
      show_event_location: false,
      event_location_font_size: 9,
      event_calendar_friendly_name: false,
      combine_style: 'bars',
      combine_background: 'primary',
      hide_calendars: false,
      hide_controls: false,
      hide_dark_mode_toggle: false,
      color_scheme: 'auto',
      enable_event_management: true
    };
  }

  getCardSize() {
    return 6;
  }

  static async getConfigElement() {
    return document.createElement('skylight-calendar-card-editor');
  }
}

class SkylightCalendarCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = SkylightCalendarCard.getStubConfig();
    this._hass = null;
    this._rendered = false;
    this._lastCalendarEntitiesKey = '';
    this._colorPickerState = {
      open: false,
      field: null,
      mapKey: null,
      h: 0,
      s: 1,
      v: 1,
      color: '#3f51b5'
    };
    this._combineBackgroundMode = 'primary';
    this._combineBackgroundHexDraft = '';
    this._openDisclosureKeys = new Set();
  }

  normalizeHexColor(colorValue) {
    const normalizedColor = String(colorValue || '').trim();
    if (!normalizedColor) return null;

    const hex3Match = normalizedColor.match(/^#([\da-fA-F]{3})$/);
    if (hex3Match) {
      const [r, g, b] = hex3Match[1].split('');
      return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
    }

    const hex6Match = normalizedColor.match(/^#([\da-fA-F]{6})$/);
    if (hex6Match) {
      return `#${hex6Match[1].toUpperCase()}`;
    }

    return null;
  }

  syncCombineBackgroundEditorState(backgroundValue) {
    const rawValue = String(backgroundValue || '').trim();
    const normalizedLower = rawValue.toLowerCase();
    if (normalizedLower === 'neutral' || normalizedLower === 'primary') {
      this._combineBackgroundMode = normalizedLower;
      this._combineBackgroundHexDraft = '';
      return;
    }

    const normalizedHex = this.normalizeHexColor(rawValue);
    if (normalizedHex) {
      this._combineBackgroundMode = 'hex';
      this._combineBackgroundHexDraft = normalizedHex;
      return;
    }

    this._combineBackgroundMode = 'primary';
    this._combineBackgroundHexDraft = '';
  }

  setConfig(config) {
    const previousEntities = Array.isArray(this._config?.entities) ? this._config.entities : [];
    const normalizedDefaultView = config.default_view === 'week'
      ? 'week-compact'
      : config.default_view === 'schedule'
        ? 'week-standard'
        : config.default_view;

    this._config = {
      ...SkylightCalendarCard.getStubConfig(),
      ...config,
      default_view: normalizedDefaultView || (SkylightCalendarCard.getStubConfig().default_view || 'month'),
      color_scheme: SkylightCalendarCard.prototype.normalizeDefaultDarkMode(config.color_scheme)
    };
    this.syncCombineBackgroundEditorState(this._config.combine_background);

    if (!this._rendered) {
      this.render();
      return;
    }

    const nextEntities = Array.isArray(this._config.entities) ? this._config.entities : [];
    const entitiesChanged = previousEntities.join('|') !== nextEntities.join('|');

    if (entitiesChanged) {
      this.render();
      return;
    }

    this.updateFieldValues();
  }

  set hass(hass) {
    this._hass = hass;

    if (!this._rendered) {
      this.render();
      return;
    }

    this.refreshCalendarEntities();
  }

  get value() {
    return this._config || SkylightCalendarCard.getStubConfig();
  }

  getCalendarEntities() {
    return Object.keys(this._hass?.states || {})
      .filter((entityId) => entityId.startsWith('calendar.'))
      .sort();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  normalizeDefaultViewForEditor(value) {
    if (value === 'week') return 'week-compact';
    if (value === 'schedule') return 'week-standard';
    return value || 'month';
  }

  getEventCalendarBubbleMode() {
    if (this._config.event_calendar_friendly_name) {
      return 'friendly_name';
    }

    if (this._config.hide_event_calendar_bubble) {
      return 'none';
    }

    return 'icon';
  }

  getMapFieldValue(key) {
    const value = this._config[key];
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  getListFieldValue(key) {
    const value = this._config[key];
    return Array.isArray(value) ? value : [];
  }

  getListInputValue(key) {
    return this.getListFieldValue(key).join(', ');
  }


  getEditorDefaultValue(key) {
    const defaults = {
      week_start_hour: 0,
      week_end_hour: 23,
      lock_schedule_hours: false,
      height_scale: 1,
      event_font_size: 11,
      event_time_font_size: 9,
      event_location_font_size: 9,
      combine_calendars_width: 18,
      max_events: 0,
      first_day_of_week: 0
    };
    return Object.prototype.hasOwnProperty.call(defaults, key) ? defaults[key] : 0;
  }

  getConfiguredEntitiesForEditor() {
    const entities = Array.isArray(this._config.entities) ? this._config.entities : [];
    return entities.filter((entityId) => typeof entityId === 'string' && entityId.startsWith('calendar.'));
  }

  getEntityFriendlyName(entityId) {
    return this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
  }

  toColorInputValue(value, fallback = '#3f51b5') {
    const normalized = String(value || '').trim();
    if (/^#[0-9a-fA-F]{6}$/.test(normalized)) {
      return normalized;
    }
    return fallback;
  }

  hexToHsv(hex) {
    const normalizedHex = this.toColorInputValue(hex).replace('#', '');
    const r = parseInt(normalizedHex.slice(0, 2), 16) / 255;
    const g = parseInt(normalizedHex.slice(2, 4), 16) / 255;
    const b = parseInt(normalizedHex.slice(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
      if (max === r) h = ((g - b) / delta) % 6;
      else if (max === g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }

    const s = max === 0 ? 0 : delta / max;
    const v = max;
    return { h, s, v };
  }

  hsvToHex(h, s, v) {
    const hue = ((h % 360) + 360) % 360;
    const sat = Math.max(0, Math.min(1, s));
    const val = Math.max(0, Math.min(1, v));

    const c = val * sat;
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = val - c;

    let r = 0;
    let g = 0;
    let b = 0;

    if (hue < 60) [r, g, b] = [c, x, 0];
    else if (hue < 120) [r, g, b] = [x, c, 0];
    else if (hue < 180) [r, g, b] = [0, c, x];
    else if (hue < 240) [r, g, b] = [0, x, c];
    else if (hue < 300) [r, g, b] = [x, 0, c];
    else [r, g, b] = [c, 0, x];

    const toHex = (n) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  getColorValue(field, mapKey = null) {
    if (mapKey) {
      return this.toColorInputValue(this.getMapFieldValue(field)[mapKey]);
    }
    return this.toColorInputValue(this._config[field]);
  }

  emitConfigChanged(nextConfig) {
    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }

  openColorPicker(field, mapKey = null) {
    const initialColor = this.getColorValue(field, mapKey);
    const hsv = this.hexToHsv(initialColor);
    this._colorPickerState = {
      open: true,
      field,
      mapKey,
      h: hsv.h,
      s: hsv.s,
      v: hsv.v,
      color: initialColor
    };

    const dialog = this.querySelector('.color-picker-dialog');
    if (dialog) {
      dialog.classList.add('show');
      this.syncColorPickerUi();
    }
  }

  closeColorPicker() {
    this._colorPickerState.open = false;
    const dialog = this.querySelector('.color-picker-dialog');
    if (dialog) dialog.classList.remove('show');
  }

  syncColorPickerUi() {
    const dialog = this.querySelector('.color-picker-dialog');
    if (!dialog) return;

    const { h, s, v, color } = this._colorPickerState;
    const marker = dialog.querySelector('.color-picker-wheel-marker');
    const brightnessInput = dialog.querySelector('#color-picker-brightness');
    const hexInput = dialog.querySelector('#color-picker-hex');
    const preview = dialog.querySelector('.color-picker-preview');
    const valueText = dialog.querySelector('.color-picker-value');

    if (marker) {
      const radius = 120;
      const angle = ((h - 90) * Math.PI) / 180;
      const markerRadius = s * radius;
      const x = Math.cos(angle) * markerRadius;
      const y = Math.sin(angle) * markerRadius;
      marker.style.left = `calc(50% + ${x}px)`;
      marker.style.top = `calc(50% + ${y}px)`;
    }

    if (brightnessInput) brightnessInput.value = String(Math.round(v * 100));
    if (hexInput && document.activeElement !== hexInput) hexInput.value = color;
    if (preview) preview.style.background = color;
    if (valueText) valueText.textContent = color;
  }

  updateColorPickerFromWheelEvent(event) {
    const wheel = event.currentTarget;
    const rect = wheel.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const radius = rect.width / 2;
    const distance = Math.min(Math.sqrt(x * x + y * y), radius);
    const saturation = distance / radius;
    const hue = (Math.atan2(y, x) * 180) / Math.PI + 90;

    this._colorPickerState.h = hue < 0 ? hue + 360 : hue;
    this._colorPickerState.s = saturation;
    this._colorPickerState.color = this.hsvToHex(this._colorPickerState.h, this._colorPickerState.s, this._colorPickerState.v);
    this.syncColorPickerUi();
  }

  applyColorPickerColor(hexColor) {
    const { field, mapKey } = this._colorPickerState;
    if (!field) return;

    const nextConfig = { ...this.value };
    if (mapKey) {
      nextConfig[field] = {
        ...this.getMapFieldValue(field),
        [mapKey]: hexColor
      };
    } else {
      nextConfig[field] = hexColor;
    }

    this.emitConfigChanged(nextConfig);
    this.updateFieldValues();
    this.closeColorPicker();
  }

  normalizeHexColorInput(value) {
    const raw = String(value || '').trim();
    if (!raw) return null;
    const withHash = raw.startsWith('#') ? raw : `#${raw}`;
    return /^#[0-9a-fA-F]{6}$/.test(withHash) ? withHash.toLowerCase() : null;
  }

  renderColorPickerDialog() {
    return `
      <div class="color-picker-dialog">
        <div class="color-picker-overlay" data-close-color-picker="true"></div>
        <div class="color-picker-modal" role="dialog" aria-label="Select color">
          <div class="color-picker-title">Select color</div>
          <div class="color-picker-wheel" id="color-picker-wheel">
            <div class="color-picker-wheel-marker"></div>
          </div>
          <div class="color-picker-controls">
            <label for="color-picker-brightness">Color brightness</label>
            <input id="color-picker-brightness" type="range" min="5" max="100" step="1">
          </div>
          <div class="color-picker-controls">
            <label for="color-picker-hex">Hex color</label>
            <input id="color-picker-hex" type="text" placeholder="#3f51b5">
          </div>
          <div class="color-picker-presets">
            ${['#ffffff', '#ff0000', '#ffff00', '#00ff00', '#000000', '#00ffff', '#0000ff', '#ff00ff']
              .map((color) => `<button type="button" class="color-preset" data-color-preset="${color}" style="background:${color}"></button>`)
              .join('')}
          </div>
          <div class="color-picker-selected-row">
            <span>Chosen color</span>
            <span class="color-picker-preview"></span>
            <span class="color-picker-value"></span>
          </div>
          <div class="color-picker-actions">
            <button type="button" data-close-color-picker="true">Cancel</button>
            <button type="button" class="primary" id="apply-color-picker">Set</button>
          </div>
        </div>
      </div>
    `;
  }

  renderColorInputControl({ id, field, mapKey = null, value }) {
    const colorValue = this.toColorInputValue(value);
    const triggerAttributes = mapKey
      ? `data-color-trigger="true" data-color-field="${field}" data-color-map-key="${mapKey}"`
      : `data-color-trigger="true" data-color-field="${field}"`;

    return `
      <div class="color-picker-wrap">
        <button id="${id}" class="selected-color-swatch" data-color-field="${field}" ${mapKey ? `data-color-map-key="${mapKey}"` : ''} ${triggerAttributes} style="--selected-color: ${colorValue};" title="Choose color" type="button"></button>
      </div>
    `;
  }

  renderMapRowInputs(mapKey, { label, inputType = 'text', placeholder = '' } = {}) {
    const mapValue = this.getMapFieldValue(mapKey);
    const entities = this.getConfiguredEntitiesForEditor();

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || mapKey}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const value = mapValue[entityId] || '';
        if (inputType === 'color') {
          return `
            <div class="map-row">
              <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
              ${this.renderColorInputControl({ id: `${mapKey}-${entityId}`, field: mapKey, mapKey: entityId, value })}
            </div>
          `;
        }

        return `
          <div class="map-row">
            <label class="map-label" for="${mapKey}-${entityId}">${displayName}</label>
            <input id="${mapKey}-${entityId}" type="text" data-map-field="${mapKey}" data-map-key="${entityId}" value="${this.escapeHtml(value)}" placeholder="${placeholder}">
          </div>
        `;
      })
      .join('');
  }

  renderCalendarListCheckboxes(field, { label }) {
    const entities = this.getConfiguredEntitiesForEditor();
    const selectedValues = new Set(this.getListFieldValue(field));

    if (!entities.length) {
      return `<p class="helper">Select at least one calendar to configure ${label || field}.</p>`;
    }

    return entities
      .map((entityId) => {
        const displayName = this.escapeHtml(this.getEntityFriendlyName(entityId));
        const checked = selectedValues.has(entityId) ? 'checked' : '';
        return `
          <label class="list-checkbox-row">
            <span>${displayName}</span>
            <input type="checkbox" data-list-field="${field}" value="${entityId}" ${checked}>
          </label>
        `;
      })
      .join('');
  }

  buildDisclosureKey(scope, title) {
    return `${scope}:${title}`;
  }

  captureOpenDisclosures() {
    const openKeys = new Set();
    this.querySelectorAll('details[data-disclosure-key][open]').forEach((detail) => {
      const key = detail.dataset.disclosureKey;
      if (key) openKeys.add(key);
    });
    this._openDisclosureKeys = openKeys;
  }

  renderSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('section', title);
    const openAttr = this._openDisclosureKeys.has(disclosureKey) ? 'open' : '';
    return `
      <details class="config-section" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="section-content">${content}</div>
      </details>
    `;
  }

  renderSubSection(title, content) {
    const disclosureKey = this.buildDisclosureKey('subsection', title);
    const openAttr = this._openDisclosureKeys.has(disclosureKey) ? 'open' : '';
    return `
      <details class="config-subsection" data-disclosure-key="${disclosureKey}" ${openAttr}>
        <summary>${title}</summary>
        <div class="subsection-content">${content}</div>
      </details>
    `;
  }

  renderWeekdayCheckboxes() {
    const selectedWeekdays = new Set(this.getListFieldValue('week_days'));
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return `
      <div class="weekday-grid" role="group" aria-label="Week days">
        ${days.map((day) => `<span class="weekday-label">${day}</span>`).join('')}
        ${days.map((_, index) => `
          <label class="weekday-checkbox-wrap" aria-label="${days[index]}">
            <input type="checkbox" data-weekday="${index}" ${selectedWeekdays.has(index) ? 'checked' : ''}>
          </label>
        `).join('')}
      </div>
    `;
  }

  render() {
    this.captureOpenDisclosures();

    const displayLayoutSection = this.renderSection('Display & layout', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="first_day_of_week">First day of week</label>
          <select id="first_day_of_week" data-field="first_day_of_week" data-type="number">
            <option value="0" ${Number(this._config.first_day_of_week) === 0 ? 'selected' : ''}>Sunday</option>
            <option value="1" ${Number(this._config.first_day_of_week) === 1 ? 'selected' : ''}>Monday</option>
            <option value="2" ${Number(this._config.first_day_of_week) === 2 ? 'selected' : ''}>Tuesday</option>
            <option value="3" ${Number(this._config.first_day_of_week) === 3 ? 'selected' : ''}>Wednesday</option>
            <option value="4" ${Number(this._config.first_day_of_week) === 4 ? 'selected' : ''}>Thursday</option>
            <option value="5" ${Number(this._config.first_day_of_week) === 5 ? 'selected' : ''}>Friday</option>
            <option value="6" ${Number(this._config.first_day_of_week) === 6 ? 'selected' : ''}>Saturday</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>Week days</label>
        ${this.renderWeekdayCheckboxes()}
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_start_hour">Week start hour</label>
          <input id="week_start_hour" data-field="week_start_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_start_hour ?? this.getEditorDefaultValue('week_start_hour'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="week_end_hour">Week end hour</label>
          <input id="week_end_hour" data-field="week_end_hour" data-type="number" type="number" min="0" max="23" value="${Number(this._config.week_end_hour ?? this.getEditorDefaultValue('week_end_hour'))}">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="lock_schedule_hours" ${this._config.lock_schedule_hours ? 'checked' : ''}> Schedule view: lock week start/end hours</label>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_week_compact">Rolling days (week view)</label>
          <input id="rolling_days_week_compact" data-field="rolling_days_week_compact" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_week_compact ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_days_schedule">Rolling days (schedule view)</label>
          <input id="rolling_days_schedule" data-field="rolling_days_schedule" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_days_schedule ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="rolling_weeks">Rolling weeks (month view)</label>
          <input id="rolling_weeks" data-field="rolling_weeks" data-type="nullable-number" type="number" min="1" value="${this._config.rolling_weeks ?? ''}" placeholder="Disabled">
        </div>
      </div>
      <div class="boolean-list">
        <label><input type="checkbox" data-field="compact_height" ${this._config.compact_height ? 'checked' : ''}> Compact height</label>
        <label><input type="checkbox" data-field="compact_width" ${this._config.compact_width ? 'checked' : ''}> Schedule view: compact width columns</label>
        <label><input type="checkbox" data-field="show_all_events_month" ${this._config.show_all_events_month ? 'checked' : ''}> Month view: show all events (override compact height)</label>
        <label><input type="checkbox" data-field="compact_header" ${this._config.compact_header ? 'checked' : ''}> Compact header</label>
        <label><input type="checkbox" data-field="hide_calendars" ${this._config.hide_calendars ? 'checked' : ''}> Hide calendar badges</label>
        <label><input type="checkbox" data-field="hide_controls" ${this._config.hide_controls ? 'checked' : ''}> Hide header controls</label>
      </div>
      ${this._config.compact_height ? '' : `
        <div class="field">
          <label for="height_scale">Height scale</label>
          <input id="height_scale" data-field="height_scale" data-type="number" type="number" min="0.1" step="0.1" value="${Number(this._config.height_scale ?? this.getEditorDefaultValue('height_scale'))}">
        </div>
      `}
    `);

    const colorStylingSection = this.renderSection('Colors & styling', `
      <div class="field">
        <label for="header_color">Header color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_color', field: 'header_color', value: this._config.header_color })}
          <input data-field="header_color_text" data-type="color-text" type="text" value="${this.escapeHtml(this._config.header_color || '')}" placeholder="var(--primary-color)">
        </div>
      </div>
      <div class="field">
        <label for="header_text_color">Header text color</label>
        <div class="field-row">
          ${this.renderColorInputControl({ id: 'header_text_color', field: 'header_text_color', value: this._config.header_text_color })}
          <input data-field="header_text_color_text" data-type="header-text-color-text" type="text" value="${this.escapeHtml(this._config.header_text_color || '')}" placeholder="Auto contrast">
        </div>
      </div>
      ${this.renderSubSection('Calendar colors', `<div class="map-grid">${this.renderMapRowInputs('colors', { label: 'calendar colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Event font colors', `<div class="map-grid">${this.renderMapRowInputs('event_font_colors', { label: 'event font colors', inputType: 'color' })}</div>`)}
      ${this.renderSubSection('Calendar display names', `<div class="map-grid">${this.renderMapRowInputs('calendar_names', { label: 'calendar names', placeholder: 'Display name' })}</div>`)}
      ${this.renderSubSection('Calendar badge icons', `<div class="map-grid">${this.renderMapRowInputs('calendar_badge_icons', { label: 'badge icons', placeholder: 'mdi:icon or URL' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="background_transparent" ${this._config.background_transparent ? 'checked' : ''}> Transparent background surfaces</label>
        <label><input type="checkbox" data-field="hide_dark_mode_toggle" ${this._config.hide_dark_mode_toggle ? 'checked' : ''}> Hide dark mode toggle</label>
      </div>
      <div class="field">
        <label for="color_scheme">Color scheme</label>
        <select id="color_scheme" data-field="color_scheme">
          <option value="auto">Auto (browser/app)</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    `);

    const backgroundSection = this.renderSection('Background image', `
      <div class="field field-inline">
        <label for="background_image_url">Background image URL</label>
        <input id="background_image_url" data-field="background_image_url" type="text" value="${this._config.background_image_url || ''}" placeholder="https://... or /media/local/...">
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_size">Image size</label>
          <input id="background_image_size" data-field="background_image_size" type="text" value="${this._config.background_image_size || 'cover'}" placeholder="cover">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="background_image_position">Image position</label>
          <input id="background_image_position" data-field="background_image_position" type="text" value="${this._config.background_image_position || 'center'}" placeholder="center">
        </div>
      </div>
      <div class="field field-inline">
        <label for="background_image_repeat">Image repeat</label>
        <input id="background_image_repeat" data-field="background_image_repeat" type="text" value="${this._config.background_image_repeat || 'no-repeat'}" placeholder="no-repeat">
      </div>
    `);

    const eventSection = this.renderSection('Events & schedule', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="max_events">Max events (0 = unlimited)</label>
          <input id="max_events" data-field="max_events" data-type="number" type="number" min="0" value="${Number(this._config.max_events ?? this._config.maxEvents ?? this.getEditorDefaultValue('max_events'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_font_size">Event font size</label>
          <input id="event_font_size" data-field="event_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_font_size ?? this.getEditorDefaultValue('event_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_time_font_size">Event time font size</label>
          <input id="event_time_font_size" data-field="event_time_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_time_font_size ?? this.getEditorDefaultValue('event_time_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_location_font_size">Event location font size</label>
          <input id="event_location_font_size" data-field="event_location_font_size" data-type="number" type="number" min="8" max="32" value="${Number(this._config.event_location_font_size ?? this.getEditorDefaultValue('event_location_font_size'))}">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="event_calendar_bubble_mode">Event calendar bubble</label>
          <select id="event_calendar_bubble_mode" data-field="event_calendar_bubble_mode">
            <option value="icon" ${this.getEventCalendarBubbleMode() === 'icon' ? 'selected' : ''}>Icon</option>
            <option value="friendly_name" ${this.getEventCalendarBubbleMode() === 'friendly_name' ? 'selected' : ''}>Friendly Name</option>
            <option value="none" ${this.getEventCalendarBubbleMode() === 'none' ? 'selected' : ''}>None</option>
          </select>
        </div>
      </div>
      ${this.renderSubSection('Hide times for calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('hide_times_for_calendars', { label: 'hidden times calendars' })}</div>`)}
      <div class="boolean-list">
        <label><input type="checkbox" data-field="show_current_time_bar" ${this._config.show_current_time_bar ? 'checked' : ''}> Show current time bar</label>
        <label><input type="checkbox" data-field="use_24hr_schedule" ${this._config.use_24hr_schedule ? 'checked' : ''}> Use 24-hour schedule time</label>
        <label><input type="checkbox" data-field="show_event_location" ${this._config.show_event_location ? 'checked' : ''}> Show event location</label>
        <label><input type="checkbox" data-field="combine_calendars" ${this._config.combine_calendars ? 'checked' : ''}> Combine duplicate events across calendars</label>
      </div>
      ${this._config.combine_calendars ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_style">Combined indicator style</label>
          <select id="combine_style" data-field="combine_style">
            <option value="stripes" ${this._config.combine_style === 'stripes' ? 'selected' : ''}>Stripes</option>
            <option value="bars" ${this._config.combine_style === 'bars' || !this._config.combine_style ? 'selected' : ''}>Bars</option>
            <option value="dots" ${this._config.combine_style === 'dots' ? 'selected' : ''}>Dots</option>
          </select>
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_mode">Combined background</label>
          <select id="combine_background_mode" data-field="combine_background_mode">
            <option value="neutral" ${this._combineBackgroundMode === 'neutral' ? 'selected' : ''}>Neutral</option>
            <option value="primary" ${this._combineBackgroundMode === 'primary' ? 'selected' : ''}>Primary</option>
            <option value="hex" ${this._combineBackgroundMode === 'hex' ? 'selected' : ''}>Hex</option>
          </select>
        </div>
      </div>
      ${this._combineBackgroundMode === 'hex' ? `
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_background_hex">Combined background hex value</label>
          <input id="combine_background_hex" data-field="combine_background_hex" type="text" value="${this.escapeHtml(this._combineBackgroundHexDraft || '#FFFFFF')}" placeholder="#RRGGBB">
        </div>
      </div>
      ` : ''}
      <div class="field-row">
        <div class="field field-inline">
          <label for="combine_calendars_width">Combined indicator width (px)</label>
          <input id="combine_calendars_width" data-field="combine_calendars_width" data-type="number" type="number" min="1" value="${Number(this._config.combine_calendars_width ?? this.getEditorDefaultValue('combine_calendars_width'))}">
        </div>
      </div>
      ` : ''}
    `);

    const managementSection = this.renderSection('Event management', `
      <div class="boolean-list">
        <label><input type="checkbox" data-field="enable_event_management" ${this._config.enable_event_management !== false ? 'checked' : ''}> Enable event management</label>
      </div>
      ${this.renderSubSection('Read-only calendars', `<div class="list-checkbox-grid">${this.renderCalendarListCheckboxes('readonly_calendars', { label: 'read-only calendars' })}</div>`)}
    `);

    const localeSection = this.renderSection('Localization & preferences', `
      <div class="field-row">
        <div class="field field-inline">
          <label for="language">Language code</label>
          <input id="language" data-field="language" type="text" value="${this._config.language || ''}" placeholder="en, fr, de...">
        </div>
      </div>
      <div class="field-row">
        <div class="field field-inline">
          <label for="locale">Locale override</label>
          <input id="locale" data-field="locale" type="text" value="${this._config.locale || ''}" placeholder="en-US">
        </div>
      </div>
      <div class="field field-inline">
        <label for="preference_storage_key">Preference storage key</label>
        <input id="preference_storage_key" data-field="preference_storage_key" type="text" value="${this._config.preference_storage_key || ''}" placeholder="Optional custom key">
      </div>
    `);

    this.innerHTML = `
      <style>
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 8px 0;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .field.field-inline {
          display: grid;
          grid-template-columns: minmax(180px, 260px) 1fr;
          align-items: center;
          gap: 8px;
        }

        .field-row {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .field label {
          font-weight: 500;
          color: var(--primary-text-color);
        }

        .field input,
        .field select,
        .field textarea {
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          font: inherit;
          color: var(--primary-text-color);
          background: var(--card-background-color);
        }

        .field textarea {
          min-height: 70px;
          resize: vertical;
        }

        .weekday-grid {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 6px;
          align-items: center;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .weekday-label {
          text-align: center;
          font-weight: 500;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }

        .weekday-checkbox-wrap {
          display: flex;
          justify-content: center;
        }

        .map-grid {
          display: grid;
          gap: 8px;
        }

        .map-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
        }

        .list-checkbox-grid {
          display: grid;
          gap: 8px;
        }

        .list-checkbox-row {
          display: grid;
          grid-template-columns: minmax(160px, 220px) 1fr;
          gap: 8px;
          align-items: center;
          font-weight: 400;
        }

        .list-checkbox-row input[type="checkbox"] {
          justify-self: end;
        }

        .color-picker-wrap {
          display: inline-flex;
          align-items: center;
        }

        .selected-color-swatch {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: 1px solid var(--divider-color);
          background: var(--selected-color);
          cursor: pointer;
          padding: 0;
          display: inline-block;
        }

        .color-picker-dialog {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 1000;
        }

        .color-picker-dialog.show {
          display: block;
        }

        .color-picker-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }

        .color-picker-modal {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: min(460px, calc(100vw - 24px));
          background: var(--card-background-color);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.25);
          display: grid;
          gap: 12px;
        }

        .color-picker-title {
          font-size: 1.8rem;
          font-weight: 600;
        }

        .color-picker-wheel {
          position: relative;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          margin: 0 auto;
          background:
            radial-gradient(circle at center, #ffffff 0%, rgba(255, 255, 255, 0.85) 16%, rgba(255, 255, 255, 0) 58%),
            conic-gradient(from 0deg, #ff0000, #ff7f00, #ffff00, #00ff00, #00ffff, #0000ff, #8b00ff, #ff00ff, #ff0000);
        }

        .color-picker-wheel-marker {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .color-picker-controls {
          display: grid;
          gap: 6px;
        }

        .color-picker-controls input[type="text"] {
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          font: inherit;
          color: var(--primary-text-color);
          background: var(--card-background-color);
        }

        .color-picker-presets {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .color-preset {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.08);
          cursor: pointer;
        }

        .color-picker-selected-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .color-picker-preview {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px solid var(--divider-color);
        }

        .color-picker-value {
          font-family: monospace;
        }

        .color-picker-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .color-picker-actions button {
          border: 1px solid var(--divider-color);
          background: var(--card-background-color);
          border-radius: 6px;
          padding: 8px 12px;
          cursor: pointer;
          color: var(--primary-text-color);
        }

        .color-picker-actions button.primary {
          background: var(--primary-color);
          color: white;
          border-color: transparent;
        }

        .map-label {
          font-weight: 500;
          color: var(--primary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .config-section {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: color-mix(in srgb, var(--card-background-color) 96%, var(--primary-text-color) 4%);
        }

        .config-section summary {
          cursor: pointer;
          padding: 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-section summary::before,
        .config-subsection summary::before {
          content: '›';
          font-size: 1.2rem;
          line-height: 1;
          transform: rotate(0deg);
          transition: transform 120ms ease;
          color: var(--secondary-text-color);
        }

        .config-section[open] > summary::before,
        .config-subsection[open] > summary::before {
          transform: rotate(90deg);
        }

        .config-section summary::-webkit-details-marker {
          display: none;
        }

        .section-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .config-subsection {
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: var(--card-background-color);
        }

        .config-subsection summary {
          cursor: pointer;
          padding: 8px 10px;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .config-subsection summary::-webkit-details-marker {
          display: none;
        }

        .subsection-content {
          border-top: 1px solid var(--divider-color);
          padding: 10px;
        }

        .entity-list,
        .boolean-list {
          display: grid;
          gap: 4px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          padding: 8px;
          background: var(--card-background-color);
        }

        .entity-list {
          max-height: 200px;
          overflow: auto;
        }

        .entity-list label,
        .boolean-list label {
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .helper {
          margin: 0;
          color: var(--secondary-text-color);
          font-size: 0.85rem;
        }
      </style>
      <div class="card-config">
        <div class="field field-inline">
          <label for="title">Title</label>
          <input id="title" data-field="title" type="text" value="${this._config.title || ''}" placeholder="Family Calendar">
        </div>

        <div class="field">
          <label for="default_view">Default view</label>
          <select id="default_view" data-field="default_view">
            <option value="month" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'month' ? 'selected' : ''}>Month</option>
            <option value="week-compact" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-compact' ? 'selected' : ''}>Week</option>
            <option value="week-standard" ${this.normalizeDefaultViewForEditor(this._config.default_view) === 'week-standard' ? 'selected' : ''}>Schedule</option>
          </select>
        </div>

        <div class="field">
          <label>Calendars</label>
          <div class="entity-list" id="entity-list"></div>
          <p class="helper">Select one or more calendar entities to display.</p>
        </div>

        ${displayLayoutSection}
        ${colorStylingSection}
        ${backgroundSection}
        ${eventSection}
        ${managementSection}
        ${localeSection}
      </div>
      ${this.renderColorPickerDialog()}
    `;

    this.refreshCalendarEntities();

    this.querySelectorAll('[data-field]').forEach((input) => {
      const eventName = input.type === 'text' ? 'input' : 'change';
      input.addEventListener(eventName, (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-list-field]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-weekday]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });

    this.querySelectorAll('[data-color-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => this.openColorPicker(trigger.dataset.colorField, trigger.dataset.colorMapKey || null));
    });

    const wheel = this.querySelector('#color-picker-wheel');
    if (wheel) {
      let dragging = false;
      wheel.addEventListener('pointerdown', (event) => {
        dragging = true;
        this.updateColorPickerFromWheelEvent(event);
      });
      wheel.addEventListener('pointermove', (event) => {
        if (dragging) this.updateColorPickerFromWheelEvent(event);
      });
      wheel.addEventListener('pointerup', () => { dragging = false; });
      wheel.addEventListener('pointerleave', () => { dragging = false; });
    }

    this.querySelectorAll('[data-color-preset]').forEach((preset) => {
      preset.addEventListener('click', () => {
        const hex = preset.dataset.colorPreset;
        const hsv = this.hexToHsv(hex);
        this._colorPickerState.h = hsv.h;
        this._colorPickerState.s = hsv.s;
        this._colorPickerState.v = hsv.v;
        this._colorPickerState.color = this.hsvToHex(hsv.h, hsv.s, hsv.v);
        this.syncColorPickerUi();
      });
    });

    this.querySelectorAll('[data-close-color-picker]').forEach((button) => {
      button.addEventListener('click', () => this.closeColorPicker());
    });

    const brightnessInput = this.querySelector('#color-picker-brightness');
    if (brightnessInput) {
      brightnessInput.addEventListener('input', (event) => {
        this._colorPickerState.v = Number(event.target.value) / 100;
        this._colorPickerState.color = this.hsvToHex(this._colorPickerState.h, this._colorPickerState.s, this._colorPickerState.v);
        this.syncColorPickerUi();
      });
    }

    const hexInput = this.querySelector('#color-picker-hex');
    if (hexInput) {
      const syncHexColor = () => {
        const normalizedHex = this.normalizeHexColorInput(hexInput.value);
        if (!normalizedHex) return;
        const hsv = this.hexToHsv(normalizedHex);
        this._colorPickerState.h = hsv.h;
        this._colorPickerState.s = hsv.s;
        this._colorPickerState.v = hsv.v;
        this._colorPickerState.color = normalizedHex;
        this.syncColorPickerUi();
      };
      hexInput.addEventListener('input', syncHexColor);
      hexInput.addEventListener('change', syncHexColor);
    }

    const applyBtn = this.querySelector('#apply-color-picker');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        this.applyColorPickerColor(this._colorPickerState.color);
      });
    }

    this._rendered = true;
  }

  refreshCalendarEntities() {
    const entityListContainer = this.querySelector('#entity-list');
    if (!entityListContainer) return;

    const calendarEntities = this.getCalendarEntities();
    const nextKey = calendarEntities.join('|');

    if (this._lastCalendarEntitiesKey === nextKey && entityListContainer.childElementCount > 0) {
      const selectedEntities = new Set(this._config.entities || []);
      entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((checkbox) => {
        checkbox.checked = selectedEntities.has(checkbox.value);
      });
      return;
    }

    this._lastCalendarEntitiesKey = nextKey;
    const selectedEntities = new Set(this._config.entities || []);

    if (calendarEntities.length === 0) {
      entityListContainer.innerHTML = '<p class="helper">No calendar entities found yet.</p>';
      return;
    }

    entityListContainer.innerHTML = calendarEntities
      .map((entityId) => {
        const friendlyName = this._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
        const checked = selectedEntities.has(entityId) ? 'checked' : '';
        return `<label><input type="checkbox" data-field="entity" value="${entityId}" ${checked}> ${friendlyName}</label>`;
      })
      .join('');

    entityListContainer.querySelectorAll('input[data-field="entity"]').forEach((input) => {
      input.addEventListener('change', (event) => this.handleChange(event));
    });
  }

  updateFieldValues() {
    const titleInput = this.querySelector('input[data-field="title"]');
    if (titleInput && document.activeElement !== titleInput) {
      titleInput.value = this._config.title || '';
    }

    const defaultView = this.querySelector('select[data-field="default_view"]');
    if (defaultView && document.activeElement !== defaultView) {
      defaultView.value = this.normalizeDefaultViewForEditor(this._config.default_view);
    }

    const firstDayOfWeek = this.querySelector('select[data-field="first_day_of_week"]');
    if (firstDayOfWeek && document.activeElement !== firstDayOfWeek) {
      firstDayOfWeek.value = String(Number(this._config.first_day_of_week ?? 0));
    }

    this.querySelectorAll('input[type="checkbox"][data-field]').forEach((checkbox) => {
      if (checkbox.dataset.field === 'enable_event_management') {
        checkbox.checked = this._config.enable_event_management !== false;
        return;
      }
      checkbox.checked = !!this._config[checkbox.dataset.field];
    });

    this.querySelectorAll('input[type="checkbox"][data-list-field]').forEach((checkbox) => {
      const listField = checkbox.dataset.listField;
      checkbox.checked = this.getListFieldValue(listField).includes(checkbox.value);
    });

    this.querySelectorAll('input[data-type="number"], input[data-type="nullable-number"], input[data-type="list"], input[data-field="language"], input[data-field="locale"], input[data-field="preference_storage_key"], input[data-field="background_image_url"], input[data-field="background_image_size"], input[data-field="background_image_position"], input[data-field="background_image_repeat"]').forEach((input) => {
      if (document.activeElement === input) return;
      const field = input.dataset.field;
      const type = input.dataset.type;
      if (type === 'list') input.value = this.getListInputValue(field);
      else if (type === 'nullable-number') input.value = this._config[field] ?? '';
      else if (type === 'number') input.value = Number(this._config[field] ?? this.getEditorDefaultValue(field));
      else input.value = this._config[field] || '';
    });

    this.querySelectorAll('input[type="checkbox"][data-weekday]').forEach((checkbox) => {
      const weekday = Number(checkbox.dataset.weekday);
      checkbox.checked = this.getListFieldValue('week_days').includes(weekday);
    });

    this.querySelectorAll('select[data-field]').forEach((select) => {
      if (document.activeElement === select) return;
      const field = select.dataset.field;
      if (field === 'default_view') return;
      if (field === 'first_day_of_week') return;
      if (field === 'event_calendar_bubble_mode') {
        select.value = this.getEventCalendarBubbleMode();
        return;
      }

      if (field === 'combine_background_mode') {
        select.value = this._combineBackgroundMode;
        return;
      }
      select.value = this._config[field] || '';
    });

    const combineBackgroundHexInput = this.querySelector('input[data-field="combine_background_hex"]');
    if (combineBackgroundHexInput && document.activeElement !== combineBackgroundHexInput) {
      combineBackgroundHexInput.value = this._combineBackgroundHexDraft || '#FFFFFF';
    }

    const headerColorTextInput = this.querySelector('input[data-field="header_color_text"]');
    if (headerColorTextInput && document.activeElement !== headerColorTextInput) {
      headerColorTextInput.value = this._config.header_color || '';
    }

    const headerTextColorTextInput = this.querySelector('input[data-field="header_text_color_text"]');
    if (headerTextColorTextInput && document.activeElement !== headerTextColorTextInput) {
      headerTextColorTextInput.value = this._config.header_text_color || '';
    }

    this.querySelectorAll('[data-map-field]').forEach((input) => {
      if (document.activeElement === input) return;
      const mapField = input.dataset.mapField;
      const mapKey = input.dataset.mapKey;
      const value = this.getMapFieldValue(mapField)[mapKey] || '';
      input.value = value;
    });

    this.querySelectorAll('.selected-color-swatch').forEach((swatch) => {
      const field = swatch.dataset.colorField;
      const mapKey = swatch.dataset.colorMapKey || null;
      const nextColor = this.getColorValue(field, mapKey);
      swatch.style.setProperty('--selected-color', nextColor);
    });

    this.refreshCalendarEntities();
  }

  parseList(value, { asNumbers = false } = {}) {
    const parsed = String(value || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    if (!asNumbers) return parsed;
    return parsed
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
  }

  handleChange(event) {
    const field = event.target.dataset.field;
    const nextConfig = { ...this.value };

    if (field === 'event_calendar_bubble_mode') {
      const selectedMode = event.target.value;
      if (selectedMode === 'friendly_name') {
        nextConfig.event_calendar_friendly_name = true;
        nextConfig.hide_event_calendar_bubble = false;
      } else if (selectedMode === 'none') {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = true;
      } else {
        nextConfig.event_calendar_friendly_name = false;
        nextConfig.hide_event_calendar_bubble = false;
      }

      this._config = nextConfig;
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_mode') {
      this._combineBackgroundMode = event.target.value;
      if (this._combineBackgroundMode === 'hex') {
        const currentHex = this.normalizeHexColor(this._config.combine_background) || this._combineBackgroundHexDraft || '#FFFFFF';
        this._combineBackgroundHexDraft = currentHex;
        nextConfig.combine_background = currentHex;
      } else {
        this._combineBackgroundHexDraft = '';
        nextConfig.combine_background = this._combineBackgroundMode;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'combine_background_hex') {
      const normalizedHex = this.normalizeHexColor(event.target.value);
      if (normalizedHex) {
        this._combineBackgroundHexDraft = normalizedHex;
        nextConfig.combine_background = normalizedHex;
      } else {
        this._combineBackgroundHexDraft = event.target.value;
      }

      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    if (field === 'entity') {
      const selected = Array.from(this.querySelectorAll('input[data-field="entity"]:checked')).map((input) => input.value);
      nextConfig.entities = selected;
      this._config = nextConfig;
      this.render();
      this.dispatchEvent(
        new CustomEvent('config-changed', {
          detail: { config: nextConfig },
          bubbles: true,
          composed: true
        })
      );
      return;
    } else if (event.target.dataset.mapField) {
      const mapField = event.target.dataset.mapField;
      const mapKey = event.target.dataset.mapKey;
      const mapValue = { ...this.getMapFieldValue(mapField) };
      const nextValue = event.target.value;
      if (nextValue === '') delete mapValue[mapKey];
      else mapValue[mapKey] = nextValue;
      nextConfig[mapField] = mapValue;
    } else if (event.target.dataset.listField) {
      const listField = event.target.dataset.listField;
      const checkedValues = Array.from(this.querySelectorAll(`input[data-list-field="${listField}"]:checked`)).map((input) => input.value);
      nextConfig[listField] = checkedValues;
    } else if (event.target.dataset.weekday !== undefined) {
      const selectedWeekdays = Array.from(this.querySelectorAll('input[data-weekday]:checked'))
        .map((input) => Number(input.dataset.weekday))
        .filter((value) => Number.isFinite(value))
        .sort((a, b) => a - b);
      nextConfig.week_days = selectedWeekdays;
    } else if (event.target.type === 'checkbox') {
      nextConfig[field] = event.target.checked;
      if (field === 'compact_height' || field === 'combine_calendars') {
        this._config = nextConfig;
        this.render();
        this.dispatchEvent(
          new CustomEvent('config-changed', {
            detail: { config: nextConfig },
            bubbles: true,
            composed: true
          })
        );
        return;
      }
    } else if (event.target.dataset.type === 'color') {
      nextConfig[field] = event.target.value;
    } else if (event.target.dataset.type === 'color-text') {
      nextConfig.header_color = event.target.value;
    } else if (event.target.dataset.type === 'header-text-color-text') {
      nextConfig.header_text_color = event.target.value;
    } else if (event.target.dataset.type === 'number') {
      if (event.target.value === '') {
        nextConfig[field] = this.getEditorDefaultValue(field);
      } else {
        const numericValue = Number(event.target.value);
        const parsedValue = Number.isFinite(numericValue) ? numericValue : this.getEditorDefaultValue(field);
        if (field === 'week_start_hour' || field === 'week_end_hour') {
          nextConfig[field] = Math.min(23, Math.max(0, parsedValue));
        } else {
          nextConfig[field] = parsedValue;
        }
      }
    } else if (event.target.dataset.type === 'nullable-number') {
      if (event.target.value === '') {
        nextConfig[field] = null;
      } else {
        const numericValue = Number(event.target.value);
        nextConfig[field] = Number.isFinite(numericValue) ? numericValue : null;
      }
    } else if (event.target.dataset.type === 'list') {
      nextConfig[field] = this.parseList(event.target.value);
    } else {
      nextConfig[field] = event.target.value;
    }

    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent('config-changed', {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }
}

customElements.define('skylight-calendar-card', SkylightCalendarCard);
customElements.define('skylight-calendar-card-editor', SkylightCalendarCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'skylight-calendar-card',
  name: 'Skylight Calendar Card',
  description: 'A beautiful calendar card inspired by Skylight Calendar',
  preview: true,
  documentationURL: 'https://github.com/superdingo101/skylight-calendar-card'
});
