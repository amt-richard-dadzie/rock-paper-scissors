
const userOptions ={
    rock: 'images/icon-rock.svg',
    paper: 'images/icon-paper.svg',
    scissors: 'images/icon-scissors.svg'
}

let SCORE = 0;

const pickUserHand = hand => {
    console.log(hand);

    //Hide the current game-venue when the user picks an button
    let venue = document.querySelector(".game-venue");
    venue.style.display = "none";

    //show the page with the hand picked
    let contest = document.querySelector(".competition");
    contest.style.display = "flex";

    //set the user's Pick
    let back = document.getElementById("background");
    switch(hand){
        case 'paper':
            back.style.background = " linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
            break;
        case 'scissors':
            back.style.background = " linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
            break;
        case 'rock':
            back.style.background = " linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
            break;
        default:
            back.style.background = " linear-gradient(to bottom, hsl(40, 89%, 62%), hsl(30, 89%, 65%))";
            break;
    }

    document.getElementById("userPick").src = userOptions[hand];

    const pickByComputer = pickComputerHand();

    checkWinner(hand, pickByComputer);
}

//computer picks a button

const pickComputerHand = () => {

    //get  the background of the computer's pick
    let cBack = document.getElementById("cBackground");
    let options = ['rock', 'paper', 'scissors'];

    const randomPick = Math.floor(Math.random() * options.length);
    const computerPick = options[randomPick];

    switch(computerPick){
        case 'paper':
            cBack.style.background = " linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
            break;
        case 'scissors':
            cBack.style.background = " linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
            break;
        case 'rock':
            cBack.style.background = " linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
            break;
        default:
            cBack.style.background = " linear-gradient(to bottom, hsl(40, 89%, 62%), hsl(30, 89%, 65%))";
            break;
    }
    document.getElementById("computerPick").src = userOptions[computerPick];

    return computerPick;
}

const checkWinner = (userHand, computerHand) => {
    if (userHand === computerHand){
        setWinner("It's a tie");
    }
    if (userHand === 'paper' && computerHand === 'rock'){
        setWinner('YOU WIN!');
        updateScore(SCORE + 1);
    }
    if (userHand === 'paper' && computerHand === 'scissors'){
        setWinner('YOU LOSE!');
    }
    if (userHand === 'rock' && computerHand === 'paper'){
        setWinner('YOU LOSE!');
    }
    if (userHand === 'rock' && computerHand === 'scissors'){
        setWinner('YOU WIN!');
        updateScore(SCORE + 1);
    }
    if (userHand === 'scissors' && computerHand === 'rock'){
        setWinner('YOU LOSE!');
    }
    if (userHand === 'scissors' && computerHand === 'paper'){
        setWinner('YOU WIN!');
        updateScore(SCORE + 1);
    }
}

const setWinner = winner => {
    document.getElementById("winner").innerHTML = winner;
}

const updateScore = score => {
    SCORE = score;
    console.log(score);
}