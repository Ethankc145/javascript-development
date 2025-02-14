const name = "Joe"
const height = 7
const message = `${name} is ${height} tall.`

function isEven(number) {
    if (number < 0) throw new Error("Number must be positive.")
    if (typeof number !== "number") throw new error("Number myst be a number.")
    return number % 2 === 0
}

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            JSON.stringify({
                name: "Jon Snow",
                age: 30,
                email: "jonsnow@gmail.com"
          })
        );
      }, 3000);
    });
};

module.exports = { name, height, message, isEven, getData }
