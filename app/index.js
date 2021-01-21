const app = require('express')();
const port = process.env.PORT
app.get('/delay', async (req, res) => { 
    let startTime = new Date();
    let response = getAwaitedTime(parseInt(req.query.ms))
    let endTime = new Date();
    res.send({responseTime: Math.floor(endTime.getTime() - startTime.getTime()), response: response, port: port});
})

app.listen(port, () => {
    console.log('App is listening on', + port);
})

function getAwaitedTime (time) {
    for(let i = time; i > 0; i--) {
        //do nothing just wait
        console.log(i)
    }
    return {"time": time}
 }