let puns = [
    { content: "Today I learned that if a canoe turns upside down in the water, you can safely wear it on your head.", punchline: "Because it’s capsized.", attribution: "@dadsaysjokes", link: "https://twitter.com/dadsaysjokes/status/1344037619282440195" },
    { content: "What did the ocean say to the other ocean?", punchline: "Nothing, they just waved.", attribution: "unknown", link: null },
    { content: "Why was 2019 afraid of 2020?", punchline: "Because they had a fight and 2021.", attribution: "unknown", link: null  },
    { content: "To whoever stole my copy of Microsoft Office, I will find you. ", punchline: "You have my Word.", attribution: "unknown", link: null },
    { content: "What do you call a deer with no eyes?", punchline: "No idea.", attribution: "unknown", link: null },
    { content: "What happened when the two antennas got married? ", punchline: "The ceremony was kinda boring, but the reception was great!", attribution: "unknown", link: null },
    { content: "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle?", punchline: "Attire!", attribution: "unknown", link: null },
];

document.addEventListener("DOMContentLoaded", selectTerribleJoke);
document.querySelector('#another').addEventListener("click", selectTerribleJoke);

function selectTerribleJoke()
{
    let punIdx = Math.floor(Math.random() * puns.length);
    document.querySelector('#content').textContent = puns[punIdx].content;
    document.querySelector('#punchline').textContent = puns[punIdx].punchline;
    document.querySelector('#attribution').textContent = puns[punIdx].attribution;
    document.querySelector('#attribution').href = puns[punIdx].link ?? '#puns';
    document.querySelector('#attribution').target = puns[punIdx].link === null ? '' : '_blank';
}