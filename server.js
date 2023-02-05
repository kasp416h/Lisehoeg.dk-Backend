require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors')
const path = require("path");
const fileUpload = require('express-fileupload');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
    app.use(logger);
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(fileUpload());

app.use("/static", express.static(path.join(__dirname, 'slideshow')));
app.use(express.static(path.join(__dirname, "..", "..", "Lisehoeg.dk-Frontend", "frontend", "build")));
// app.use(express.static(path.join(__dirname, "public" )));

app.get(`/${process.env.SECRET_TOKEN}`, require('./routes/authRoute'));

app.get("/api/slidenauth", require('./routes/clientRoute'));

app.post("/unlinkFile", require('./routes/unlinkFileRoute'));

app.post("/appendFile", require('./routes/appendFileRoute'));

app.all("*", require('./routes/404Route'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server er startet på http://localhost:${PORT}`));