import { input, print } from './bitcamp/lib.js';

let coin = Number(input("Please toss your coin here 👉 "));


let b;
let coin2; 


    if (coin < 50 && coin == 5 || coin == 10 || coin == 25){
        b = 50 - coin;
        print('Amount Duo:', b);
        while (coin < 50) {
            coin2 = number(input("Please toss your coin here 👉 "));
            coin = coin + coin2;
        }
        if (coin == 50) {
            print ('Change Owed: 0')
        } else if (coin > 50){
            print ('Change Owed:', coin - 50);
        }
    } else {
        print ('Amount Duo: 50');
        // coin = Number(input("Please toss your coin here 👉 "));
    }
    

    



