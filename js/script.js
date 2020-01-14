const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const button = document.querySelector('.button');
const repeat = document.querySelector('.repeat');

let cntSec = 0;
let cntMin = 0;

// Обновление цифр тамера
const updateText = () =>{	
  minutes.innerHTML = (0 + String(cntMin)).slice(-2);
  seconds.innerHTML = (0 + String(cntSec)).slice(-2);
}
updateText();

const cntDown = () => {	
	let total = cntSec + cntMin * 60;
  const timeinterval = setTimeout(cntDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display  = 'none';
    button.style.display = 'none';
    repeat.style.display = 'inline-block';

    message.innerHTML = '<p>Я закончил ...<br>Повторить</p>';
  }
  if(cntSec > 0) cntSec--;
  else{
  	cntSec = 59;
    cntMin--;
  } 
  updateText();
}

plus.onclick = () =>{
  if(cntSec < 59) ++cntSec;
  else{
  	cntSec = 0;
  	++cntMin;
  }
  updateText()
}

minus.onclick = () =>{
	if(cntMin <= 0 && cntSec===0){
  	cntSec = 0;
    cntMin = 0;
    return;
  }
  if(cntSec > 0) --cntSec;
  else{
  	cntSec = 59;
  	--cntMin;
  }
  updateText();
}

repeat.onclick = () => { 
    cntSec = 0; 
    cntMin = 0;
    updateText();  
    timer.style.display = 'block';
    button.style.display = 'inline-block';
    repeat.style.display = 'none';
    message.innerHTML = '';
}

start.onclick = () => {
	  cntDown();  
}

updateText();