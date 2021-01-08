
setInterval(function(){snowParticle()},250) ;

function snowFallLeft(){
    let snow = document.querySelectorAll('.snowPart');
    let lastSnow = snow[snow.length - 1];
    let flake_loc = lastSnow.getBoundingClientRect();
    lastSnow.style.top = '110%';
    lastSnow.style.left =  flake_loc.left - 200 + 'px';
}

function snowFallRight(){
    let snow = document.querySelectorAll('.snowPart');
    let lastSnow = snow[snow.length - 1];
    let flake_loc = lastSnow.getBoundingClientRect();
    lastSnow.style.left =  flake_loc.left + 200 + 'px';
}


function snowParticle(){
    
    let size = Math.floor(Math.random() * 25) + 5;
    let snowAmount = document.getElementsByClassName('snowPart');

    console.log(snowAmount);
    console.log(snowAmount.length);
    for(let i = 0; i < 1; i++){
        let particle= document.createElement('div');
        particle.className = 'snowPart';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        document.body.appendChild(particle);
    }

    //Render the snowfall and make it move 
    setTimeout(function(){snowFallLeft()}, 200);
    setTimeout(function(){snowFallRight()}, 1000);

    //remove the snowFall after it reached the bottome
    for(let i = 0; i < snowAmount.length; i++){
        if(snowAmount[i].getBoundingClientRect().top > window.innerHeight){
            snowAmount[i].remove();
        }
    }
    
}




