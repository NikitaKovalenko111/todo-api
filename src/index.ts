import express, { Request, Response, Express } from "express"
import { todoRouter } from "./routes/todo-router"
import { Statuses } from "./types"
import cors from 'cors'
import morgan, { TokenIndexer } from "morgan"
import { log, success } from "./utils"
import chalk from 'chalk'

const server: Express = express()
const port: string | number = process.env.PORT || 3000

const parseJsonMiddleware = express.json()
const parseUrlMiddleware = express.urlencoded({ extended: true })
server.use(cors())
server.use(morgan(function (tokens, req: Request, res: Response) {
  return chalk.cyan.bold(`METHOD: ${tokens.method(req, res)} | URL: ${tokens.url(req, res)} - ${tokens['response-time'](req, res)} ms | STATUS: ${tokens.status(req, res)} | IP: ${tokens['remote-addr'](req, res)} | DATE: ${tokens.date(req, res)}`)
}))
server.use(parseJsonMiddleware)
server.use(parseUrlMiddleware)
server.use('/todos', todoRouter)

server.get('/', (req: Request, res: Response) => {
  res.sendStatus(Statuses.NotFound)
})

server.listen(port, () => {
  console.log(success(`THE SERVER HAS BEEN STARTED ON PORT: ${port}`));
})