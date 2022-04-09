var firebaseConfig = {
      apiKey: "AIzaSyCPdtiAI3R4k5wkio6xdjlUwSDHEK9X530",
      authDomain: "kwitter2-7623e.firebaseapp.com",
      databaseURL: "https://kwitter2-7623e-default-rtdb.firebaseio.com",
      projectId: "kwitter2-7623e",
      storageBucket: "kwitter2-7623e.appspot.com",
      messagingSenderId: "99229122071",
      appId: "1:99229122071:web:db17d77430c071e3dae652",
      measurementId: "G-T5SY9PMT4P"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var room_name=localStorage.getItem("room_name");
var user_name=localStorage.getItem("username");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
  var message = document.getElementById("send_message").value;
  firebase.database().ref(room_name).push({
        like:0,
        message:message,
        username:user_name
  });
  document.getElementById("send_message").value="";

}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}