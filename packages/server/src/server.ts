import express from 'express'
import router from './routes'

const app = express()

app.use(router)

app.use(express.json())

const port = 4444

app.listen(4444, () => {
  console.log(`Server started in port ${port}`)
})
