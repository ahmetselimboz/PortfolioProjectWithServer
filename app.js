const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

require("ejs");
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.use(express.static("public"));
// app.use("/uploads", express.static(path.join(__dirname, "/src/uploads")))
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));



require("./src/config/database");
const MongoDBStore = require("connect-mongodb-session")(session);

const sessionStore = new MongoDBStore({
  uri: process.env.MONGODB_CONNECTION_STRING,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 60 * 1000,
    },
    store: sessionStore,
  })
);

app.use(flash());
app.use((req, res, next) => {
  res.locals.validation_error = req.flash("validation_error");
  res.locals.success_message = req.flash("success_message");

  res.locals.error = req.flash("error");

  res.locals.project_name = req.flash("project_name");
 

  next();
});

app.use(passport.initialize());
app.use(passport.session());


const frRouter = require("./src/routers/frRouters");
const adminRouters = require("./src/routers/adRouters");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", frRouter);
// app.use("/admin", adminRouters);


app.listen(process.env.PORT, () => {
  console.log(`Server is standing to ${process.env.PORT} port`);
});