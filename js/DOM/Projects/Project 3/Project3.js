//Variables

const questions = document.getElementsByClassName('question');

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const answer = this.nextElementSibling;
    if (answer.style.height) {
      answer.style.height = null;
    } else {
      answer.style.height = answer.scrollHeight + 'px';
    }
  });
}