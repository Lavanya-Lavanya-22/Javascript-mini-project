var icon=document.getElementById("icon");
backimg=document.querySelector(".back-img")
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src="moon.png"

        

    }else{
        icon.src="night-mode.png"
    }
}