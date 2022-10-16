const express = require("express")

const router = express.Router()
const fs = require('fs');

router.get('/', (req, res)=>{
    let dino = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dino);
    console.log(dinoData)
    res.render('dinosaurs/index',{myDinos: dinoData})
    // res.send('jey')
})

//express show route for dinosaurs (lists one dinosaur)
router.get('/:idx', (req, res) => {
    // get dinosaurs
    let dinosaurs = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(dinosaurs);
  
    //get array index from url parameter
    let dinoIndex = parseInt(req.params.idx);
    console.log('hey nigga', req.params)
  
    //render page with data of the specified animal
    res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]});
  });


module.exports = router;