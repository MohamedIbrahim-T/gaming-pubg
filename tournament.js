        
var btn_a = document.getElementById("btn_a");
var btn_b = document.getElementById("btn_b");
var btn_c = document.getElementById("btn_c");
var diva = document.getElementById("diva")
var divb = document.getElementById("divb");
var divc = document.getElementById("divc");
btn_a.addEventListener('click',()=>{
    diva.style.display='block';
    divb.style.display='none';
});
btn_b.addEventListener('click',()=>{
    diva.style.display='none';
    divb.style.display='block';
});
btn_c.addEventListener('click',()=>{
    diva.style.display='none';
    divb.style.display='none';
    divc.style.display='block';
});



var links = document.querySelectorAll(".tournament-nav li");
links.forEach(li => {
li.addEventListener("click", () => {
resetLinks();
li.classList.add("active");
})
})
function resetLinks() {
links.forEach(li => {
li.classList.remove("active")
})
}

