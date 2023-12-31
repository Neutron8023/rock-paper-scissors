/* Variable */
let scoreUser = 0;
let scoreComputer = 0;

let buttons = document.querySelectorAll('button');
let result = document.querySelector('.text-result');
let player = document.querySelector('.score__player');
let computer = document.querySelector('.score__computer');
let reset = document.querySelector('.btn-reset');

buttons.forEach((btn) => {
    btn.addEventListener('click', function game(e) {
        const play = playRound(e.target.textContent, getComputerChoice());

        if (play.includes('You win')) {
            scoreUser++;
            player.textContent = `${scoreUser}`;
        } else if (play.includes('You lose')) {
            scoreComputer++;
            computer.textContent = `${scoreComputer}`;
        }

        if (scoreUser === 5) {
            result.style.color = `#0f0`;
            result.textContent = `You win!`;
        } else if (scoreComputer === 5) {
            result.style.color = `#f00`;
            result.textContent = `You lose!`;
        }
    });
});

reset.addEventListener('click', function () {
    result.style.color = '';
    result.textContent = '';
    scoreUser = 0;
    scoreComputer = 0;
    player.textContent = 0;
    computer.textContent = 0;
});

/* Function */
/* It serves to make the computer play by causally choosing between rock paper scissors */

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

/* Play a round with the computer */

function playRound(playerSelection, computerSelection) {
    // I converted  the choice of player and computer into capital letters to compare them better.
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    if (player === computer) {
        return (result.textContent = `Draw! Player: "${playerSelection}" and Computer: "${computerSelection}"`);
    } else if (
        (player === 'PAPER' && computer === 'SCISSORS') ||
        (player === 'SCISSORS' && computer === 'ROCK') ||
        (player === 'ROCK' && computer === 'PAPER')
    ) {
        return (result.textContent = `You lose! Computer: "${computerSelection}" beats Player: "${playerSelection}"`);
    } else {
        return (result.textContent = `You win! Player: "${playerSelection}" beats Computer: "${computerSelection}"`);
    }
}
