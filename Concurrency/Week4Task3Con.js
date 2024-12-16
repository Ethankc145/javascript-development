// Third Task Concurrency
const task1 = (input) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === "throw error") {
          reject("Intentional error occurred")
        } else {
          resolve(`${input} times`) 
        } 
      }, 1000)
    })  
  }
  console.log("Let's start the task");
  async function perform(arg) {
    try {
      const result = await task1(arg);
      console.log("This task was ran", result);
    } catch (error) {
      console.error("An error occurred:", error);
    }  
  }

for (let index = 0; index < 5; index++) {
    perform(index) 
}