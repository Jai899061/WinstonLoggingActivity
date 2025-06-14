import axios from "axios";
import express from "express";
import morgan from "morgan";
import winston from "winston";

const app = express();
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "http",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    json()
  ),
  transports: [new winston.transports.Console()],
});

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  }
);

app.use(morganMiddleware);

app.get("/crypto", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api2.binance.com/api/v3/ticker/24hr"
    );
    const tickerPrice = response.data;
    res.json(tickerPrice);
  } catch (err) {
    logger.error(err);
    res.status(500).send("Internal server error");
  }
});

app.listen(4000, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
    return;
  }
  console.log("Server is running on port 4000");
});
