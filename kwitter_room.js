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
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";
function addroom(){
      room_name = document.getElementById("room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirect_to_roomname(name){
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location="index.html";
}