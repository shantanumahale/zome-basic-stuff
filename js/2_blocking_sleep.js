async function sleep(delay) {
  let now = new Date().getTime();
  while (new Date().getTime() < now + delay) {
    // do nothing
  }
  // proceed when duration has passed
}

async function greeting() {
  console.log("Hello!");
  await sleep(2000);
  console.log("Bye.");
}

greeting();
