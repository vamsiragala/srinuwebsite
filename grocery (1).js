let scrollcontainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backbutton");
let nextBtn = document.getElementById("nextbutton");
scrollcontainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollcontainer.scrollLeft += evt.deltaY;
scrollcontainer.style.scrollBehavior = "auto";
});
backBtn.addEventListener("click", ()=>{
scrollcontainer.style.scrollBehavior = "smooth";
scrollcontainer.scrollLeft += 400;
});
nextBtn.addEventListener("click", ()=>{
scrollcontainer.style.scrollBehavior = "smooth";
scrollcontainer.scrollLeft -= 400;
});