const express = require("express");
const router = express.Router();
const Student = require('../model/test');
const mongoose = require('mongoose');
// const students = [];


router.get('/',(req,res,next)=>{
    Student.find()
    .then(result=>{
        console.log("Done");
        res.status(200).json({
            studentData: result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});
router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Student.findById(req.params.id)
    .then(result=>{
        console.log("Done");
        res.status(200).json({
            student: result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
});


router.post('/',(req,res,next)=>{
    const student = new Student({
        name: req.body.name,
        roll_no: req.body.roll_no
    });
    student.save()
    .then(result=>{
        console.log("Saved");
        res.status(200).json({
            newStudent: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
});


module.exports = router;


// res.status(200).json({
//     msg: "This is test post request"
// })
// console.log(req.body);
// students.push(req.body);
// console.log(students);
// // console.log(students[0].id);
