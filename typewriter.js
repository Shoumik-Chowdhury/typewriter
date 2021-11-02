const sentence = "hello there from lighthouse labs";

let n = 500;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, n);
  n += 140;
};

setTimeout(() => console.log('\n'), n)