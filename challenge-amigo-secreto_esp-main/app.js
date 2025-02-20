// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriends() {

    let input = document.getElementById("amigo");
    let name = input.value;

    input.value = "";

    if (name === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    friends.push(name);

    let list = document.getElementById("listaAmigos");
    let listName = document.createElement("li");

    listName.innerText = name;
    list.appendChild(listName)

    console.log(friends)

};
