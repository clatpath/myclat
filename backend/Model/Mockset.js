const mongoose = require("mongoose");


const MocksetSchema = mongoose.Schema(
    {
        mocksetname: {
            type: String
        },
        online: {
            type : Boolean,
            default : false
        }
    },
    {
        timestamps: true,
    }
)

const Mockset = mongoose.model("Mockset", MocksetSchema);

module.exports = Mockset;