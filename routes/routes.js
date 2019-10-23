const studentClassRoutes = require("./students-class");

const appRouter = (app, fs) => {
  // if no path provide, this will display by default
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  // run student route
  studentClassRoutes(app, fs);
};

module.exports = appRouter;
