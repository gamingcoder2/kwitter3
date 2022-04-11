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
console.log(firebase_message_id);
console.log(message_data);
username=message_data['username'];
like=message_data['like'];
message=message_data['message'];
name_with_tag="<h4> "+ username + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+" "+message+"</h4>";
button_with_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button><hr>";
row=name_with_tag+message_with_tag+button_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


function send(){
  var message = document.getElementById("send_message").value;
  if(message!=""){

  
  firebase.database().ref(room_name).push({
        like:0,
        message:message,
        username:user_name
  });
}
  document.getElementById("send_message").value="";

}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function update_like(message_id){
buttonid=message_id;
likes=document.getElementById(buttonid).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}