const firebaseConfig = {
  apiKey: "AIzaSyB7z7BxoeJy--pOgxueDk0EZuGUAdJ_Zys",
  authDomain: "contactform-a6788.firebaseapp.com",
  databaseURL: "https://contactform-a6788-default-rtdb.firebaseio.com",
  projectId: "contactform-a6788",
  storageBucket: "contactform-a6788.firebasestorage.app",
  messagingSenderId: "691504563128",
  appId: "1:691504563128:web:513175d23e44c0054d854d",
  measurementId: "G-5XV95JSZY1"};

  //initialise firebase
  firebase.initializeApp(firebaseConfig);

 var ContactFormDB= firebase.database().ref("ContactForm");

 document.getElementById('ContactForm').addEventListener("submit",submitForm);


 function submitForm(e){
  e.preventDefault();
  var name= getElementVal("name");
  var emailid= getElementVal("emailid");
  var msgContent=getElementVal("msgContent");

  saveMessages(name,emailid,msgContent);
  
 }
 const saveMessages = (name,emailid ,msgContent) =>{
    var newContactForm= ContactFormDB.push();

    newContactForm.set(
      {
        name: name,
        emailid: emailid,
        msgContent:msgContent,
      });

 };

 const getElementVal = (id) =>{
  return document.getElementById(id).value;
 };