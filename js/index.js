// Your code goes here
const header = document.querySelector("header.main-navigation")
const containerHomeDiv = document.querySelector(".home")
const footer = document.querySelector("footer")
let counter = 0
let dragged

function eventOne(event){
    if(this.textContent === "Home"){
        header.setAttribute("style","background: yellow;")
    }else if(this.textContent === "About Us"){
        header.setAttribute("style","background: purple;")
    }else if(this.textContent === "Blog"){
        header.setAttribute("style","background: red;")
    }else if(this.textContent === "Contact"){
        header.setAttribute("style","background: green;")
    }
}

function eventTwo(event){
    let imgs = this.querySelectorAll("img")
    if(event.code === "Space"){
        ++counter
    }
    if(counter % 2 == 1){
        imgs[0].setAttribute("style","visibility: hidden;")
        imgs[1].setAttribute("style","visibility: hidden;")
        imgs[2].setAttribute("style","visibility: hidden;")
        imgs[3].setAttribute("style","visibility: hidden;")
    }else if(counter % 2 == 0){
        imgs[0].setAttribute("style","visibility: visible;")
        imgs[1].setAttribute("style","visibility: visible;")
        imgs[2].setAttribute("style","visibility: visible;")
        imgs[3].setAttribute("style","visibility: visible;")
    }
    event.preventDefault()
}

function eventThree(event){
    let img = this.querySelector("img")
    if(img.attributes.style === undefined){
        img.setAttribute("style","transform: rotate(180deg);")
    }else if(img.attributes.style.value === "transform: rotate(180deg);"){
        img.setAttribute("style","transform: rotate();")
    }else{
        img.setAttribute("style","transform: rotate(180deg);")
    }
    event.preventDefault()
}

function eventFour(event){
    console.log("This page loaded ok.")
}

function eventFive(event){
    this.style.background = "yellow"
    event.preventDefault()
}

function eventSix(event){
    event.stopPropagation()
    alert("resize that window until it's just right")
}

function eventSeven(event){
    console.log("scrolling is working!")
}

function eventEight(event){
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(selection)
}

function eventNine(event){
    header.style.background = "#FFFFFF"
}

function eventTen(event){
    event.preventDefault()
}

function eventEleven(event){
    if(event.target === containerHomeDiv.querySelector("header p")){
        containerHomeDiv.querySelector("header p").style.background = "purple"
    }
}

function eventTwelve(event){
    if(event.target === containerHomeDiv.querySelector("header p")){
        containerHomeDiv.querySelector("header p").style.background = ""
    }
}

function eventThirteen(event){
    event.preventDefault()
    if(event.target === containerHomeDiv.querySelector("header p")){
        event.target.style.background = ""
        this.body.children[1].children[0].append(this.body.children[1].children[0].children[0])
    }
}

header.querySelectorAll(".nav-link").forEach(i => {
    i.addEventListener("mouseover",eventOne);
    i.addEventListener("click",(event) => event.preventDefault())
})
document.addEventListener("keydown",eventTwo)
containerHomeDiv.querySelector("header").addEventListener("wheel",eventThree)
window.addEventListener("load",eventFour)
//.addEventListener("focus",eventFive)
window.addEventListener("resize",eventSix)
document.addEventListener("scroll",eventSeven)
window.addEventListener("select",eventEight)
header.querySelector(".logo-heading").addEventListener("dblclick",eventNine)
document.addEventListener("drag",eventTen)
document.addEventListener("dragstart",(event) => {dragged = event.target; event.target.style.opacity = 0.5})
document.addEventListener("dragend",(event) => {event.target.style.opacity = ""})
document.addEventListener("dragover",(event) => {event.preventDefault()})
document.addEventListener("dragenter",eventEleven)
document.addEventListener("dragleave",eventTwelve)
document.addEventListener("drop",eventThirteen)

//Here is event five
containerHomeDiv.querySelector(".btn").addEventListener("click",(event) => {
    let focusInput = document.createElement("input")
    let descr = document.createElement("p")
    descr.innerText = "Select text from inside the box to read inside console"
    descr.style = "margin: 5px;"
    focusInput.setAttribute("type","text")
    focusInput.setAttribute("style","height: auto; width: 1240px; background: salmon;")
    focusInput.value = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
    focusInput.addEventListener("focus",eventFive)
    if(containerHomeDiv.querySelector(".btn").parentElement.querySelector("input") === null){
        containerHomeDiv.querySelector(".btn").parentElement.append(descr)
        containerHomeDiv.querySelector(".btn").parentElement.append(focusInput)
    }else{
        containerHomeDiv.querySelector(".btn").parentElement.querySelector("p").nextElementSibling.nextElementSibling.remove()
        containerHomeDiv.querySelector(".btn").parentElement.querySelector("input").remove()
    }
    event.stopPropagation()
})
//event five