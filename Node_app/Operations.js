require('./Config.js')
const cors=require('cors')
const bodyParser=require('body-parser')

const collection=require('./Schema.js')
const express=require('express');
const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

app.get('/msg',async(req,resp)=>{
    const data=await collection.find();
    console.log(data)
    resp.send(data)
})

app.post('/msg',async(req,resp)=>{
    console.log(req.body)
    let data= new collection(req.body);
    let result=await data.save();
    resp.send(result)
})

app.listen(5000,()=>{
    console.log('listening on 5000 port')
})