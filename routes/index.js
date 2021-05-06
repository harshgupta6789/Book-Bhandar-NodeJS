var express = require('express');
var router = express.Router();
var User = require('../models/user');
var List = require('../models/list');
var passport = require('passport');
var axios = require('axios');
var middleware = require('../middleware');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req,res){
  res.render('register');
})

router.post('/register', function(req,res){
  var newUser = new User({username: req.body.username});
  console.log(req.body.username);
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render('register');
    }
    passport.authenticate("local")(req,res,function(){
      res.redirect("/lists");
    });
  });
});

router.get('/login', function(req,res,next){
  res.render('login');
})

router.post('/login', passport.authenticate("local",
{
  successRedirect: "/lists",
  failureRedirect: "/login"
}), function(req,res){
  
});

router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

router.get("/search", middleware.isLoggedIn, function(req,res){
  res.render("search",{"data": []});
})

router.post("/search", function(req,res){
  
  var search = req.body.search;
  var type = req.body.searchType;
  if(type=="author"){
    search = {author: search}
  }else if(type=="title"){
    search = {title: search}
  }else{
    search = {isbn: search}
  }
  console.log(search);
  
  axios.get('http://openlibrary.org/search.json', {
      params: search
  })
  .then(function (response) {
    console.log("dwd");
      // console.log(response);
      var data = response["data"]["docs"];
      console.log(data);
      res.send(JSON.stringify(data));
      // if(req.user){
      //   var addList = [];
      //   List.find({}, function(err,foundList){
      //     if(err){
      //       console.log(err);
      //     }else{
      //       foundList.forEach(function(list){
      //           console.log(req.user._id, list.user.id);
      //           if(req.user._id.equals(list.user.id)){
      //             addList.push(list);
      //           }
      //       })
      //       console.log(addList);
      //       res.render('search',{"data":data, "list":addList});
      //       console.log(data);
      //     }
      //   })
      // }
  })
  .catch(function (error) {
      console.log(error);
  })
  .then(function () {
      console.log("DONEEEE!")
  });
})

module.exports = router;
