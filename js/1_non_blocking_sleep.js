async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function greeting() {
  console.log("Hello!");
  await sleep(2000);
  console.log("Bye.");
}

greeting();
