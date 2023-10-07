import mongoose from "mongoose"
import { success, error } from "./utils"
import 'dotenv/config'

const URL: string | undefined = process.env.DB_CONNECTION

const dbConnect = () => {
    if (URL) {
        mongoose.connect(URL).then(() => {
            console.log(success('DB HAS BEEN CONNECTED SUCCESFULLY'))
        })
        .catch((err) => {
            console.log(error(`DB HASN\'T BEEN CONNECTED, ERROR: ${err}`))
        })
    }
}
    
export default dbConnect