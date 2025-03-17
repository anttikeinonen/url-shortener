import express from "express";
import cors from "cors";
import routers from "./router";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(routers);

export default app