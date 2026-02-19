function enviarWhatsApp(producto,precio){
    const numero = "5492914718300";
    const mensaje = `Hola, quiero información sobre ${producto} (${precio})`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url,"_blank");
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{
    reveals.forEach(reveal=>{
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            reveal.classList.add("active");
        }
    });
});
