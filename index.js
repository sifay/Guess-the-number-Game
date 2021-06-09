let addMe = document.getElementById('num-submit');
let restart = document.getElementById('restart');

let output = document.getElementById('output');

let randomNo = Math.floor(Math.random()*100);

addMe.addEventListener('click', function(){
    let input = document.getElementById('input').value
   
    if(input==randomNo) {
         output.innerHTML = "Congratulation! You won"
    }
    if(input<randomNo) {
        output.innerHTML = "Your Guess "+ input + " too low" 
    }

    if(input>randomNo){
        output.innerHTML = "Your guess "+ input + " too high"
    }

})

 restart.addEventListener('click', () =>{
      output.innerHTML = ''
      input.value = " "
 })



