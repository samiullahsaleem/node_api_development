const mongoose = require("mongoose");


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

const Contact = mongoose.model({"contact":contactSchema});

const addNewContact = (req,res)=> {

    let newContact = new Contact(req.body);
    newContact.save((err,contact)=>{
        if(err){
            res.send(err);
        }
        else
        {
            res.send(newContact);
        }
    })
}

module.exports = addNewContact;