// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyD_XREHyNXYGNqMxNL4klZhZ3YmFST77yY",
    authDomain: "project-portal-65501.firebaseapp.com",
    databaseURL: "https://project-portal-65501.firebaseio.com",
    projectId: "project-portal-65501",
    storageBucket: "project-portal-65501.appspot.com",
    messagingSenderId: "84765311803"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
 
  var team = getInputVal('team');
  var roll = getInputVal('roll');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var project = getInputVal('project');
  var teammembers = getInputVal('teammembers');

  // Save message
  saveMessage(name, team, roll, email, phone, project, teammembers);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, team, roll, email, phone, project, teammembers){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
	team:team,
    roll:roll,
    email:email,
    phone:phone,
    project:project,
	teammembers:teammembers
  });
}