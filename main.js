
let img = document.querySelector("#img")
let upload = document.getElementById("upload")


upload.onchange = function(){
    let file =  new FileReader();
    file.readAsDataURL(upload.files[0]);
    
    file.onload=function(){
        img.src=file.result;
    }
}

 























