const apiRouter = require('express').Router();
const path = require('path');
const fs = require('fs');
// import { v1 as uuidv1 } from 'uuid';
// uuidv1();
// const uuidv1 = require('uuid/v1')
const randomStr = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16).substring(1);
  }


apiRouter.get('/notes',(req,res)=> {
    fs.readFile(path.join(__dirname,'..','db','db.json'),(err,data)=>{
        if (err) {throw(err)}
        
        res.json(JSON.parse(data));
        console.log(JSON.parse(data))
    })
})

apiRouter.post('/notes',(req,res)=>{
    const { title, text} = req.body;
    const newNotes = {title,text, id: randomStr()};
    fs.readFile(path.join(__dirname,'..','db','db.json'), (err,data)=>{
        if (err) throw err;
        const noteParse = JSON.parse(data);
        noteParse.push(newNotes);
        fs.writeFile(path.join(__dirname,'..','db','db.json'), JSON.stringify(noteParse), (err,data)=>{
            if (err) throw err;
            res.json(data)
            console.log("success!")
        })
    })
});

apiRouter.delete('/notes/:id',(req,res)=>{
    const id = req.params.id;
  
    fs.readFile(path.join(__dirname, '..','db','db.json'), (err, data) => {
        if (err) throw err;
        const parseNotes = JSON.parse(data);
        const filterNotes = parseNotes.filter(note => note.id !== id);

        fs.writeFile(path.join(__dirname, '..','db','db.json'), JSON.stringify(filterNotes), (err, data) => {
        if (err) throw err;
        res.json(data)
        console.log("Deleted!")
        })
  })
})


module.exports = apiRouter