import { signupdb , logindb } from "./supabase.js"
import express from "express"


const server = express()
server.use(express.json());
 server.use((req,res,next)=>{
        //ajoute un header a la reponse du serveur 
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        if (req.method === "OPTIONS") {
        return res.sendStatus(200); // <- répond au preflight
    }
        next()
    })  


server.post("/users/signup", async (req, res) => {
  try {
    const result = await signupdb(req.body) 
    res.status(200).send({ success: true, data: result })
  } catch (error) {
    res.status(500).send({ success: false, error: error.message })
  }
})



server.post("/users/login" , async (req,res)=>{
    try{
        const result = await logindb(req.body)
        res.status(200).send({success:true , error: error.message })        
    }catch (error) {
        res.status(500).send({ success: false, error: error.message })
    }

})


server.listen(3000, ()=>{
    console.log('Server Listening on PORT:3000 ...');
    
})