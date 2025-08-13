const color=["red","blue","green","black","white","orange","pink","violet"];
const box= document.getElementById("Color-box")
const colorText= document.getElementById("color-name");
const button= document.getElementById("change-color")

function index(){ 
    let randomindex=Math.floor(Math.random()*color.length);
    return randomindex;
}
addEventListener("click",()=>{
    const randomColor=color[index()];
    box.style.backgroundColor = randomColor;
    colorText.textContent= randomColor;
    colorText.style.color=randomColor;
} )
