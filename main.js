
let img = document.querySelector("#img")
let upload = document.getElementById("upload")
let blurr = document.getElementById("blur"); 
let brightness = document.getElementById("brightness"); 
let contrast = document.getElementById("contrast"); 
let grayscale = document.getElementById("grayscale"); 
let sepia = document.getElementById("sepia"); 
let drop_shadow = document.getElementById("drop-shadow"); 

upload.onchange = function(){
    let file =  new FileReader();
    file.readAsDataURL(upload.files[0]);
    
    file.onload=function(){
        img.src=file.result;
    }
}

 let inputs = document.querySelectorAll(".Edite input")

inputs.forEach( (item)=>{
    item.addEventListener("input",function(){
        img.style.filter=`
        blur(${blurr.value}px)

      `
    })

} )



















