import express, { Request, Response, Express } from "express"
import { todoRouter } from "./routes/todo-router"
import { Statuses } from "./types"
import cors from 'cors'

const server: Express = express()
const port: string | number = process.env.PORT || 3000

const parseJsonMiddleware = express.json()
const parseUrlMiddleware = express.urlencoded({ extended: true })
server.use(cors())
server.use(parseJsonMiddleware)
server.use(parseUrlMiddleware)
server.use('/todos', todoRouter)

server.get('/', (req: Request, res: Response) => {
  res.send(Statuses.NotFound)
})

server.listen(port, () => {
  console.log(`The server has been started on the port: ${port}`);
})