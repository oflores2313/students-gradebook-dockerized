const studentsClassRoutes = (app, fs) => {

    //variables
    const dataPath = 'data/students-class.json';
    app.use(function(req, res, next){
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        res.header("Access-Control-Allow-Headers", "Origin , X-Requested-With, Content-Type, Accept");

        next();
    })

    //reads the json file provided in the data folder
    //will throw an error if it cannot read it
    app.get('/students', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err){
                throw err;
            }
            res.send(JSON.parse(data))
        });
    });
};

module.exports = studentsClassRoutes;