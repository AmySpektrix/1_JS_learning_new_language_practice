let counter = 0
const increment = () => {console.log(counter++)
    if (counter > 20) {clearInterval(myInterval)}
}
const myInterval = setInterval(increment, 1000);