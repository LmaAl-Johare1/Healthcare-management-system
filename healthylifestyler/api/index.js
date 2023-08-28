const express = require('express')
const app = express()
const cors=require('cors')
const bodyParser = require('body-parser')
const db= require('./db')
var corsOptions = 
{
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200  
}
 
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.listen(8000, () => {
    console.log('Server started!')})


    // test_endpoint
app.get('/', (req,res)=>{
 res.status(200).json("done..")})


app.post('/api/insertsensitivity',async (req,res) =>{
 let sql=" INSERT INTO person_sensitivity (id_Person,id_sensitivity) VALUES (?,?) " 
 let [result,row] = await db.connection.execute(sql,[req.body.id_Person,req.body.id_sensitivity])
 res.status(200).json([result,row]) 
})
   

//ANAS
app.post('/api/insertdiseases',async(req,res)=>{
 let sql = "INSERT INTO  person_diseases (id_Person,id_Diseases) VALUES (?,?)"
 let [result,row]= await db.connection.execute(sql,[req.body.id_Person,req.body.id_Diseases])
 res.status(200).json([result,row])
})

//YASSEN
app.get('/api/allallergy',async (req,res)=>{
    let sql = "SELECT name_sensitivity FROM sensitivity  "
    let [result,row] = await db.connection.execute(sql)
    let name=result.map(x=>x.name_sensitivity)
    res.status(200).json(name)})

//eleen


app.get("/adddata",async (req, res) => {
    let  desisis = [
        {
            name:"Diabetes"
        },
        {
            name:"Osteoporosis"
        },
        {
            name:"Depression"
        },
        {
            name:"Goiter"
        }, 
        {
            name:"Anemia"
        },
        
    ]
    for (let i = 0; i < desisis.length; i++){
        let sql = "insert into diseases (name_Diseases) values (?)";
        let [result, rows] = await db.connection.execute(sql, [desisis[i].name]);
    }
    let sensitivity = [
        {
            name:"Dairy"
        },
        {
            name:"Gluten "
        },
        {
            name:"Caffeine"
        },
        {
            name:"Nuts"
        },
        {
            name:"Peanuts"
        },
    ]
    for (let i = 0; i < sensitivity.length; i++){
        let sql = "insert into sensitivity (name_sensitivity) values (?)";
        let [result, rows] = await db.connection.execute(sql, [sensitivity[i].name]);
    }
    let pharmaceutical = [
        {
            name:"Cholesterol-lowering "
        },
        {
            name:"Depressive inhibitors"
        },
        {
            name:"Calming drug"
        },
        {
            name:"Blood-clotting "
        },
    ]
    for (let i = 0; i < pharmaceutical.length; i++){
        let sql = "insert into pharmaceutical (name_pharmaceutical) values (?)";
        let [result, rows] = await db.connection.execute(sql, [pharmaceutical[i].name]);
    }

})
 
app.get('/advice', async (req, res) => {
    let sql = "SELECT *  FROM advice "
    let [result,row] = await db.connection.execute(sql)
    res.status(200).json(result)
})
    
app.put('/advice', async (req, res) => {
    console.log(req.body.adviceid)
    console.log(req.body.advicetxt)
    let sql = "UPDATE advice SET advicetxt=? WHERE adviceid=?  "
    let [result,row] = await db.connection.execute(sql,[req.body.advicetxt,req.body.adviceid])
    res.status(200).json(".....")

})
app.delete('/advice/:id', async (req, res) => {
    console.log("im here");
    console.log(req.params.id);
    let sql = "DELETE FROM advice  WHERE adviceid=?  "
    let [result,row] = await db.connection.execute(sql,[req.params.id])
    res.status(200).json(".....")

})


/*
{
    "advicetxt":value,
    

}

*/

app.post('/advice', async (req, res) => {
    let sql = "INSERT INTO  advice (advicetxt) VALUES(?) "
    let [result,row] = await db.connection.execute(sql,[req.body.advicetxt])
    res.status(200).json("result")
})

