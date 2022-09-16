/** const user = {
    firstName: "Peter",
    lastName: "Mayer",
    hobbys: ["Sport", "Coding"],
}

function hallo(_firstName, _lastName){
    console.log(`Hallo ${_firstName} ${_lastName}`)
}

hallo(user.firstName, user.lastName)
*/

const iconButton = document.querySelector(".header__icon-container")
const sidebar = document.querySelector(".sidebar")


iconButton.addEventListener("click", ()=> {
    sidebar.classList.toggle("show")
})

