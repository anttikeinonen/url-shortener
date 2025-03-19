import express from "express";
import cors from "cors";
import routers from "./router";
import helmet from "helmet";
import sequelize from "./sequelize";

const app = express();

app.use(helmet());
app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.use(async (_req, _res, next) => {
    await sequelize.sync();
    next();
})

app.use(routers);

export default app