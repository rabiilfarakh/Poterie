// faq
const accordions = document.querySelectorAll('.accordion-item');
accordions.forEach(item => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () =>{
        const styleFaq = header.getAttribute('style')
        if (styleFaq === "background: rgb(96, 98, 98)") {
          header.setAttribute('style','')
        } else {
          header.setAttribute('style','background: rgb(96, 98, 98)')
        }
        item.classList.toggle("active");
    })
})



// menu
    hamburger = document.querySelector(".hamburger");
    nav = document.querySelector("nav");
    hamburger.onclick = function() {
        nav.classList.toggle("active");
    }



// carrousel

const flechG = document.getElementById('flechG')
const flechD = document.getElementById('flechD')
const fleG = document.getElementById('fleG')
const fleD = document.getElementById('fleD')
const img = document.getElementById('img')
const img2 = document.getElementById('img2')
var imgTable = ["./img/1.png","./img/2.png","./img/3.png","./img/5.png"] 
var i=0
var j=0

img.setAttribute('src',imgTable[i])
flechD.addEventListener('click',()=>{
  if(i==3){
    i=0
    img.setAttribute('src',imgTable[i])
  }else{
    i++
    img.setAttribute('src',imgTable[i])
  }
})
flechG.addEventListener('click',()=>{
  if(i==0){
    i=3
    img.setAttribute('src',imgTable[i])
  }else{
    i--
    img.setAttribute('src',imgTable[i])
  }
})

function changeImg(){
  if(i==3){
    i=0
    img.setAttribute('src',imgTable[i])
  }else{
    i++
    img.setAttribute('src',imgTable[i])
  }
  setTimeout(changeImg, 5000);
}
changeImg()




//  regex 
    function validerFormulaire() {
        var full_name = document.getElementById("full_name").value;
        var cin = document.getElementById("cin").value;
        var email = document.getElementById("email").value;
        var num = document.getElementById("num").value;
        
        var full_nameRegex = /^[a-zA-Z ]+$/;
        var cinRegex = /^[a-zA-Z0-9]+$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{3}$/;
        var numRegex = /^[0-9]{10}$/;
        var i=1;

        if (!full_name.match(full_nameRegex)){
            alert("full name n'est pas valide.");
            i=0;
        }

        if (!cin.match(cinRegex)) {
            alert("CIN n'est pas valide.");
            i=0;
        }

        if (!email.match(emailRegex)) {
            alert("L'adresse e-mail n'est pas valide.");
            i=0;
        }

        if (!num.match(numRegex)) {
            alert("Numero de telephone  n'est pas valide.");
            i=0;
        }

        if(i==1){
            alert("formulair remplie avec succé");
        }
    }


