const btnbuy = document.querySelector('#btnbuy');
const loader = document.querySelector('#load');
let isLoading = false;

btnbuy.addEventListener('click', () => {

    if (!isLoading) {
        isLoading = true;
        loader.style.display = "block";
        loader.classList.toggle('loader')
        setTimeout(() => {
            loader.style.display = "none";
            loader.classList.toggle('loader');
            isLoading = false;
        }, 2000); 

        comprar();
    }
});

function comprar(){
    alert("Comprado");
}

function addCesta(){
    alert("Adicionado a cesta"); 
}

function zap(){
    alert("(51)99772-0585");
}


