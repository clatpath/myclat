const mongoose = require("mongoose");


const questionSchema = mongoose.Schema(
    {
        category : {
            type: String
        },
        questionName : {
            type: String
        },
        questionOptionOne : {
            type: String
        },
        questionOptionTwo : {
            type: String
        },
        questionOptionThree : {
            type: String
        },
        questionOptionFour : {
            type: String
        },
        correctOption : {
            type: String
        },
        mockSetName: {
            type: String
        },
    },
    {
        timestamps: true,
    }
)

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;