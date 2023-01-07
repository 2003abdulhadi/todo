import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes"

const app: Express = express();

const PORT: string = process.env.PORT || '4000'

app.use(cors());
app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/todo').then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
}).catch(e => {
    throw e
})