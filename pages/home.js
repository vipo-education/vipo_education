const spanPlayer = document.querySelector('.player');
const spanPlayerc = document.querySelector('.playerc');
const spanPlayerf = document.querySelector('.playerf');

// coletando informação armazenada no localStorage do navegador
window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    spanPlayerc.innerHTML = localStorage.getItem('player');
    spanPlayerf.innerHTML = localStorage.getItem('player');
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }


    //animação dos links

    //aqui index se refere a primeira posição no indice
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.3}s`);
                /*este calculo esta servindo para adicionar um delay diferente para cada link, transformando o index 
                em milisegundos*/
        })
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

