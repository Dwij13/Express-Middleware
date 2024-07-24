const express = require("express")
const app = express();
const port = 3000;


const logDetails =(req,res,next)=>{

    const date = new Date().toString();
    const requestUrl = req.originalUrl;
    console.log(`[${date}]
        Requested URL :${requestUrl};
    `)
    next();

}
app.use(logDetails);

app.get('/',(req,res)=>{
    res.send("hello user");
})
app.listen(port,()=>{
    console.log("Server is running on port 3000");
})