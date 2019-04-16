import express from 'express'
import user from './controllers/user'
import hello from './controllers/hello-world'
import swaggerDoc from './swaggerDoc'
import bodyParser from 'body-parser'
import auth from './middlewares/auth'

const app = express()

app.use(bodyParser.json({'limit':'100kb'}))

// sequence is important
// TODO: only certain api no need auth
app.use('/api/user', user)

app.use('/api',auth)

// need token
app.use('/api/hello', hello)

// generate and show swagger document
app.use('/api-docs', swaggerDoc)

const server = app.listen(3333, () => {
	console.log(`Server started at ${server.address().port}`)
})
export default app