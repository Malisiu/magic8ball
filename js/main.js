const ballImg = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answerArray = ['Nie chcesz znać odpowiedzi na to pytanie...:/','Nie.' ,'Tak!','Nie wiem' , 'Może'];

const checkInput = () => {
    ballImg.classList.remove('shake-animation');
     if(input.value === ''){
        error.textContent = 'Musisz zadać jakieś pytanie!';
        answer.textContent = '';
    }else if(input.value.slice(-1).includes('?') === false){
        error.textContent = 'Pytanie musi być zakonczone znakiem "?"';
        answer.textContent = '';
    }else {
        error.textContent = '';
        randomAnswer();
    }
}

const shakeBall = () => {
    ballImg.classList.add('shake-animation');
    setTimeout(checkInput,1000);
}

const randomAnswer = () => {
    const randomNumber = Math.floor(Math.random() * answerArray.length);
    answer.textContent = answerArray[randomNumber];
}



ballImg.addEventListener('click', shakeBall);