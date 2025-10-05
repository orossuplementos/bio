document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.links-list li');

    // Adiciona a classe 'visible' com um pequeno atraso para cada item da lista
    // criando um efeito de cascata na animação.
    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('visible');
        }, index * 150); // Atraso de 150ms entre cada link
    });
});