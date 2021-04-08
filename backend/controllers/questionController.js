const Question = require("../Model/Question");
const Mockset = require("../Model/Mockset");
const asyncHandler = require("express-async-handler");

exports.createQuestion = asyncHandler(async(req , res ) => {
    const {category , questionPassage , questionName, questionOptionOne, questionOptionTwo, questionOptionThree, questionOptionFour, correctOption, mockSetId} = req.body;

    const newQuestion = Question.create({
        category,
        questionPassage,
        questionName,
        questionOptionOne,
        questionOptionTwo,
        questionOptionThree,
        questionOptionFour,
        correctOption,
        mockSetId
    });

    if(!newQuestion){
        res.status(404).json({
            message: "Database is not able to connect!"
        })
    }

    if(newQuestion) {
        res.send(201).json({
            message: "Question Created"
        })
    }
});

exports.createMockSet = asyncHandler(async(req,res) => {
    const {mocksetname, online} = req.body;

    const newMocksetName = await Mockset.create({
        mocksetname,
        online
    });

    if(!newMocksetName){
        res.status(404).json({
            message: "Database not responding! Please try again later",
        })
    }

    if(newMocksetName){
        res.status(201).json({
            newMocksetName,
            message: "Mockset Created!"
        })
    }
});

exports.viewMockSet = asyncHandler(async(req,res) => {
    const allMock = await Mockset.find({});
    
    if(!allMock) {
        res.status(404).json({
            message: "Server Error! try again later."
        })
    }

    if(allMock) {
        res.json({
            mock: allMock
        }).status(200);
    }   
})

// exports.questionByMockSet = asyncHandler(async(req, res) => {

// })