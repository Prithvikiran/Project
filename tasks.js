const express = require('express')
const router = express.Router()

router.route("/").get((req,res) => {  
    res.send("Get all tasks")
})
router.route("/").post((req,res) =>{
 res.send(" New task created")
})

router.route("/:id").put((req,res) =>{
    res.send(`task ${req.params.id} updated`)
    res.json({message:`Update contact for ${req.params.id}`});
    console.log(req.params.id)
})
router.route("/:id").delete((req,res) =>{
    res.send(`Task ${req.params.id} deleted`);
})
module.exports = router