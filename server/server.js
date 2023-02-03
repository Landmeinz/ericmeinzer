const express = require('express');
require('dotenv').config();
const app = express();

const sessionMiddleware = require('./modules/session-middleware');
app.use(sessionMiddleware);

// App Set //
app.set("port", process.env.PORT || 5050);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// ----- Listen ----- //
app.listen(app.get("port"), () => {
  console.log(`server connected at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});