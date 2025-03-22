var cont = 0;

function mudarPosicao(){
    var nao = document.getElementById('nao');
    nao.style.top = Math.random() * 300 + "px";
    nao.style.left = Math.random() * 300 + "px"; 
    cont++;
    if(cont == 10){
        nao.style.top = "200px";
        nao.style.left =  "1000px"; 
    }

    if(cont == 12){
        alert("ta bom, ja entendi.");
    }
}