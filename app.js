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

function loadFile(url, fileName) {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
        .then(res => res.blob())
        .then(res => {
            const aElement = document.createElement('a');
            aElement.setAttribute('download', fileName);
            const href = URL.createObjectURL(res);
            aElement.href = href;
            aElement.setAttribute('target', '_blank');
            aElement.click();
            URL.revokeObjectURL(href);
        });
};

function downloadFile(){
    loadFile('/assets/Codepolitan_cv.pdf', 'my_cv.pdf')
}