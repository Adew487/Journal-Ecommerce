//////////////////////////////////// Sidenav2////////////////////////////////

const sidenav1 = document.getElementById('sidenav1');
const menubar1 = document.getElementById('cartitems');
const closemark1 = document.getElementById('closemark1');

sidenav1.style.width = "0px";
menubar1.onclick = () => {
    if (sidenav1.style.width == "0px") {
        sidenav1.style.width = "80%";
        sidenav1.style.height = "167vh"
        document.body.style['overflow-y'] = 'hidden';
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            sidenav1.style.width = "90%";
        }
        else if(window.matchMedia("(max-width: 767.98px)").matches) {
            sidenav1.style.width = "52%";
        }
    }
    else {

        sidenav1.style.width = "0px";
    }
}

closemark1.onclick = () => {
    sidenav1.style.width = "0px";
    document.body.style['overflow-y'] = 'auto';
}
