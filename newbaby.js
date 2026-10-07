       
       const buttonElement = document.querySelector('#JS-button');
        
              buttonElement.addEventListener('click', function () {
            if (buttonElement.textContent === 'subscribe') {
                buttonElement.textContent = 'subscribed';
            } else {
                buttonElement.textContent = 'subscribe';
            }
                

})

         
         const score = {
                win: 0,
                losses: 0,
                ties: 0
            };

             function pickComputerMove () {        


            const randomNumber = Math.random();
            let computerPicks = '';
                

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerPicks = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerPicks = 'paper';
            }else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerPicks = 'scissors';
            }
            return computerPicks;


}    
function playGame(playerMove) {

    
              computerPicks= pickComputerMove ();
              let result = '';
            if (playerMove === 'scissors') {
        

            if (computerPicks === 'rock') {
                result = 'you lose';
            }else if (computerPicks === 'paper') {
                result = 'you win.';
            }else if (computerPicks === 'scissors') {
                result = 'tie.';
            }
        }


            
           else if (playerMove === 'paper') {
           computerPicks = pickComputerMove ();
            let papperresult = '';

            if (computerPicks === 'rock') {
                result = 'you win';
            }else if (computerPicks === 'paper') {
                result = 'tie.';
            }else if (computerPicks === 'scissors') {
                result = 'you lose.';
            }
        }




            else if (playerMove === 'rock') {
           computerPicks = pickComputerMove ();


            let results = '';

            if (computerPicks === 'rock') {
                result = 'tie';
            }else if (computerPicks === 'paper') {
                result = 'you lose';
            }else if (computerPicks === 'scissors') {
                result = 'you win';
            }

            }

            if (result === 'you win') {
                score.win += 1; 
            }
            else if (result === 'you lose') {
                score.losses += 1; 
            }
            else if (result === 'tie') {
                score.ties += 1; 
            }
             
            alert(`you pick ${playerMove}. computer picked ${computerPicks}. ${result}
 wins: ${score.win}, lose: ${score.losses}, ties: ${score.ties}.`);
}       

const newInput = document.querySelector('#inputText');
const newBtn = document.querySelector('#buu');
const result = document.querySelector('#result');
newBtn.addEventListener('click', function () {
    let inputValue = parseInt(newInput.value);
    if (inputValue < 40) {
        inputValue = inputValue + 10;
        console.log(`$${inputValue}`);
        
    } else {
        console.log(`$${inputValue}`);
    }

    result.textContent = `$${inputValue}`;
});

