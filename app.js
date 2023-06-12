const toggleBtn = document.querySelector('.togglebtn')
const navbar = document.querySelector('.nav-link')
const link = document.querySelector('.nav-link li')


toggleBtn.addEventListener('click',function(){
    this.classList.toggle("click")
    navbar.classList.toggle("open")
})

const type = new Typed(".input",{
    strings : ["Frontend Devloper","Full Stak Web Dev","Web Devloper","UI-UX Disainer"],
    TypedSpeed : 50,
    backSpeed : 50,
    loop : true,
    startDelay: 1500,
    backDelay: 500
})