// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function addFriends() {

    let input = document.getElementById("amigo");
    let name = input.value;

    input.value = "";

    if (name === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    friends.push(name);

    updateFriendsList();
};

function updateFriendsList() {

    let list = document.querySelector("#listaAmigos");
    list.innerHTML = "";

    for (let friend of friends) {

        let listName = document.createElement("li");
        listName.innerText = friend;
        list.appendChild(listName)
    };
};
