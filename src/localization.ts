import { klatschenCards } from './games/klatschen/klatschenCards'
import { englishVoteInstruction, englishVoteQuestions } from './games/klatschen/englishVoteCards'

const languageKey = 'blobba-language'
export const appLanguage = localStorage.getItem(languageKey) === 'en' ? 'en' : 'de'
document.documentElement.lang = appLanguage

export function setAppLanguage(language: 'de' | 'en') {
  localStorage.setItem(languageKey, language)
  location.reload()
}

const translations: Record<string, string> = {
  'Sprache': 'Language', 'Deutsch': 'German', 'Englisch': 'English',
  'Einstellungen': 'Settings', 'Benutzerprofil': 'User profile', 'Zurück': 'Back', 'Beenden': 'Quit',
  'Neu starten': 'Restart', 'Neustarten': 'Restart', 'Weiter': 'Continue', 'Speichern': 'Save',
  'Abbrechen': 'Cancel', 'Schließen': 'Close', 'Löschen': 'Delete', 'Übernehmen': 'Apply',
  'Ja': 'Yes', 'Nein': 'No', 'Spiele': 'Games', 'Spiele suchen': 'Search games',
  'Kategorien': 'Categories', 'Kategorie': 'Category', 'Favoriten': 'Favorites', 'Alle': 'All',
  'Spieler': 'Players', 'Mitspieler': 'Players', 'Spiel starten': 'Start game', 'Jetzt starten': 'Start now',
  'Neuer Spieler': 'New player', 'Spieler hinzufügen': 'Add player', 'Spielername': 'Player name',
  'Online-Gruppe': 'Online group', 'Spielmodus': 'Game mode', 'Offline-Spieler': 'Offline players',
  'Hellmodus': 'Light mode', 'Dunkelmodus': 'Dark mode', 'Dunkelmodus neu': 'New dark mode',
  'Grüner Modus': 'Green mode', 'Soundeffekte': 'Sound effects', 'Lautstärke': 'Volume',
  'Einstellungen öffnen': 'Open settings', 'Profil öffnen': 'Open profile', 'Spiele filtern': 'Filter games',
  'Spiel erklären': 'How to play', 'Spielregeln anpassen': 'Adjust game rules',
  'Spielregeln': 'Game rules', 'So funktioniert’s': 'How to play', 'Kartenhäufigkeit': 'Card frequency',
  'Spielstil wählen': 'Choose a game style', 'Eigene Einstellungen': 'Custom settings',
  'Individuell gestalten': 'Customize', 'Maximal 3 Einstellungen': 'Maximum 3 presets',
  'Einstellung speichern': 'Save preset', 'Einstellung löschen?': 'Delete preset?', 'Name der Einstellung': 'Preset name',
  'Klassisch': 'Classic', 'Spieler auswählen': 'Choose a player', 'Warten auf Host': 'Waiting for host',
  'Anmelden': 'Sign in', 'Registrieren': 'Sign up', 'Abmelden': 'Sign out',
  'Nächste Karte ziehen': 'Draw next card', 'Kartenkreis': 'Card circle', 'Aktive Blobb-Karten und Zustände': 'Active Blobb cards and effects',
  'Blobb-Karte entfernen?': 'Remove Blobb card?', 'Partner auswählen': 'Choose a partner',
  'Partner wählen': 'Choose partner', 'Wer soll dein Blobb-Partner sein?': 'Who should be your Blobb partner?',
  'Spiel beendet': 'Game over', 'Nochmal oder Feierabend?': 'Play again or call it a night?',
  'Du bist dran': 'Your turn', 'Deine Karten': 'Your cards', 'Gezogene Karten': 'Drawn cards',
  'Noch keine Karten gezogen.': 'No cards drawn yet.', 'Noch keine Karte gezogen': 'No card drawn yet',
  'Fragenrunde': 'Question round', 'Pyramide': 'Pyramid', 'Rot': 'Red', 'Blau': 'Blue',
  'Höher': 'Higher', 'Gleich': 'Equal', 'Tiefer': 'Lower', 'Innen': 'Inside', 'Außen': 'Outside',
  'Kartenfarbe': 'Suit', 'oder': 'or', 'Verdeckte Karte': 'Face-down card',
  'Erneut spielen': 'Play again', 'Spiel beenden': 'End game', 'Ergebnis anzeigen': 'Show results',
  'Zurück zum Anfang': 'Back to the beginning', 'Deck aufgebraucht – Verloren': 'Deck exhausted – You lost',
  'Trink verantwortungsvoll. Dieses Spiel ist nur für Erwachsene.': 'Drink responsibly. This game is for adults only.',
  'Sag nicht „Trinken“ – sag „blobben“.': 'Don’t say “drink” – say “blobb”.',
  'Sag nicht „Alkohol“ – sag „blobben“.': 'Don’t say “alcohol” – say “blobb”.',
  'Beantwortet nacheinander vier Kartenfragen.': 'Take turns answering four card questions.',
  'Baut anschließend gemeinsam die Pyramide ab.': 'Then clear the pyramid together.',
  'Die Person mit den meisten Karten fährt zum Schluss Bus.': 'The player with the most cards rides the bus at the end.',
  'Tippt auf den Kartenkreis und zieht reihum eine Karte.': 'Take turns drawing a card from the circle.',
  'Führt die angezeigte Aktion direkt aus.': 'Perform the action shown immediately.',
  'Aktionskarten bleiben sichtbar, bis sie eingesetzt oder ersetzt werden.': 'Action cards stay visible until used or replaced.',
  'Trinkt verantwortungsvoll. Jede Aufgabe funktioniert selbstverständlich auch alkoholfrei.': 'Drink responsibly. Every challenge can also be played alcohol-free.',
  'Abstimmung': 'Vote', 'Neue Regel': 'New rule', 'Gruppenaktion': 'Group action', 'Duell': 'Duel',
  'Daumen-Blobb': 'Thumb Blobb', 'Nasen-Blobb': 'Nose Blobb', 'Doppel-Blobb': 'Double Blobb',
  'Blobb-Partner': 'Blobb Partner', 'Fragenmeister': 'Question Master', 'Wasserfall': 'Waterfall',
  'Geschichte': 'Story', 'Reimrunde': 'Rhyming round', 'Blickduell': 'Staring contest',
  'Daumencatchen': 'Thumb war', 'Ansprache': 'Speech', 'Verteilen': 'Give out',
  'Große Runde': 'Big round', 'Auswahl': 'Choose', 'Alle zusammen': 'Everyone together',
  'Glück gehabt': 'Lucky you', 'Links von dir': 'To your left', 'Rechts von dir': 'To your right',
  'Doppelt hält besser': 'Double up', 'Aller guten Dinge': 'Three’s a charm',
  '+ Spieler hinzufügen': '+ Add player', 'Spieler entfernen': 'Remove player', 'Profilbild ändern': 'Change profile picture',
  'Gruppe erstellen': 'Create group', 'Gruppe beitreten': 'Join group', 'Einladen': 'Invite', 'Einladungslink': 'Invitation link',
  'Kopieren': 'Copy', 'Fertig': 'Done', 'Gruppenname': 'Group name', 'Gruppencode': 'Group code', 'Erstellen': 'Create', 'Beitreten': 'Join',
  'Teile diesen Gruppencode mit deinen Mitspielern.': 'Share this group code with the other players.',
  'Erstelle eine Gruppe oder tritt einer bestehenden Gruppe bei.': 'Create a group or join an existing group.',
  'Melde dich im Profil an, um Online-Gruppen zu nutzen.': 'Sign in through your profile to use online groups.',
  'Supabase ist noch nicht konfiguriert. Der Gastmodus bleibt offline spielbar.': 'Supabase has not been configured. Guest mode is available offline.',
  'Spielername eingeben': 'Enter player name', 'Name': 'Name', 'Profilbild': 'Profile picture', 'Profil speichern': 'Save profile',
  'Aus Favoriten entfernen': 'Remove from favorites', 'Zu Favoriten hinzufügen': 'Add to favorites',
  'Möchtest du wirklich beenden?': 'Are you sure you want to quit?', 'Möchtest du wirklich neu starten?': 'Are you sure you want to restart?',
  'Spiel beenden?': 'Quit game?', 'Spiel neu starten?': 'Restart game?', 'Bist du sicher?': 'Are you sure?',
  'Leicht': 'Easy', 'Mittel': 'Medium', 'Schwer': 'Hard', 'Schwierigkeit': 'Difficulty',
  'Spielschwierigkeit': 'Game difficulty', 'Noch keine Spieler': 'No players yet',
  'Schlücke': 'Sips', 'Schluck': 'Sip', 'Gewonnen': 'Won', 'Verloren': 'Lost', 'Ergebnis': 'Result',
  'Herz': 'Heart', 'Karo': 'Diamond', 'Pik': 'Spade', 'Kreuz': 'Club',
  'Regel': 'Rule', 'Vorschlag': 'Suggestion', 'Spieler entfernen?': 'Remove player?',
  'z. B. Freitagsparty': 'e.g. Friday party', 'Als Neu speichern': 'Save as new', 'Änderungen speichern': 'Save changes',
  '← Zurück': '← Back', 'Nächste Karte aufdecken': 'Reveal next card', 'ist fertig': 'is finished',
  'Welche': 'Which', '– Deine Karten': '– Your cards', 'Wie möchtest du spielen?': 'How would you like to play?',
  'Online-Spiel': 'Online game', 'Der Online-Modus wird als Nächstes eingerichtet.': 'Online mode will be set up next.',
  'Profil auswählen': 'Choose a profile', 'Profil ohne Namen': 'Unnamed profile', 'Auswählen': 'Select',
  'Alle gespeicherten Profile sind bereits im Spiel.': 'All saved profiles are already in the game.',
  'Neues Profil anlegen': 'Create new profile', 'Passwort': 'Password', 'E-Mail': 'Email',
  'BLOBBA präsentiert': 'BLOBBA presents', 'Benutzer': 'User', 'Profil': 'Profile',
  'Eigene Einstellung': 'Custom preset', 'Karten': 'Cards',
  'Möchtest du das Spiel wirklich beenden?': 'Are you sure you want to quit the game?',
  'Möchtest du das Spiel wirklich neu starten?': 'Are you sure you want to restart the game?',
  'Richtig!': 'Correct!', 'Falsch – trinken.': 'Wrong – drink.', 'Kein Treffer.': 'No match.',
  'Endstand': 'Final results', 'Auswertung': 'Results', 'Phase 3 starten': 'Start phase 3',
  'Ziel erreicht': 'Finish reached', 'Geschafft!': 'You made it!', 'Stern': 'Star', 'Mond': 'Moon',
  'Rot oder Blau?': 'Red or blue?', 'Höher, gleich oder tiefer?': 'Higher, equal or lower?',
  'Innen oder außen?': 'Inside or outside?', 'Welche Kartenfarbe?': 'Which suit?',
  'Wähle eine Kategorie': 'Choose a category', 'Alle Spiele': 'All games', 'Keine Spiele gefunden.': 'No games found.',
  'Wer soll': 'Who should drink', 'Schluck trinken?': 'sip?', 'Schlucke trinken?': 'sips?',
  'Schlucke': 'Sips', 'Schluck trinken': 'drink a sip', 'Weiter spielen': 'Continue playing',
  'Neues Spielerprofil': 'New player profile', 'Spielerprofil': 'Player profile', 'Profil anlegen': 'Create profile',
  'Profil bearbeiten': 'Edit profile', 'Zum Login': 'Back to login', 'Login fehlgeschlagen.': 'Login failed.',
  'Registrierung erfolgreich. Bitte bestätige deine E-Mail.': 'Registration successful. Please confirm your email address.',
  'Login nicht abgeschlossen. Bitte prüfe deine E-Mail oder dein Passwort.': 'Login incomplete. Please check your email or password.',
  'Runde': 'Round', 'Du kannst maximal drei eigene Einstellungen speichern. Lösche zuerst eine bestehende Einstellung.': 'You can save up to three custom presets. Delete an existing preset first.',
  'Keine Favoriten gefunden.': 'No favorites found.', 'Warte auf den Host': 'Waiting for the host',
  'Melde dich an': 'Sign in',
  'Kartenspiele': 'Card games', 'Kein passendes Spiel gefunden': 'No matching game found',
  'Kein Spiel gefunden': 'No games found', 'Keine Spiele in dieser Kategorie': 'No games in this category',
  '+ Spieler': '+ Player', '4 Karten in der Bus-Runde': '4 cards in the bus round',
  '5 Karten · empfohlen': '5 cards · recommended', '6 Karten in der Bus-Runde': '6 cards in the bus round',
  'Weniger Karten, entspannter Einstieg': 'Fewer cards for a relaxed start',
  'Die bewährte Standardverteilung': 'The standard card distribution', 'Mehr Aktionen, längere Runde': 'More actions, a longer round',
  'Änderungen verwerfen?': 'Discard changes?', 'Gruppe erstellt.': 'Group created.', 'Gruppe beigetreten.': 'Joined group.',
  'Einladungslink konnte nicht geöffnet werden.': 'The invitation link could not be opened.',
  'Bitte gib einen Spielernamen ein.': 'Please enter a player name.',
}

