const firebaseConfig = {
  apiKey: "AIzaSyC0KXJxuj-3d8inVgokEymIr2dzKq5MX0I",
  authDomain: "myproject-9e2a0.firebaseapp.com",
  databaseURL: "https://myproject-9e2a0-default-rtdb.firebaseio.com",
  projectId: "myproject-9e2a0",
  storageBucket: "myproject-9e2a0.appspot.com",
  messagingSenderId: "315824946287",
  appId: "1:315824946287:web:6b4431c4b6bd6dd290219a"
};
  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};