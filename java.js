function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function mostrarSecao(id) {
   
    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.remove('mostrar');
        secao.style.display = 'none';
    });

    
    const secaoAtiva = document.getElementById(id);
    secaoAtiva.classList.add('mostrar');
    secaoAtiva.style.display = 'block';
}


const typingEffect = (elementId, text, speed) => {
    const element = document.getElementById(elementId);
    let index = 0;
  
    const type = () => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
  
    element.innerHTML = ''; 
    type();
};


window.onload = () => {
    typingEffect('nome', 'Matheus Bach Preis Ferreira', 100);
    typingEffect('Judson', 'Sou Matheus Bach, tenho 16 anos e estou no segundo ano do curso técnico de informática integrado ao ensino médio. Estou pronto para ingressar no mercado de trabalho e pretendo acumular o máximo de conhecimento e experiência possível.', 50);
};


