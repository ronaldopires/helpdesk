const express = require('express')
const port = 3000
const path = require('path')
const createError = require('http-errors')

const indexRoute = require('./routes/index')
const newRequestRoute = require('./routes/new-request')
const requestRoute = require('./routes/requests')
const myRequestRoute = require('./routes/my-requests')
const profileRoute = require('./routes/profile')
const helpRoute = require('./routes/help')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', indexRoute)
app.get('/novo-chamado', newRequestRoute)
app.get('/chamados', requestRoute)
app.get('/meus-chamados', myRequestRoute)
app.get('/meu-perfil', profileRoute)
app.get('/ajuda', helpRoute)
app.get('/login', loginRoute)
app.get('/cadastro', registerRoute)

//404
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})
app.listen(port, err => {
  console.log(`Server is listering on ${port}`)
})
