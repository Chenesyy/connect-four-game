import * as readline from 'readline';

console.log('Welcome to Connect four game');

let grid: string[][] = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

let read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let player: string;

read.question('Hello! Choose your color:\n[B] Black\n[W] White \n', (answer) => {
    switch(answer.toLowerCase()) {
        case 'b':
        console.log('You are Player 2! White player(AI) goes first');
        player = answer.toUpperCase();
        break;
        case 'w':
        console.log('You are Player 1! You take the first move');
        player = answer.toUpperCase();
        break;
        default:
        console.log('Please choose between [B] or [W]');
        break;
    }

    if(player === 'B') {
        console.log('ikaw si B');
    } else {
        console.log('ikaw si W');
    }

    read.close();
});


