

/*efecto seccion estucios, expereincias, supervisiones---*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }


    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");

}



/*CSS PARA PONER LA BARRA DE MENU EN RESPONSIVO CON MOVIMIENTO*/
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.classList.add('active');

}

function closemenu() {
    sidemenu.classList.remove('active');

}