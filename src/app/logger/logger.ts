import pino from "pino";

const logger = pino({
  browser: {
    write: {
      info: (o) => {},
    },
  },
  redact: [],
});

export default logger;
