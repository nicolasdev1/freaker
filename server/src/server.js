import dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'

import routes from './routes'
import './database/connection'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3334

app.listen(port, () =>
  console.log(`Server running on port ${port}...`)
)
