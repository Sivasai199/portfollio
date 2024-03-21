const togglebutton = document.getElementsByClassName("togglebutton")[0]
const navbarlinks = document.getElementsByClassName("navbarlinks")[0]
togglebutton.addEventListener("click", () => {
  navbarlinks.classList.toggle("active")
})

gsap.to(".nameTag", {
  duration: 5.3,
  text: "A Frontend Web Developer",
})

const quote = document.querySelector(".quote")
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const random = Math.floor(1640*Math.random())
  quote.innerText = data[random].text
  });


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD15mHk5eeCZ5fcjAnSa3rsblNaFOT-TUg",
  authDomain: "sivasaiportfolio.firebaseapp.com",
  databaseURL: "https://sivasaiportfolio.firebaseio.com",
  projectId: "sivasaiportfolio",
  storageBucket: "sivasaiportfolio.appspot.com",
  messagingSenderId: "785713651417",
  appId: "1:785713651417:web:69956a7922147e1ef068c8",
  measurementId: "G-LW5FKKN2M8"
};

firebase.initializeApp(firebaseConfig);

let firebaseRef = firebase.database().ref('register');

const submitBtn = document.querySelector(".submitBtn")
submitBtn.addEventListener("click",(e)=>{
  e.preventDefault()


  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let mobile = document.querySelector('#mobile').value;
  let message = document.querySelector('#message').value;
  let form = document.querySelector(".form").reset()

  sendMessage(name,email,mobile,message)
})


function sendMessage(name,email,mobile,message) {
  
  let newFormMessage = firebaseRef.push();
  newFormMessage.set({
   name: name,
    email: email,
   mobile: mobile,
    message: message
  })
}

