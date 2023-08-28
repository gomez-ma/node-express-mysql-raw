const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.json({message: "Welcome to itd102 application"});
});

require("./app/routes/tutorial.routes.js")(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});