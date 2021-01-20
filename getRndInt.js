process.on('message', async function({min, max}) {
    process.send(await getRndInt(min, max))
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