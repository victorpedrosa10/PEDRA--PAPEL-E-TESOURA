 const result = document.querySelector(".result")

 const humanscore = document.querySelector("#human-score")
 const machinescore = document.querySelector("#machine-score")

 let humanscorenumber = 0
 let machinescorenumber = 0
 
 
 const playhuman = (humanchoice) => {
   
   playthegame(humanchoice, playmachine())
    
 }

 const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomnumer = Math.floor(Math.random() * 3)

    return choices[randomnumer]

    
 }



 const playthegame = (human, machine) => {

   console.log('humano: ' + human + " Maquina: " + machine)
 
   if(human === machine){
      result.innerHTML = "Deu empate!"
   }  else if ((human === 'paper' && machine === 'rock') || 
               ( human === 'rock' && machine === 'scissors') || 
               ( human === 'scissors' && machine === 'paper')) {
                  humanscorenumber++
                  humanscore.innerHTML = humanscorenumber
                  result.innerHTML = "Você Ganhou!"
   }  else {
      machinescorenumber++
      machinescore.innerHTML = machinescorenumber
      result.innerHTML = "Você perdeu para a Alexa"
   }

}