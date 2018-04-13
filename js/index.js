const modal = document.querySelector('.modal');
const countDown = document.querySelector('.countdown');

modal.addEventListener('transitionend', function() {  
  setTimeout(() => {
    let timeLeft = 5;
    
    countDown.classList.remove('invisible');
    
    const countDownTimer = setInterval(() => {      
      countDown.innerText = timeLeft;
      
      timeLeft--;
      
      if (timeLeft < 0) {
        countDown.innerText = 'Blast Off! *PCCHCCHCHCHCHCT*';
        clearInterval(countDownTimer);
        
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    }, 1000);
  }, 500);
});
