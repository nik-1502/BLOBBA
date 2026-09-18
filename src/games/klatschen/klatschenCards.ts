export type KlatschenCardType = 'drink-self' | 'choose-player' | 'distribute' | 'all-players' | 'category' | 'question' | 'temporary-rule' | 'vote' | 'duel' | 'custom' | 'collectible-action'

export type KlatschenCard = {
  id: string
  title: string
  symbol: string
  description: string
  type: KlatschenCardType
  amount?: number
  keepUntilUsed?: boolean
  exclusiveRole?: string
  suggestedRule?: string
}

export const klatschenCards: KlatschenCard[] = [
  { id: 'self-1', title: 'Du bist dran', symbol: '👏', description: 'Blobbe einmal.', type: 'drink-self', amount: 1 },
  { id: 'self-2', title: 'Doppelt hält besser', symbol: '👏', description: 'Blobbe zweimal.', type: 'drink-self', amount: 2 },
  { id: 'self-3', title: 'Aller guten Dinge', symbol: '👏', description: 'Blobbe dreimal.', type: 'drink-self', amount: 3 },
  { id: 'distribute-3', title: 'Verteilen', symbol: '🎁', description: 'Wähle eine Person. Sie blobbt dreimal.', type: 'distribute', amount: 3 },
  { id: 'distribute-4', title: 'Große Runde', symbol: '🎁', description: 'Wähle eine Person. Sie blobbt viermal.', type: 'distribute', amount: 4 },
  { id: 'choose-1', title: 'Auswahl', symbol: '👉', description: 'Wähle eine Person, die einmal blobbt.', type: 'choose-player', amount: 1 },
  { id: 'choose-2', title: 'Auswahl', symbol: '👉', description: 'Wähle eine Person, die zweimal blobbt.', type: 'choose-player', amount: 2 },
  { id: 'choose-3', title: 'Auswahl', symbol: '👉', description: 'Wähle eine Person, die dreimal blobbt.', type: 'choose-player', amount: 3 },
  { id: 'all-1', title: 'Alle zusammen', symbol: '🙌', description: 'Wähle eine Zahl zwischen eins und fünf. Alle blobben entsprechend oft.', type: 'all-players' },
  { id: 'all-except', title: 'Glück gehabt', symbol: '✨', description: 'Alle außer dir blobben einmal.', type: 'all-players', amount: 1 },
  { id: 'left', title: 'Links von dir', symbol: '⬅️', description: 'Die Person links von dir blobbt zweimal.', type: 'custom', amount: 2 },
  { id: 'right', title: 'Rechts von dir', symbol: '➡️', description: 'Die Person rechts von dir blobbt zweimal.', type: 'custom', amount: 2 },
  { id: 'category-free-1', title: 'Kategorie', symbol: '💭', description: 'Wähle eine Kategorie. Nennt reihum passende Begriffe. Wer nichts mehr weiß, zu lange braucht oder etwas doppelt nennt, blobbt zweimal.', type: 'category', amount: 2 },
  { id: 'category-free-2', title: 'Kategorie', symbol: '💭', description: 'Wähle eine Kategorie. Nennt reihum passende Begriffe. Wer nichts mehr weiß, zu lange braucht oder etwas doppelt nennt, blobbt zweimal.', type: 'category', amount: 2 },
  { id: 'category-free-3', title: 'Kategorie', symbol: '💭', description: 'Wähle eine Kategorie. Nennt reihum passende Begriffe. Wer nichts mehr weiß, zu lange braucht oder etwas doppelt nennt, blobbt zweimal.', type: 'category', amount: 2 },
  { id: 'category-free-4', title: 'Kategorie', symbol: '💭', description: 'Wähle eine Kategorie. Nennt reihum passende Begriffe. Wer nichts mehr weiß, zu lange braucht oder etwas doppelt nennt, blobbt zweimal.', type: 'category', amount: 2 },
  { id: 'category-free-5', title: 'Kategorie', symbol: '💭', description: 'Wähle eine Kategorie. Nennt reihum passende Begriffe. Wer nichts mehr weiß, zu lange braucht oder etwas doppelt nennt, blobbt zweimal.', type: 'category', amount: 2 },
  { id: 'rhyme', title: 'Reimrunde', symbol: '🎤', description: 'Nenne ein Wort. Nennt reihum passende Reime. Wer keinen mehr kennt, blobbt zweimal.', type: 'custom', amount: 2 },
  { id: 'question-rule', title: 'Fragenmeister', symbol: '🤐', description: 'Du bist der neue Fragenmeister. Wer dir eine Frage beantwortet, muss einmal blobben.', type: 'question', amount: 1, exclusiveRole: 'question-master' },
  { id: 'question-rule-2', title: 'Fragenmeister', symbol: '🤐', description: 'Du bist der neue Fragenmeister. Wer dir eine Frage beantwortet, muss einmal blobben.', type: 'question', amount: 1, exclusiveRole: 'question-master' },
  { id: 'question-rule-3', title: 'Fragenmeister', symbol: '🤐', description: 'Du bist der neue Fragenmeister. Wer dir eine Frage beantwortet, muss einmal blobben.', type: 'question', amount: 1, exclusiveRole: 'question-master' },
  { id: 'question-rule-4', title: 'Fragenmeister', symbol: '🤐', description: 'Du bist der neue Fragenmeister. Wer dir eine Frage beantwortet, muss einmal blobben.', type: 'question', amount: 1, exclusiveRole: 'question-master' },
  { id: 'rule-free-1', title: 'Neue Regel', symbol: '📜', description: 'Erfinde eine Regel für die Runde oder nutze diesen Vorschlag: Bei jedem Regelverstoß blobbt die betroffene Person einmal.', suggestedRule: 'Niemand darf Vornamen sagen.', type: 'temporary-rule', amount: 1 },
  { id: 'rule-free-2', title: 'Neue Regel', symbol: '📜', description: 'Erfinde eine Regel für die Runde oder nutze diesen Vorschlag: Bei jedem Regelverstoß blobbt die betroffene Person einmal.', suggestedRule: 'Niemand darf auf andere zeigen.', type: 'temporary-rule', amount: 1 },
  { id: 'rule-free-3', title: 'Neue Regel', symbol: '📜', description: 'Erfinde eine Regel für die Runde oder nutze diesen Vorschlag: Bei jedem Regelverstoß blobbt die betroffene Person einmal.', suggestedRule: 'Jeder Satz muss mit „Also“ beginnen.', type: 'temporary-rule', amount: 1 },
  { id: 'rule-free-4', title: 'Neue Regel', symbol: '📜', description: 'Erfinde eine Regel für die Runde oder nutze diesen Vorschlag: Bei jedem Regelverstoß blobbt die betroffene Person einmal.', suggestedRule: 'Niemand darf „Ja“ sagen.', type: 'temporary-rule', amount: 1 },
  { id: 'rule-free-5', title: 'Neue Regel', symbol: '📜', description: 'Erfinde eine Regel für die Runde oder nutze diesen Vorschlag: Bei jedem Regelverstoß blobbt die betroffene Person einmal.', suggestedRule: 'Niemand darf „Nein“ sagen.', type: 'temporary-rule', amount: 1 },
  { id: 'group-men', title: 'Gruppenaktion', symbol: '👥', description: 'Alle Männer blobben einmal.', type: 'all-players', amount: 1 },
  { id: 'group-women', title: 'Gruppenaktion', symbol: '👥', description: 'Alle Frauen blobben einmal.', type: 'all-players', amount: 1 },
  { id: 'group-light', title: 'Gruppenaktion', symbol: '👕', description: 'Alle mit heller Kleidung blobben einmal.', type: 'all-players', amount: 1 },
  { id: 'group-late', title: 'Gruppenaktion', symbol: '⏰', description: 'Alle, die heute zu spät waren, blobben einmal.', type: 'all-players', amount: 1 },
  { id: 'vote-prison', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten im Gefängnis landen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-vanish', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten eine Woche verschwinden? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-celebrity', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten einen Prominenten heiraten? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-dance', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten einen peinlichen Tanz aufführen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-lost-phone', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten das eigene Handy verlieren? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-reality-show', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten bei einer Realityshow mitmachen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-tattoo', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten spontan ein Tattoo bekommen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-famous', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten über Nacht berühmt werden? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-missed-flight', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten einen Flug verpassen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-island', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten allein auf einer Insel überleben? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-viral', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten mit einem peinlichen Video viral gehen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-party-last', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten als Letztes eine Party verlassen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-party-first', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten als Erstes auf einer Party einschlafen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-secret', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten aus Versehen ein Geheimnis verraten? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-job', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten spontan den Job kündigen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-world-trip', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten eine Weltreise ohne Plan beginnen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-alarm', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten fünf Wecker überhören? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-wrong-train', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten in den falschen Zug steigen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-million', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten eine Million Euro an einem Tag ausgeben? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-comedy', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten eine Karriere als Comedian starten? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-pet', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten zehn Haustiere adoptieren? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-ghost', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten an Geister glauben? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-message', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten eine Nachricht an die falsche Person schicken? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-karaoke', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten freiwillig Karaoke singen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-laugh', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten in einer ernsten Situation lachen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-food', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten das Essen aller anderen aufessen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-wedding', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten spontan in Las Vegas heiraten? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-app', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten eine erfolgreiche App entwickeln? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-detective', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten einen Fall wie ein Detektiv lösen? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'vote-meme', title: 'Abstimmung', symbol: '🗳️', description: 'Wer würde am ehesten selbst zu einem Meme werden? Stimmt gleichzeitig ab. Wer die meisten Stimmen erhält, blobbt zweimal.', type: 'vote', amount: 2 },
  { id: 'duel-rps', title: 'Duell', symbol: '✊', description: 'Wähle jemanden für Schnick, Schnack, Schnuck. Wer verliert, blobbt zweimal.', type: 'duel', amount: 2 },
  { id: 'duel-stare', title: 'Blickduell', symbol: '👀', description: 'Wähle jemanden zum Blickduell. Wer zuerst lacht, blobbt zweimal.', type: 'duel', amount: 2 },
  { id: 'duel-thumb', title: 'Daumencatchen', symbol: '👍', description: 'Wähle jemanden zum Daumencatchen. Wer verliert, blobbt zweimal.', type: 'duel', amount: 2 },
  { id: 'story', title: 'Geschichte', symbol: '📖', description: 'Erzählt reihum eine Geschichte. Jede Person ergänzt ein Wort. Wer stockt, blobbt zweimal.', type: 'custom', amount: 2 },
  { id: 'waterfall', title: 'Wasserfall', symbol: '🌊', description: 'Alle beginnen gleichzeitig zu blobben. Du darfst erst aufhören, wenn die Person rechts von dir aufhört.', type: 'custom' },
  { id: 'toast', title: 'Ansprache', symbol: '🥂', description: 'Halte eine spontane Ansprache. Wer dabei lacht, blobbt zweimal.', type: 'custom', amount: 2 },
  { id: 'thumb-clapper-1', title: 'Daumen-Blobb', symbol: '👍', description: 'Lege irgendwann unauffällig deinen Daumen auf den Tisch. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'thumb-clapper-2', title: 'Daumen-Blobb', symbol: '👍', description: 'Lege irgendwann unauffällig deinen Daumen auf den Tisch. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'thumb-clapper-3', title: 'Daumen-Blobb', symbol: '👍', description: 'Lege irgendwann unauffällig deinen Daumen auf den Tisch. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'thumb-clapper-4', title: 'Daumen-Blobb', symbol: '👍', description: 'Lege irgendwann unauffällig deinen Daumen auf den Tisch. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'nose-clapper-1', title: 'Nasen-Blobb', symbol: '👃', description: 'Lege irgendwann unauffällig deinen Zeigefinger an deine Nase. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'nose-clapper-2', title: 'Nasen-Blobb', symbol: '👃', description: 'Lege irgendwann unauffällig deinen Zeigefinger an deine Nase. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'nose-clapper-3', title: 'Nasen-Blobb', symbol: '👃', description: 'Lege irgendwann unauffällig deinen Zeigefinger an deine Nase. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'nose-clapper-4', title: 'Nasen-Blobb', symbol: '👃', description: 'Lege irgendwann unauffällig deinen Zeigefinger an deine Nase. Alle anderen müssen es nachmachen. Die letzte Person blobbt dreimal.', type: 'collectible-action', amount: 3, keepUntilUsed: true },
  { id: 'clap-partner', title: 'Blobb-Partner', symbol: '🤝', description: 'Wähle eine Person als Blobb-Partner. Immer wenn du blobben musst, muss dein Partner genauso oft mitblobben.', type: 'collectible-action', keepUntilUsed: true },
  { id: 'double-clap', title: 'Doppel-Blobb', symbol: '✌️', description: 'Verdopple mit dieser Karte, wie oft eine Person bei einer beliebigen Aktion blobben muss.', type: 'collectible-action', keepUntilUsed: true },
  { id: 'double-clap-2', title: 'Doppel-Blobb', symbol: '✌️', description: 'Verdopple mit dieser Karte, wie oft eine Person bei einer beliebigen Aktion blobben muss.', type: 'collectible-action', keepUntilUsed: true },
  { id: 'double-clap-3', title: 'Doppel-Blobb', symbol: '✌️', description: 'Verdopple mit dieser Karte, wie oft eine Person bei einer beliebigen Aktion blobben muss.', type: 'collectible-action', keepUntilUsed: true },
  { id: 'double-clap-4', title: 'Doppel-Blobb', symbol: '✌️', description: 'Verdopple mit dieser Karte, wie oft eine Person bei einer beliebigen Aktion blobben muss.', type: 'collectible-action', keepUntilUsed: true },
]

export const klatschenCardMap = new Map(klatschenCards.map((card) => [card.id, card]))

const DEFAULT_CARD_COUNTS: Record<string, number> = {
  Abstimmung: 4,
}

export function defaultKlatschenCardCount(title: string, availableCards: number) {
  return DEFAULT_CARD_COUNTS[title] ?? availableCards
}

export const klatschenCardGroups = [...new Set(klatschenCards.map((card) => card.title))].map((title) => ({
  title,
  cards: klatschenCards.filter((card) => card.title === title),
}))
