const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Lister on ${PORT}`));