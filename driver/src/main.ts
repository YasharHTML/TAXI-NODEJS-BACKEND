import * as dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 3000

import express from "express"
import { router } from "./router";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.use("/api/driver", router);

app.listen(PORT, () => {
    console.log(`DRIVER running on PORT:${PORT}`)
})