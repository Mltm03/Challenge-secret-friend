let listaAmigos=[]
function agregarAmigo(){

    let amigo = document.getElementById("amigo").value;
    if(amigo){
        listaAmigos.push(amigo);
        actualizarLista();
        console.log(listaAmigos)
        document.getElementById("amigo").value="";
    }else{
        alert("Debes ingresar el nombre del amigo");
    }
}
function  actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.textContent="";

    for(let i=0; i<listaAmigos.length; i++){
        let li=document.createElement("li");
        li.textContent=listaAmigos[i];
        lista.appendChild(li);
    }
    console.log(listaAmigos)
}
function sortearAmigo(){
    let aleatorio = Math.floor(Math.random() * listaAmigos.length);
    alert(`El amigo seleccionado es: ${listaAmigos[aleatorio]} `)
    listaAmigos.pop(listaAmigos[aleatorio])
    console.log(listaAmigos)
}