const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const programme=document.getElementById("programme").value;
  const message=document.getElementById("message").value.trim();
  const text=`Hello Fortress Learning Academy,%0A%0AMy name is ${encodeURIComponent(name)}.%0AEmail: ${encodeURIComponent(email)}%0A%0AI am interested in: ${encodeURIComponent(programme)}.%0A%0AMessage: ${encodeURIComponent(message || "I would like more information about lessons.")}`;
  window.open(`https://wa.me/2348163590297?text=${text}`,"_blank");
});
