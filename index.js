const app = require('express')();
const { fork } = require('child_process')
app.get('/delay', async (req, res) => { 
    let startTime = new Date();
    let childProcess = fork('./getAwait.js');
    childProcess.on('message', response => {
        console.log(response)
                let endTime = new Date();
                res.send({responseTime: Math.floor(endTime.getTime() - startTime.getTime()), response: response});
    })
    childProcess.send({delay: parseInt(req.query.ms)});


})

app.listen('1234', () => {
    console.log('App is listening on 1234');
})