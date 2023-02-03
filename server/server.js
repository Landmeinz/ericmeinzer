const express = require('express');
require('dotenv').config();
const app = express();

const sessionMiddleware = require('./modules/session-middleware');
app.use(sessionMiddleware);

// App Set //
app.set("port", process.env.PORT || 3000);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.on('clientError', (err, socket) => {
    console.error(err);
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });

// ----- Listen ----- //
app.listen(app.get("port"), () => {
  console.log(`server connected at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});