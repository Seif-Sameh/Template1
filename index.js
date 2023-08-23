let menu = document.querySelector(".links");

menu.addEventListener("click", () => {
    menu.querySelector("ul").toggleAttribute("style");
    if(menu.querySelector("ul").hasAttribute("style")){
        menu.querySelector("ul").style.display = "block";
    }
    
})

document.body.addEventListener("click", (e) => {
    if(e.target.parentElement.className != "links"){ 
        menu.querySelector("ul").removeAttribute("style");
    }
})

let links = document.querySelectorAll(".links ul li a");
links.forEach((e)=>{
    e.addEventListener("click", ()=>{
        console.log(e.innerHTML);
        document.getElementById(`${e.innerHTML}`).scrollIntoView();
    })
})