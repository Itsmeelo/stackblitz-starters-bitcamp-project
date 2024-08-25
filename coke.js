import { input, print } from './bitcamp/lib.js';

let coin = Number(input("Please toss your coin here 👉 "));


let b;

    if (coin < 50 && coin == 5 || coin == 10 || coin == 25){
        b = 50 - coin;
        print('Amount Duo:', b);
    } else {
        print('Amount Duo: 50');
    }

    



