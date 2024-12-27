// Codigo da nav do menu mobile
let menuMobile = document.querySelector(".menu-mobile");
let navBar = document.querySelector(".nav");
menuMobile.onclick = function(){
    navBar.classList.toggle("ativo");
}


// Icones da nav acende conforme a página
let paginas = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    paginas.forEach(sec => {
        let topo = window.scrollY;
        let offSelec = sec.offsetTop - 150;
        let altura = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(topo >= offSelec && topo < offSelec + altura) {
            navLinks.forEach(links => {
                links.classList.remove("ativo");
                document.querySelector("header nav a[href*=" + id +" ]").classList.add('ativo');
            });
        };
    });

    // borda inferior da nav
    let cabecalho = document.querySelector("header");

    cabecalho.classList.toggle("borda", window.scrollY > 100);

    // fechar a navBar em quando está no menu mobile quando clicado em uma opção
    navBar.classList.remove("ativo");
};


// scroll reveal
ScrollReveal({ 
    //reset: true, 
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.conteudo-home, .cab', { origin: "top" });
ScrollReveal().reveal('.home-img, .container, .projeto-box, .contato form', { origin: "bottom" });
ScrollReveal().reveal('.conteudo-home h1, .sobre-img', { origin: "left" });
ScrollReveal().reveal('.conteudo-home p, .conteudo-sobre', { origin: "right" });


// Typed JS
const typed = new Typed(".texto-multiplo", {
    strings: ["Desenvolvedor Full-Stack", "Estudante em Ciência da Computação", "Apaixonado por tecnologia"],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// desativar botão quando clica em enviar no formulário
document.getElementById("form").addEventListener("submit", function() {
    let button = document.getElementById("botao");
    button.disabled = true;
    button.textContent = "Enviando...";
});