let scrollAstrand;
let sectie2 = document.getElementsByClassName('sectie--2')[0];
let sectie4 = document.getElementsByClassName('sectie--4')[0];
let sectie6 = document.getElementsByClassName('sectie--6')[0];
let indicat = document.getElementById('indicator');
const documentHoogte = document.body.clientHeight;
const viewPoortHoogte = window.innerHeight;

window.addEventListener('scroll', (e)=> {
    scrollAstrand = window.pageYOffset;
    // console.log(scrollAstrand);
    corrSection2(scrollAstrand);
    corrSection4(scrollAstrand);
    corrSection6(scrollAstrand);
    if ( scrollAstrand >= 1001) {
        verwijderClassKop();
    } else {
        voegClassKopToe();
    }
    werkIndicatorBij(scrollAstrand);
});

const corrSection2 = (gescrolled) => {
    sectie2.style.backgroundPositionY = -gescrolled/4 + "px";
    // links naar rechts scroll
    // sectie2.getElementsByClassName('sectie--4__kop')[0].style.marginLeft = -300 + gescrolled*2 + "px";
};

const corrSection4 = (gescrolled) => {
    sectie4.style.backgroundPositionY = 200 -gescrolled/3 + "px";
};

const corrSection6 = (gescrolled) => {
    sectie6.style.backgroundPositionY = +50 -gescrolled/2 + "px";
};

const verwijderClassKop = ()=> {
    document.querySelector('.sectie--4 h2').classList.remove('sectie--4__kop');
};

const voegClassKopToe = ()=> {
    document.querySelector('.sectie--4 h2').classList.add('sectie--4__kop');
};

const werkIndicatorBij = (getal) => {
    indicat.style.width= 100*getal/(documentHoogte - viewPoortHoogte) + '%';
}
