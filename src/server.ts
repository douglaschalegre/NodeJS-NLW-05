import express from 'express'
import './db'
import { routes } from './routes'
const app = express()

app.use(express.json())
app.use(routes)

app.listen(1337, () => console.log('Server running on port 1337'))
