// Buttons
const bookNowBtns = document.querySelectorAll(".btn-book-now");
const loginBtns = document.querySelectorAll(".login-btn");

// Modals
const bookNowModal = document.getElementById("bookNowModal");
const loginModal = document.getElementById("loginModal");

// Close buttons
const closeBookNow = document.getElementById("closeBookNow");
const closeLogin = document.getElementById("closeLogin");

// OPEN Book Now
bookNowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        bookNowModal.style.display = "flex";
        loginModal.style.display = "none";
    });
});

// OPEN Login
loginBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        loginModal.style.display = "flex";
        bookNowModal.style.display = "none";
    });
});

// CLOSE
closeBookNow.addEventListener("click", () => {
    bookNowModal.style.display = "none";
});

closeLogin.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Close on outside click
window.addEventListener("click", (e) => {
    if (e.target === bookNowModal) {
        bookNowModal.style.display = "none";
    }
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});


function checkEmail() {
  const email = document.getElementById("emailInput").value;
  if (!email) return alert("Enter email");

  // DEMO: assume email exists
  document.getElementById("passwordBox").style.display = "block";
}

function loginUser() {
  alert("Login API call here");
}
