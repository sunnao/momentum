const quotes =[
    {
        quote: "인생의 가장 큰 영광은 절대 넘어지지 않는 것이 아니라 넘어질 때마다 일어나는 것입니다.",
        author: "넬슨 만델라",
    },
    {
        quote:"사람들은 당신이 무슨 말을 했는지 무슨 행동을 했는지 기억하지 못하지만 당신이 그들에게 어떤 감정과 느낌을 주었는지는 절대로 잊지 않는다는 것을 배웠습니다.",
        author:"마야 안젤루",
    },
    {
        quote:"당신이 가진 것에 감사하면 더 많은 것을 갖게 될 것입니다. 가지고 있지 않은 것에만 집중한다면 절대로 충분히 가질 수 없을 것입니다.",
        author: "오프라 윈프리",
    },
    {
        quote:"해야만 하는 일은 늘 쉽다고 생각하라. 어렵다고 생각하면 필요한 것의 열 배, 스무 배의 힘을 쓰게 된다.",
        author:"에밀 코에",
    },
    {
        quote:"인생을 살아가는 데는 오직 두가지 방법밖에 없다. 하나는 아무것도 기적이 아닌 것처럼, 다른 하나는 모든 것이 기적인 것처럼 살아가는 것이다.",
        author: "알버트 아인슈타인",
    },
    {
        quote:"우리가 무슨 생각을 하느냐가 우리가 어떤 사람이 되는지를 결정합니다.",
        author:"오프라 윈프리",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
