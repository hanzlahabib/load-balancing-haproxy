process.on('message', function({delay}) {
    process.send(getAwaitedTime(delay))
    process.exit()
})

async function getRndInt(min, max) {
    let waitSec = Math.floor(Math.random() * (max-min) ) + min;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({"waitSec": waitSec})
        }, waitSec)
    })
}

function getAwaitedTime (time) {
    for(let i = time; i > 0; i--) {
        //do nothing just wait
        console.log(i)
    }
    return {"time": time}
 }