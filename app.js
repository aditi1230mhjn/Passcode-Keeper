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

//Login / signup functions:
const username = getInputValue('username');
const userpass = getInputValue('userpass');

//Add Userlogin Event handling
document
    .getElementById('signin')
    .addEventListener('click', e =>{
    //get email and password
    const auth = firebase.auth();
    const promiseLogin = auth.createUserWithEmailAndPassword(username, userpass);
    promiseLogin.catch(e => console.log(e.message));
});
//User Signup Event Listener
document
    .getElementById('signup')
    .addEventListener('click', e =>{
    //get email and password
    const auth = firebase.auth();
    const promiseLogin = auth.signInWithEmailAndPassword(username, userpass);
    promiseLogin.catch(e => console.log(e.message));
});

//User Logout
document
    .getElementById('logout')
    .addEventListener('click',e => {
        firebase.auth().signOut();
    });

//realtime listener
firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser)
        document.getElementById('logout').classList.remove('-hide')
    } else {
        document.getElementById('logout').classList.add('-hide')
        console.log("Not Logged In!!")
    }
});
function getInputValue(id){
    return document.getElementById(id).value;
}