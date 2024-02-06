const express = require("express")
const mongoose =require ("mongoose")
const itemRoutes=require("./routes/itemRoutes")
const app =express()

mongoose.connect("mongodb://127.0.0.1/mydb",{useNewUrlParser: true,
useUnifiedTopology: true,})
app.use(express.json())

app.use("/item", itemRoutes)
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})