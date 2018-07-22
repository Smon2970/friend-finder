var friends = require("../data/friends.js");
var path= require('path');

//import friends array into file 
module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);

    })

    app.post("/api/friends", function(req, res){
      console.log(req.body)
    var FriendScores = req.body.scores;
    var scoresArray = [];
    var friendsCount = 0;
    var Match = 0;

    //loop through friends array 
    for(var i=0; i<friends.length; i++){

      var DiffInScores = 0;

      //run through friends to compare dummy data and user scores 
      for(var j=0; j<FriendScores.length; j++){
        DiffInScores += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(FriendScores[j])));
      }
      scoresArray.push(DiffInScores);
    }

   
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[Match]){
        Match = i;
      }
    }

    var finalFriend = friends[Match];
    console.log(finalFriend)
    res.json(finalFriend);

    
    friends.push(req.body);

   
    });
}
  
  