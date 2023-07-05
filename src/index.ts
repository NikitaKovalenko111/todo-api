import express, { Request, Response, Express } from "express"
import bodyParser from "body-parser"
import { todoRouter } from "./routes/todo-router"
import { Statuses } from "./types"

const server: Express = express()
const port: string | number = process.env.PORT || 3000

const parseMiddleware = bodyParser({})
server.use(parseMiddleware)
server.use('/todos', todoRouter)

server.get('/', (req: Request, res: Response) => {
  res.send(Statuses.NotFound)
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})