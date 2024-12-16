// Second Task Concurrency
console.log("Let's start the task");
const task1 = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === "throw error") {
        reject("Intentional error occurred")
      } else {
        resolve(`Processed: ${input}`) 
      } 
    }, 1000)
  })  
}

async function perform(arg) {
  try {
    const result = await task1(arg);
    console.log("The resolved value is:", result);
  } catch (error) {
    console.error("An error occurred:", error);
  }  
}

perform("error")
