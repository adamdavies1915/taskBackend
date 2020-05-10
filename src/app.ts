import express from "express";
import cors from "cors";

import { trackRouter } from "./routes/track";

const app = express();
const port = 3000;

app.use(cors());

app.use("/track", trackRouter);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));

module.exports = app;
