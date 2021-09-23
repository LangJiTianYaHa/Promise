let express = require('express')

let app = express()
app.use(express.static(__dirname+'/public'))

app.get('/test',function (req,res) {
  let personArr = [{name:'peiqi',age:12},{name:'suxi',age:16}]
  res.setHeader('Access-Control-Allow-Origin','*')
  res.send(personArr)
})

app.listen(3000,function (err) {
  if(err) console.log(err)
  else {
    console.log('演示corsp解决跨域服务器，启动成功了！')
  }
})