// First Task Concurrency 
function runTask(arg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`This task was ran ${arg} times`)
        }, 2000);
    })
}
runTask(5)
    .then((result) => {
        console.log(result); //Output: "This task was ran ${} times"
    })