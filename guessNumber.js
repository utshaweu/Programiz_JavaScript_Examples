function guessNumber() {
  const random = Mth.floor(Math.random() * 10) + 1;

  let number = parseInt(prompt("Guess a number from 1 to 10: "));

  while (number != random) {
    number = parseInt(prompt("Guess a number from 1 to 10: "));
  }
  if (number == random) {
    console.log(`You guessed the correct number.`);
  }
}

guessNumber();
