const button = document.getElementById("button");
const data = document.getElementsByClassName("data");
const div = document.querySelector("div");

button.onclick = () => {
    div.classList.toggle("viz");
};


// const hideData = () => {
//     data.classList.toggle("viz");

// }

// button.addEventListener("click",hideData)