const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const { MessagingResponse } = require("twilio").twiml;

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message("Your SMS assistant is online.");

  res.type("text/xml");
  res.send(twiml.toString());
});

