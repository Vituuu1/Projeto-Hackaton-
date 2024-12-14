function pesquisa(){
    const pesquisar = document.getElementById("input").value.toLowerCase();

    if (pesquisar!=null){
        window.location.href="/código vestidos/html/index_vestido.html";
    }
    
    else {
        alert("opção inválida");
    } 


function verificarEnter(event){
 if (event.key==="Enter") {
       pesquisa();
        }
    }
}