const express = require ("express");
const app = express();
const pool = require("./db");

app.use(express.json()); // req body

//Routes

//Get All Postgres

app.get("/customer" , async(req,res) => {
    try {
        const allPostgres = await pool.query("SELECT * FROM CUSTOMER");

        res.json(allPostgres.rows);
    } catch (error) {
        console.error(error.message);
    }

});

//Get A Postgres

app.get("/customer/:id" , async (req,res) => {
    const {id} = req.params.id;
    try {
        const customer = await pool.query("SELECT * FROM CUSTOMER WHERE pass_no = $1",
        [id]
        );
        
        res.json(customer.fields);
    } catch (error) {
        console.error(error.message);
        
    }
});



//Create A Postgres

app.post("/airline" , async(req,res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
});

//Upadate A Postgres

//Delete A Postgres 
app.listen(3000, () =>{
    console.log("server is listening on port 3000");
});