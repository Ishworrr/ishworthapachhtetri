         // rock-&#9994
        // paper-&#9995
        // scissor-&#9996
        // const score = {
        //     wins:0,
        //     losses:0,
        //     ties:0
        // }
        const jsResult = document.querySelector('.js-result');
        const rockEl = document.querySelector('.a');
        const paperEl = document.querySelector('.b');
        const scissorEl = document.querySelector('.c');
    
        const scoree = document.querySelector('.js-moves');
        const scoreee = document.querySelector('.scoreee');

        let score = JSON.parse(localStorage.getItem('score')) || {
                wins:0,
            losses:0,
            ties:0
            };


        // if(!score){  //score===null or'';
        //     score={
        //         wins:0,
        //     losses:0,
        //     ties:0

        //     }

        // }


       console.log(JSON.parse(localStorage.getItem('score')))
        updateScore();
   
  
// let autoPlaying = false;
// let intervalId;

//    function autoPlay(){
  
//     if(!autoPlaying){
//       intervalId = setInterval(() => {
//         const playerMove = pickComputerMove()
//         playGame(playerMove);
//       }, 1000);
//       autoPlaying = true;
//     }else{
//       clearInterval(intervalId);
//       autoPlaying = false;
//     }
  
//    }
rockEl.addEventListener('click', () => {
playGame('&#9994')
});
paperEl.addEventListener('click', () => {
  playGame('&#9995')
  });
  scissorEl.addEventListener('click', () => {
    playGame('&#9996')
    });

    document.body.addEventListener('keydown',(event)=>{
if(event.key==='r'){
  playGame('&#9994')
}else if(event.key==='p'){
  playGame('&#9995')
}else if(event.key==='s'){
  playGame('&#9996')
}
    })
       function playGame(playerMove){
       
            //07
            const computerMove = pickComputerMove();

            let result = '';

            if(playerMove === '&#9996'){ //scissor
            if(computerMove==='&#9994'){
            result = 'You lose';
            }else if(computerMove==='&#9995'){
            result = 'You win';
            }else if(computerMove==='&#9996'){
            result = 'Tie';
            }

        }else if(playerMove === '&#9995'){
            if(computerMove==='&#9994'){
            result = 'You win';
            }else if(computerMove==='&#9995'){
            result = 'Tie';
            }else if(computerMove==='&#9996'){
            result = 'You lose';
            }

        }
        else if(playerMove === '&#9994'){
            if(computerMove==='&#9994'){
            result = 'Tie';
            }else if(computerMove==='&#9995'){
            result = 'You lose';
            }else if(computerMove==='&#9996'){
            result = 'You win';
            }
        }
      //08
      if(result === 'You win'){
        score.wins = score.wins+1; //score.wins+=1;
        
      }else if(result === 'You lose'){
        score.losses +=1;
      }else if(result === 'Tie'){
        score.ties +=1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScore()

jsResult.innerHTML=result;
scoree.innerHTML=`You <span class="span">${playerMove}</span> <span class="span">${computerMove}</span>Computer`;

        // alert(`You picked  ${playerMove}.Computer picked ${computerMove}. You ${result}
        // Wins:${score.wins}
        // Losses:${score.losses}
        // Ties:${score.ties}
        // `)


  //  console.log(result);
  
        }
      
 function updateScore(){
    scoreee.innerHTML=`Win:${score.wins}, Lose:${score.losses}, Tie:${score.ties}`;


 }
    

    function pickComputerMove(){
       //06 
        const randomNumber = (Math.random());

        let computerMove = '';

   if(randomNumber<1/3 && randomNumber>=0){
       computerMove = '&#9994';
   } else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove = '&#9995';
   }else if(randomNumber>=2/3 && randomNumber<1){
        computerMove = '&#9996';
   }
//    console.log(computerMove);

return computerMove;



    }