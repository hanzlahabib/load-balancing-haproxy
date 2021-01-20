const app = require('express')();
const { fork } = require('child_process')
app.get('/delay', async (req, res) => { 
    let startTime = new Date();
    // let childProcess = fork('./getRndInt.js');
    // childProcess.on('message', response => {
    //     setTimeout(() =>{
    //             let endTime = new Date();
    //             res.send({responseTime: Math.floor(endTime.getTime() - startTime.getTime()), response: response});
    //         }, response.waitSec)
    // })

    // childProcess.send({"min": 2000, "max": 4000});
    // const response = await getRndInt(2000, 4000)
    getAwaitedTime(parseInt(req.query.ms))
    // console.log(response)
    let endTime = new Date();
    res.send({responseTime:endTime.getTime() - startTime.getTime(), response: req.query.ms});


})

app.listen('1234', () => {
    console.log('App is listening on 1234');
})

async function getRndInt(min, max) {
    let waitSec = Math.floor(Math.random() * (max-min) ) + min;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({"waitSec": waitSec})
        }, waitSec)
    })
}

async function getAwaitedTime (time) {
   for(let i = time; i > 0; i--) {
       //do nothing just wait
   }
   return true
}