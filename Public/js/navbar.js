
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("sidebarOverlay");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});


const bookingBtn = document.getElementById("booking-script")
const loginBtn = document.getElementById("login-script")

bookingBtn.addEventListener("click",()=>{
    alert("btn")
})
loginBtn.addEventListener("click",()=>{
    alert("btn")
})