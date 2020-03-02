// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll(".like-glyph");
let errorMessage = document.getElementById("modal");
for (heart of hearts) {
  heart.addEventListener("click", changeHeart);
}

function changeHeart(e) { 
  let currentheart = e.target;

  mimicServerCall()
    .then(serverMessage => {
      if (currentheart.innerText == EMPTY_HEART) {
        currentheart.innerText = FULL_HEART;
        currentheart.className = "activated-heart";
      } else {
        currentheart.innerText = EMPTY_HEART;
        currentheart.className = "";
      }      
      errorMessage.setAttribute("class", "hidden");
    })
    .catch(error => {
      errorMessage.className = ""
      
    });
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
