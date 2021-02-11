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

app.get("/api/v1/ffc/bronze" , async(req,res) => {
    try {
        const bronzeCustomers = await pool.query("SELECT * FROM FFC WHERE total_millage <= 15000");
        res.status(200).json({
            status : "success",
            bronzeCustomers : bronzeCustomers.rows.length,
            data :{
                customers : bronzeCustomers.rows,
            },
        });
    } catch (error) {
        console.error(error.message);
    }

});

app.get("/api/v1/ffc/silver" , async(req,res) => {
    try {
        const silverCustomers = await pool.query("SELECT * FROM FFC WHERE 15000 < total_millage  AND total_millage < 20000");
        res.status(200).json({
            status : "success",
            silverCustomers : silverCustomers.rows.length,
            data :{
                customers : silverCustomers.rows,
            },
        });
    } catch (error) {
        console.error(error.message);
    }

});

app.get("/api/v1/ffc/gold" , async(req,res) => {
    try {
        const goldCustomers = await pool.query("SELECT * FROM FFC WHERE  total_millage >= 20000");
        res.status(200).json({
            status : "success",
            goldCustomers : goldCustomers.rows.length,
            data :{
                customers : goldCustomers.rows,
            },
        });
    } catch (error) {
        console.error(error.message);
    }

});

//Get A Customer
app.get("/api/v1/ffc/customers/:id/" , async (req,res) => {
    try {
        const results = await pool.query("SELECT * FROM CUSTOMER WHERE pass_no = $1", [
            req.params.id,
        ]);
        res.status(200).json({
            status : "success",
            data :{
                customers : results.rows[0],
            },
        });
    } catch (error) {
        console.error(error.message);
    }

});


app.listen(3000, () =>{
    console.log("server is listening on port 3000");
});