const cardCopy: Record<string, string> = {
  'self-1': 'Blobb once.', 'self-2': 'Blobb twice.', 'self-3': 'Blobb three times.',
  'distribute-3': 'Choose a person. They blobb three times.', 'distribute-4': 'Choose a person. They blobb four times.',
  'choose-1': 'Choose a person to blobb once.', 'choose-2': 'Choose a person to blobb twice.', 'choose-3': 'Choose a person to blobb three times.',
  'all-1': 'Choose a number between one and five. Everyone blobbs that many times.',
  'all-except': 'Everyone except you blobbs once.', 'left': 'The person to your left blobbs twice.', 'right': 'The person to your right blobbs twice.',
  'category-free': 'Choose a category. Take turns naming things that fit. Whoever runs out, takes too long, or repeats an answer blobbs twice.',
  'rhyme': 'Say a word. Take turns naming rhymes. Whoever cannot think of one blobbs twice.',
  'question-rule': 'You are the new Question Master. Anyone who answers one of your questions must blobb once.',
  'rule-free': 'Make a rule for the round or use this suggestion. Anyone who breaks the rule blobbs once.',
  'group-men': 'All men blobb once.', 'group-women': 'All women blobb once.',
  'group-light': 'Everyone wearing light-colored clothing blobbs once.', 'group-late': 'Everyone who was late today blobbs once.',
  'duel-rps': 'Choose someone for rock, paper, scissors. The loser blobbs twice.',
  'duel-stare': 'Choose someone for a staring contest. The first to laugh blobbs twice.',
  'duel-thumb': 'Choose someone for a thumb war. The loser blobbs twice.',
  'story': 'Tell a story together, taking turns adding one word. Whoever hesitates blobbs twice.',
  'waterfall': 'Everyone starts blobbing at the same time. You can only stop when the person to your right stops.',
  'toast': 'Give an impromptu speech. Anyone who laughs blobbs twice.',
  'thumb-clapper': 'At any time, discreetly put your thumb on the table. Everyone else must copy you. The last person blobbs three times.',
  'nose-clapper': 'At any time, discreetly put your index finger on your nose. Everyone else must copy you. The last person blobbs three times.',
  'clap-partner': 'Choose a Blobb Partner. Whenever you have to blobb, your partner must blobb the same number of times.',
  'double-clap': 'Use this card to double how many times a person must blobb for any action.',
}
const ruleCopy = [
  'Nobody may use first names.', 'Nobody may point at another person.', 'Every sentence must start with “Well”.',
  'Nobody may say “Yes”.', 'Nobody may say “No”.',
]

