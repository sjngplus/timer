const userInput = process.argv.slice(2);
if(!userInput.length) return;
for(let seconds of userInput) {
  seconds = parseInt(seconds);
  if(Math.sign(seconds) === 1 && !isNaN(seconds)) {
    seconds *= 1000;
    setTimeout(() => {
      // process.stdout.write('BEEP\n');
      process.stdout.write('\x07');
    }, seconds)
  }
}



