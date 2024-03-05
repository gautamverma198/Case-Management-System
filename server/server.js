const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

async function startServer() {
    const client = await MongoClient.connect('mongodb+srv://shivani198277:LL3oFhY4GYD4FVA8@cluster198.pgmoccx.mongodb.net/');
    const db = client.db('Users');

    const corsOptions ={
        origin:'http://localhost:3000', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.get('/users', async (req, res) => {
        const users =  await db.collection('Credentials').find({}).toArray();
        res.send(users);
    });


    app.get('/users' , async (req , res) =>{
        try{
            const users = await db.collection('Credentials').find({}).toArray();
            res.status(201).send(users);
        } catch(error)
        {
            console.log("Error in retreiving the data " , error);
            res.status(500).send("Error retreving data");
        }
    }); 

    app.post('/createuser', async (req, res) => {
        try {
            const user = await db.collection('Credentials').insertOne(req.body);
            res.status(201).send('User created successfully');
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Error creating user');
        }
    });

    app.listen(8080, () => {
        console.log('Server is running on http://localhost:8080/');
    });
}

startServer().catch(err => {
    console.error('Failed to start server:', err);
});
