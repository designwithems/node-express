const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine' , 'ejs')

app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/about-us', (req,res)=>{
  res.render('index')
})
app.get('/services', (req,res)=>{
  res.render('services')
})
app.get('/contact-us', (req,res)=>{
  res.render('contact')
})

app.use(express.static('src'))
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/css'));
app.use('/assets',express.static(__dirname + 'public/assets'));

app.listen(3000, ()=>{
  console.log('Listening on port ' + 3000)
})