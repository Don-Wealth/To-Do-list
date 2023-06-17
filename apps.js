const listInput = document.querySelector(".list-input");
const userList = document.querySelector(".name-list");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
    // create an li out of thin air
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    // Add the input value inside the new li
    newLi.appendChild(liContent);
    // Attaching the li to the user list
    userList.appendChild(newLi);
});