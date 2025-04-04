const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

app.use(
  session({
    secret: "Mysecreefbtn code",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.flash("success","Welcome back !!")
  res.render("dashboard.ejs", { name, message: req.flash("success") });
});

// app.get("/random", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   console.log(req.session);
//   res.send(
//     `You visit this page ${req.session.count} times<button>hii</button>`
//   );
// });

// app.get("/random/list", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(
//     `You visit this page ${req.session.count} times<button>hii</button>`
//   );
// });

app.listen(3000, () => {
  console.log("app is listening at port 3000");
});
