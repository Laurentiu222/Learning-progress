//Verables

let btn = document.querySelector('#new-quote');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes = [
  {qoute:`"Be yourself; everyone else is already taken"`,
   person:`Oscar Wilde`
  },
  {
    qoute:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    person:`Marilyn Monroe`
  },
  {
    qoute:`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
    person:`Albert Einstein`
  },
  {
    qoute:`"A room without books is like a body without a soul."`,
    person:`Marcus Tullius Cicero`
  },
  {
    qoute:`"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    person:`Bernard M. Baruch`
  },
  {
    qoute:`"You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth."`,
    person:`William W. Purkey`
  },
  {
    qoute:`"You know you're in love when you can't fall asleep because reality is finally better than your dreams"`,
    person:`Dr. Seuss`
  },
  {
    qoute:`"You only live once, but if you do it right, once is enough."`,
    person:`Mae West`
  },
  {
    qoute:`"Be the change that you wish to see in the world."`,
    person:`Mahatma Gandhi`
  },
  {
    qoute:`"In three words I can sum up everything I've learned about life: it goes on."`,
    person:`Robert Frost`
  },];

  btn.addEventListener("click", function(){

    let random = Math.floor(Math.random()*qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
  })