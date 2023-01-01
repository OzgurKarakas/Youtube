const express = require("express");
const { user, videos } = require("./Data");
const app = express();
app.use(express.json());


app.get("/api/user/1", (req,res)=>{
    res.json(user);
});

app.get("/api/videos", (req,res)=>{
    res.json(videos);
})


app.listen(5000, () => {
    console.log("Server is running on port " + "http://localhost:5000");
})