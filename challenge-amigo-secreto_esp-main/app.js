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

    let friend = document.getElementById("resultado");
    friend.innerHTML = "";
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

function drawFriends() {

    if (friends.length === 0) {
        alert("Por favor, Ingresar amigos.")
    };

    let randomIndex = Math.floor(Math.random() * friends.length);
    let drawnName = friends[randomIndex];

    let friend = document.getElementById("resultado");
    friend.innerHTML = `El Amigo Secreto es: ${drawnName}`;

    let listFriends = document.getElementById("listaAmigos");
    listFriends.innerHTML = "";
};
