import prompt from 'prompt-sync';
let input = prompt();
console.log("¿Que Akatsuki eres segun tu mes de nacimiento?");
console.log('1. Enero. 2. Febrero. 3. Marzo. 4. Abril. 5. Mayo. 6. Junio. 7. Julio. 8. Agosto. 9. Septiembre. 10. Octubre. 11. Noviembre. 12. Diciembre. ');
let n = input();
while (n){
    if (n == 1){
        console.log("Itachi");
        break;
    }
    else if (n == 2){
        console.log("Konan");
        break;
    }
    else if (n == 3){
        console.log("Sasori");
        break;
    }
    else if (n == 7){
        console.log("Obito");
        break;
    }
    else if (n == 4){
        console.log("Pain");
        break;
    }
    else if (n == 5){
        console.log("Kisame");
        break;
    }
    else if (n == 6){
        console.log("Deidara");
        break;
    }
    else if (n == 8){
        console.log("Hidan");
        break;
    }
    else if (n == 9){
        console.log("Orochimaru");
        break;
    }
    else if (n == 10){
        console.log("Kakuzu");
        break;
    }
    else if (n == 11){
        console.log("Nagato");
        break;
    }
    else if (n == 12){
        console.log("Zetsu");
        break;
    }
}