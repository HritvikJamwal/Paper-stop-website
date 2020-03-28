var right_menu = document.getElementById('right-menu');
var left_menu = document.getElementById('left-menu');
var left_dropdown = document.getElementById('left-dropdown');
var right_dropdown = document.getElementById('right-dropdown');
var drop_down1 = document.getElementById('drop-down1');
var drop_down2 = document.getElementById('drop-down2');
var drop_down3 = document.getElementById('drop-down3');
var drop_down4 = document.getElementById('drop-down4');
var drop_down5 = document.getElementById('drop-down5');
var drop_down6 = document.getElementById('drop-down6');
var drop_down7 = document.getElementById('drop-down7')
var drop_down8 = document.getElementById('drop-down8')
var drop_down9 = document.getElementById('drop-down9')
var drop_down10 = document.getElementById('drop-down10')

var popped_up_div1 = document.getElementById('popped-up-div1');
var top = document.getElementsByClassName('top');
var right_menu_flag = 0;
var left_menu_flag = 0;

right_menu.addEventListener('click', function() {
    if (right_menu_flag == 0) {
        right_dropdown.style.visibility = "visible";
        right_menu_flag = 1;
    } else {
        right_dropdown.style.visibility = "hidden";
        right_menu_flag = 0;
    }
});

left_menu.addEventListener('click', function() {
    if (left_menu_flag == 0) {
        left_dropdown.style.visibility = "visible";
        left_menu_flag = 1;
    } else {
        left_dropdown.style.visibility = "hidden";
        left_menu_flag = 0;
    }
});

var drop_activated = 0;
//Drop Down 1
drop_down1.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "300px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;

    }
});

popped_up_div1.addEventListener(('mouseleave'), function() {
    popped_up_div1.style.visibility = "hidden";
    popped_up_div1.style.height = "0";
    popped_up_div1.style.width = "0";
    drop_activated = 0;
});

drop_down2.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "200px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;

    }
});

drop_down3.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "250px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});

drop_down4.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "400px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});

drop_down5.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "500px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});

drop_down6.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "400px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});

drop_down7.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "400px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});

drop_down8.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "400px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});

drop_down9.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "400px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});

drop_down10.addEventListener(('click'), function() {
    if (drop_activated == 0) {
        popped_up_div1.style.visibility = "visible";
        popped_up_div1.style.height = "400px";
        popped_up_div1.style.width = "100%";
        drop_activated = 1;
    } else {
        popped_up_div1.style.visibility = "hidden";
        popped_up_div1.style.height = "0";
        popped_up_div1.style.width = "0";
        drop_activated = 0;
    }
});