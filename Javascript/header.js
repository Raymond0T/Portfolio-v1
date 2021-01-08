

function menuOpen(){
    let btn = document.getElementById('dropdown-menu');
    let menu = document.getElementById('menu-list');

    if(btn.classList.contains('dropdown-menu-open')){
        btn.classList.remove('dropdown-menu-open');
        menu.style.opacity="0";
        menu.style.visibility="hidden";
    }
    else{
        btn.classList.add('dropdown-menu-open');
        menu.style.opacity="1";
        menu.style.visibility="visible";
    }
}