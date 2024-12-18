// Require the paths and
const express = require('express')
const app = express()
const path = require('path')
const getMovieList = require('./utils/movie')

const PORT = process.env.PORT || 3000;

// app.use to connect folders together with dirname 
app.use(express.static(path.join(__dirname, "../client-side/public")))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client-side/public", "html/index.html"));
});

app.get("/movie", (req, res) => {
    if (!req.query.search){
        res.send({
           error: "You did enter valid choice.",
        }); return
    }
 getMovieList(req.query.search, (error, data) =>{
    if (error){
        res.send({ error });
        return;
    }
    res.send(data);
 })
})
































app.listen (PORT, () => {
    console.log(`The server that is running is ${PORT}`)
})