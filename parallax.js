let scrollAstrand;
let sectie2 = document.getElementsByClassName('sectie--2')[0];

window.addEventListener('scroll', (e)=> {
    scrollAstrand = window.pageYOffset;
    // console.log(scrollAstrand);
    corrSection2(scrollAstrand);
})

const corrSection2 = (gescrolled) => {
    sectie2.style.backgroundPositionY = gescrolled/2 + "px";
}