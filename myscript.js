const firebaseConfig = {
    apiKey: "AIzaSyC_I__1qstpQlYhvMeMU8Vtq81wZe-kMm8",
    authDomain: "passcode-keeper.firebaseapp.com",
    databaseURL: "https://passcode-keeper.firebaseio.com",
    projectId: "passcode-keeper",
    storageBucket: "passcode-keeper.appspot.com",
    messagingSenderId: "161762048475",
    appId: "1:161762048475:web:10bc5ea58fc3ef3c9b8ffe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Reference Users Collection

//reference to Passcodes Collection
// var passcollectionRef = firebase.database();
// var ref = database.ref('Userbase/user1');



//Listen to form submission
document
    .getElementById("inputform")
    .addEventListener("submit",newPasscode);

//document.getElementById("notes").addEventListener("click",removeItem);

function newPasscode(e){
    e.preventDefault();

    //get values
    var title = getInputValue('notetitle')
    var account = getInputValue('accountused')
    var userpass = getInputValue('password')
    var desc = getInputValue('body')
    
    
 }

//Function to get form Values
function getInputValue(id){
    return document.getElementById(id).value;
}