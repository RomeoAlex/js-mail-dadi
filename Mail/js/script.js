let userMail = prompt("Inserisci la tua email");
console.log(userMail);

const emails = ['kenzo@kenzo.com','google@google.com','yahoo@yahoo.com'];

let grantAccess = false;
for( let i = 0; i < emails.length; i++ ) {

    const thisEmail = emails[i];

    if( userMail === thisEmail ){
        grantAccess = true;
        
    }
}
if(grantAccess){
    alert("puoi accedere");
}else{
    alert("Accesso negato");
}