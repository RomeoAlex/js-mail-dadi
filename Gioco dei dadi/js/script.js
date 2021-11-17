let pcNumber = Math.random(6);
alert("Il numero del banco è " + pcNumber);
let userNumber = Math.random(6);
alert("Il tuo numero è " + userNumber);
if(pcNumber > userNumber){
    alert("Il banco ha vinto perchè " + pcNumber + " è maggiore del tuo numero " + userNumber);
}else if(pcNumber > userNumber){
    alert("Tu ha vinto perchè " + userNumber + " è maggiore del numero del banco " + pcNumber);
}else{
    alert("Avete pareggiato perchè " + userNumber + " è uguale a " + pcNumber);
}
