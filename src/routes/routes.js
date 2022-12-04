const addNewContact = require("../controllers/controllers.js")
const routes=(app)=>
{
    app.route("/contact")
    .get((req,res)=>{
        res.send("Gett Request Successful");
    })

    .post((req,res)=>{
        addNewContact(req.body);
    })

    app.route("/contact/:contactId")
    .put((req,res)=>{
        res.send("Gett Request Successful");
    })
    .delete((req,res)=>{
        res.send("Gett Request Successful");
    })

}

module.exports = routes;
