let userMail = prompt("Inserisci la tua email");
console.log(userMail);

const emails = ['kenzo@kenzo.com','google@google.com','yahoo@yahoo.com'];

for( let i = 0; i < emails.length; i++ ) {
    if( userMail === emails[i]){
        console.log("puoi accedere")
        alert("puoi accedere");
    } else{
        alert("Accesso Negato");
    }
}