for (const card of klatschenCards) {
  const question = englishVoteQuestions[card.id]
  const text = question ? `${question} ${englishVoteInstruction}` : cardCopy[card.id] ?? cardCopy[card.id.replace(/-\d+$/, '')]
  if (text) translations[card.description] = text
  if (card.suggestedRule) translations[card.suggestedRule] = ruleCopy[Number(card.id.split('-').at(-1)) - 1] ?? card.suggestedRule
}

function translate(text: string) {
  const trimmed = text.trim()
  let result = translations[trimmed]
  if (!result && /^Phase \d+ von \d+$/.test(trimmed)) result = trimmed.replace(' von ', ' of ')
  if (!result && /^Karte \d+ von \d+$/.test(trimmed)) result = trimmed.replace('Karte ', 'Card ').replace(' von ', ' of ')
  if (!result && /^\d+ von \d+ Karten$/.test(trimmed)) result = trimmed.replace(' von ', ' of ').replace(' Karten', ' cards')
  if (!result && /^Frage \d+ von \d+$/.test(trimmed)) result = trimmed.replace('Frage ', 'Question ').replace(' von ', ' of ')
  if (!result && /^\d+ Schlucke?$/.test(trimmed)) result = trimmed.replace(/Schlucke?$/, trimmed.startsWith('1 ') ? 'sip' : 'sips')
  if (!result && /^· Frage \d+ von \d+$/.test(trimmed)) result = trimmed.replace('Frage ', 'Question ').replace(' von ', ' of ')
  if (!result && /^· \d+ von \d+ Karten$/.test(trimmed)) result = trimmed.replace(' von ', ' of ').replace(' Karten', ' cards')
  if (!result && trimmed === '· Spieler auswählen') result = '· Choose a player'
  if (!result && trimmed.startsWith('Vorschlag: ')) {
    const suggestion = trimmed.slice('Vorschlag: '.length)
    result = `Suggestion: ${translations[suggestion] ?? suggestion}`
  }
  if (!result && /^Treffer: /.test(trimmed)) result = trimmed.replace(/^Treffer: /, 'Match: ')
  if (!result && /^Möchtest du die Karte .+ setzen\?$/.test(trimmed)) result = trimmed.replace(/^Möchtest du die Karte (.+) setzen\?$/, 'Would you like to play the $1 card?')
  if (!result && /^Möchtest du „.+“ wirklich löschen\?$/.test(trimmed)) result = trimmed.replace(/^Möchtest du „(.+)“ wirklich löschen\?$/, 'Are you sure you want to delete “$1”?')
  return result ? text.replace(trimmed, result) : text
}

function translateElement(root: Node) {
  if (root instanceof Element && root.closest('script, style, .player-name, .player-name-color, .custom-card-preset-select, [contenteditable]')) return
  if (root instanceof Text) {
    const parent = root.parentElement
    if (!parent || parent.closest('script, style, input, textarea, .player-name, .player-name-color, .custom-card-preset-select, [contenteditable]')) return
    const next = translate(root.data)
    if (next !== root.data) root.data = next
    return
  }
  if (root instanceof Element) {
    for (const attribute of ['placeholder', 'title', 'aria-label', 'alt', 'data-drinks']) {
      const value = root.getAttribute(attribute)
      if (value) { const next = translate(value); if (next !== value) root.setAttribute(attribute, next) }
    }
  }
  for (const child of root.childNodes) translateElement(child)
}

export function startLocalization() {
  if (appLanguage !== 'en') return
  translateElement(document.body)
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') translateElement(mutation.target)
      else if (mutation.type === 'attributes') translateElement(mutation.target)
      else for (const node of mutation.addedNodes) translateElement(node)
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'title', 'aria-label', 'alt', 'data-drinks'] })
}
