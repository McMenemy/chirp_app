var express = require("express");
var router = express.Router();

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if(req.method === "GET"){
        return next();
    }
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/#login');
}

// api for posts
router.route("/posts", isAuthenticated)
    
    //create new post
    .post(function(req, res){
        
        //TODO create a new post in database
        res.send({message:"TODO create a new post in database"});
    })
    
    .get(function(req, res){
        
        //TODO get all posts in database
        res.send({message:"TODO get all posts from database"});
    });
    
// api for a specific post
router.route("/posts/:id")

    //create
    .put(function(req, res){
        return res.send({message:"TODO modify exist using param " + req.param.id});
    })
    
    .get(function(req, res){
        return res.send({message:"TODO get an existing post by using param " + req.param.id});
    })
    
    .delete(function(req, res){
        return res.send({message: "TODO delete an existing post by using param " + req.param.id});
    });
    
module.exports = router;