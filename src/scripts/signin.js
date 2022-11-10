// login information
const username = document.querySelector("#url_user");
const password = document.querySelector("#url_pass");
const login_btn = document.querySelector("#login_btn");

// reference database

const db = firebase.database();

var ref = firebase.database().ref();


login_btn.addEventListener("click", function(e){
    //defaulting log in success to false


    
    //obtain snapshot before beginning function
    ref.on("value", function(snapshot) {

        /*
        Example of how to extract value of username from record
            console.log(snapshot.child("user-credentials/-NFQ8pTbU9-HDQd8WnbR/username").val());
        */
            
            //creating query variable beginning at top of user credentials domain, ordered by their keys
            var query = firebase.database().ref("/user-credentials/").orderByKey();
    
            query.once("value").then(function(snapshot) {
                
                //moving through each account's records
                snapshot.forEach(function(childSnapshot) {
                
                //setting account ID to the key of child snapshot
                let accID = childSnapshot.key;

                //setting account username to child snapshot's username
                let accUser = childSnapshot.child("/username").val();
                let accPass = childSnapshot.child("/password").val();

                //if input and record match
                if (accUser == username.value)
                {
                    //display what the record's key is for attempted log in
                    console.log("User is logging in with Account ID: " + accID);

                    if (accPass == password.value)
                    {
                        console.log("User provided correct password for this account.");
                        console.log("Log in attempt is successful");
                    }
                    else
                    {
                        console.log("Incorrect password")
                    }
                    
                }
                
                });

        }, function (error) {
            // if any error, display error code
            console.log("Error: " + error.code);
        });

    
    });
});

