var loop = 0;
var images = ['mazzy.jpeg', 'mom.jpeg', 'pump.jpg', 'dad.png', 'nick.jpeg', 'girls.png'];
var names = ["Mazzy", "Mom", "Pumpkin", "Dad", "Nick", "Girls"];

function loopPics(){
    document.getElementById("imgs").src = images[loop];
    document.getElementById("imgs").alt = names[loop];
    if(loop < images.length - 1){
        loop += 1;
    }else{
        loop = 0;
    }
}
