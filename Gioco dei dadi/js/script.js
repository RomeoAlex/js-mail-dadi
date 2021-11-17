let pcNumber = parseInt(Math.floor(Math.random() * 5 + 1));
alert("Il numero del banco è " + pcNumber);
let userNumber = parseInt(Math.floor(Math.random() * 5 + 1));
alert("Il tuo numero è " + userNumber);
if(pcNumber > userNumber){
    alert("Il banco ha vinto perchè " + pcNumber + " è maggiore del tuo numero " + userNumber);
}else if(userNumber > pcNumber){
    alert("Tu ha vinto perchè " + userNumber + " è maggiore del numero del banco " + pcNumber);
}else{
    alert("Avete pareggiato perchè " + userNumber + " è uguale a " + pcNumber);
}
