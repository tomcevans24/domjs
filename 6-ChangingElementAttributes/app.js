const image=document.getElementById("image");
Console.log(image);

const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click" , ()=>{
    image.src = input.value;
})