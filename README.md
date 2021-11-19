# Backend issue
1. // TODO FIX USER BEING ABLE TO REGISTER SAME FRIEND ID AND EMAIL
// THE ERROR IS NOT GOING OFF WHEN DB IS FINDONE BY EMAIL OR FRIEND ID 
// Should be if the user exist they cannot create a new user
- fixed to where the user can search by friendId
```js
router.get("/path/:friendId", (req, res) => {
 // figured out how to have the user be able to place a friendId to locatea player
  // before i was doing {friendId}
  // and trying parseInt because the error kept saying value is a string
  // then i realized by going here that app.get('/path/:friendId', function(req, res) {
  //   res.send("tagId is set to " + req.params.friendId);
  // }); sent back the response of the friendId i put in the url
  // it made me understand that the {friendId} i was using before in db.User.findOne
  // may have not been getting a value to pass in it so it didnt know?
  // router.get() has to have /path/:friendId and db.User.findOne(friendId: req.params.friendId)
  // friendId had to be defined so that was defined with req.params.friendId
  //Postman http://localhost:8000/api/users/path/179940588
  db.User.findOne({friendId: req.params.friendId})
    .then((user) =>{
      res.send(user)
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});
```
# code save
- backend/routes/users.js
    - register route save later
    ```js
     const friendIdExist = db.User.findOne({friendId: req.body.friendId})
  if(friendIdExist){
    return res.status(400).json("Someone has already registered this Friend ID, are you sure this ID belongs")
  }
    ```

