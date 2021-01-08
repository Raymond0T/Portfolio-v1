//REFRESH AT TOP OF PAGE
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
window.onload=changeTextColor();

// CHANGING FONT SIZE FOR INTEREST SECTION
let text = document.getElementsByClassName('interest-text');
let width = screen.availWidth;
let size;

if(width > 750){
    size = 1.75;
}
else if(width <= 750){
    size = 1;
}

for(let i = text.length - 1; i >= 0; i--){
    size = size + .25;
    text[i].style.fontSize  = size +'rem'; 
    
}




//Project and Experience section
function changeTextColor(){
    let wordStyle = document.getElementById('expTitle');
    const [firstWord, secWord] = wordStyle.textContent.split("/");
    wordStyle.innerHTML = firstWord.fontcolor('#E93434') +"&" + "<br>" + secWord.fontcolor('#48b8c7');
}




//SKILL SECTION
function skillMouseOver(btn){
    btn.style.transform="scale(1.25)";
}

function skillMouseOut(btn){
    btn.style.transform="scale(1)";
}

