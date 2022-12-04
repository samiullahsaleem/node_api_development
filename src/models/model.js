const mongose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName:{
        type: "string",
        required:"Enter First Name"
    },
    lastName:{
        type: "string",
        required:"Enter last Name"
    },
    email:{
        type: "string",
    },
    company:{
        type: "string",
    },
    phone:{
        type: "number",
    },
    created_date:{
        type: "date",
        default: Date.now
    }

})

module.exports  = contactSchema;
