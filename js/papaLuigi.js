
const luigiBlanc = document.querySelector('#luigiBlanc');
const luigiNoir = document.querySelector('#luigiNoir');

const nav = document.querySelector('.navbar');


window.addEventListener('scroll', () => {

 if (window.scrollY > 50) {
    luigiBlanc.style.display="none"
    luigiNoir.style.display="block"
    luigiNoir.style.height="100px"

 } else {
    luigiBlanc.style.display="block"
    luigiNoir.style.display="none"
 }
     
})
