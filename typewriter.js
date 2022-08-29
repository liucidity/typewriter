const sentence = 'hello there from lighthouse labs';
let timerIncrement = 0;
for (const char of sentence) {
  timerIncrement += 50;

  setTimeout(() => {
    process.stdout.write(char);
  },timerIncrement);
}
setTimeout(() => {
  process.stdout.write('\n');
},2000);