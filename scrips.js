const form = document.getElementById("contact-form");
const statusText = document.getElementById("status");

form.addEventListener("submit", function(e){
e.preventDefault();


statusText.innerText = "Enviando...";

emailjs.sendForm(
    "service_u8vhyw7",
    "template_1hslkl1",
    this
)
.then(() => {
    statusText.innerText = "Mensagem enviada com sucesso!";
    form.reset();
})
.catch(() => {
    statusText.innerText = "Erro ao enviar. Tente novamente.";
});

});
