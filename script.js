var quotes = [
`“Some wounds never truly heal, and bleed again at the slightest word.” — Ned Stark`,
`“A lion doesn’t concern himself with the opinions of a sheep.” — Tywin Lannister`,
`“A man with no motive is a man no one suspects. Always keep your foes confused.” — Lord Baelish`,
`“Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.” — Tyrion Lannister`,
`“It is beautiful beneath the sea, but if you stay too long, you’ll drown.” — Three Eyed Raven`,
`“All men must die, but we are not men.” — Daenerys Targaryen`,
`“There is only one god and his name is Death, and there is only one thing we say to Death: ‘Not today.’” — Syrio Forel`,
`“The freedom to make my own mistakes was all I ever wanted.” — Mance Rayder`,
`“It doesn’t matter what we want. Once we get it, then we want something else.” — Lord Baelish`,
`“Fear cuts deeper than swords.” — Arya Stark`,
`“A mind needs books like a sword needs a whetstone.” — Tyrion Lannister`,
`“We are going to leave the world better than we found it.” — Daenerys Targaryen`,
`“I don't want it.” — Jon Snow `,
`“Death is so final yet life is full of possibilities.” – Tyrion Lannister `,
`“Bran thought about it. 'Can a man still be brave if he's afraid?' 'That is the only time a man can be brave,' his father told him.” — Bran & Ned Stark`,
`“People often claim to hunger for truth, but seldom like the taste when it's served up.” — Tyrion Lannister`,
`“Sometimes there Is no happy choice, only one less grievous than the others.” — Jon Snow”`,
`“The lone wolf dies but the pack survives.” – Sansa Stark`,
`“All halls lead somewhere. Where there is a way in, there is a way out.” — Arya Stark`,
`“Love is death of duty” - John Snow, Death is death of love. You can never have both.”- Tyrion Lannister`
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('container').innerHTML = quotes[randomNumber];
}