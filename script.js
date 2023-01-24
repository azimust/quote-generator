let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
        quote: `"Be yourself; everyone else is already taken."`,
        person: `Oscar Wilde`
    }, {
        quote: `"I'm selfish, impatient and a little insecure.
        I make mistakes, I am out of control and at
        times hard to handle. But if you can't handle
        me at my worst, then you sure as hell don't deserve me at my best."`,
        person: `Marilyn Monroe`
    }, {
        quote: `"So many books, so little time."`,
        person: `Frank Zappa`
    }, {
        quote: `"You know you're in love when you can't fall
        asleep because reality is finally better than your dreams."`,
        person: `Dr. Seuss`
    }, {
        quote: `"Be the change that you wish to see in the world."`,
        person: `Mahatma Gandhi`
    }, {
        quote: `"If you tell the truth, you don't have to remember anything."`,
        person: `Mark Twain`
    }, {
        quote: `"Life is too short for long-term grudges."`,
        person: `Elon Musk`
    }, {
        quote: `"Your time is limited, so don't waste it living
        someone else's life. Don't be trapped by dogma - which
        is living with the results of other people's thinking.""`,
        person: `Steve Jobs`
    }, ];
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})