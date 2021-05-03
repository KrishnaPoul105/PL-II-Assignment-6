const express = require('express')
const app = express()
const port = 4000
app.get('/', function (req, res) {
    res.send('root')
  })                                //Simple Root Path


app.get('/TY/', function (req, res) {
  res.send('Third Year B.Tech')
  })                                //Simple Path For /<Class>/


app.get('/TY/CSET6/', function (req, res) {
    res.send('Third Year B.Tech Computer Science T6')
  })                                //Simple path for /<Class>/<Batch>
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')
  })                                //Simple String
app.get('/Name/:name/PRNNo./:prn', function (req, res) {
  res.send(req.params)
})

app.listen(port, () => {
  console.log('app listening at http://localhost:${port}')
})

//app.get('', function (req, res) {
//    res.send(req.params)
//  })                              //Parameters
