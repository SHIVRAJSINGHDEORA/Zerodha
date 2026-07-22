import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import { Holding } from "./Models/holdings.js";
import { Position } from "./Models/positions.js";
import { Order } from "./Models/orders.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

import { router as HoldingsRoute } from "./Routes/HoldingsRoute.js";
import { router as PositionsRoute } from "./Routes/PositionsRoute.js";
import { router as OrdersRoute } from "./Routes/OrdersRoute.js";
import { router as AuthRoute } from "./Routes/AuthRoute.js";

const port = 8080;
const URL = process.env.MONGODB_URL;

main()
  .then(() => console.log("Data Base Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URL);
}



app.use(
  cors({
    origin: [
      process.env.DASHBOARD_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use(express.json());

app.use(cookieParser());

app.use("/", AuthRoute);
app.use("/holdings", HoldingsRoute);
app.use("/positions", PositionsRoute);
app.use("/order", OrdersRoute);

app.listen(port, () => {
  console.log("Server is listening on port 8080");
});