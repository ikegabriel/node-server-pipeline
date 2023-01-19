import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

const port = 3000;
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send({
        "text": "Hello World!"
    })
})

app.listen(port,() => {
  console.log(`Server running at port ${port}/`);
});
