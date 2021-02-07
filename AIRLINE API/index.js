const express = require ("express");
const app = express();
const pool = require("./server/db");
const cors = require("cors");

app.use(express.json()); // req body
app.use(cors());
//Routes

//Get All Customers

app.get("/api/v1/customers" , async(req,res) => {
    try {
        const allCustomers = await pool.query("SELECT * FROM CUSTOMER");
        res.status(200).json({
            status : "success",
            allCustomers : allCustomers.rows.length,
            data :{
                customers : allCustomers.rows,
            },
        });
    } catch (error) {
        console.error(error.message);
    }

});

//Get A Customer

/*app.get("/api/v1/customers/:id/" , async (req,res) => {
    const {id} = req.params.id;
    try {
        const customer = await pool.query("SELECT * FROM CUSTOMER WHERE pass_no = $1",
        [id]
        );
        
        res.json(customer.fields);
    } catch (error) {
        console.error(error.message);
        
    }
});*/



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