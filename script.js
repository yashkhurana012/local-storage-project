let text = document.getElementById("username");
text.addEventListener("keyup", () => {
console.log("run");
localStorage.setItem('name', text.value);


});
if (localStorage.getItem('name')) {
text.value = localStorage.getItem('name');
console.log(localStorage.getItem('name'))
}
console.log(localStorage.getItem('name'))