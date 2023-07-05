import { targetValidator } from '../validators/todo-validators'
import { NextFunction, Response, Request } from "express"
import { Statuses } from '../types'

export const targetValidatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const target = targetValidator(req.body.target)
    if (target != req.body.target)
        res.status(Statuses.BadRequest).send({ message: target })
    else
        next()
}