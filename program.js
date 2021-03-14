modal = document.getElementsByClassName('modal2');//modal
//modal options
same = document.getElementsByClassName('same');
same2 = document.getElementsByClassName('same2');

//modal checkbox
check = document.getElementsByClassName('check-pledge');

//dropdown
dropdown = document.getElementsByClassName('dropdown');
dropdown_btn = document.getElementsByClassName('dropdown-btn');

//dropdown input
var pledge0 = document.getElementsByName('pledge')[0].value;
var pledge1 = document.getElementsByName('pledge')[1].value;

//container1 numbers
var number1 = document.getElementsByName('number1')[0];
var number2 = document.getElementsByName('number2')[0];

//convert to number
n = Number(pledge0);
b = Number(pledge1);
x = Number(number1.innerHTML);
c = Number(number2.innerHTML);

//progress bar on container 2
var progressbar = document.getElementsByName('progress-bar-child')[0].style;


//check modal
var check_modal = document.getElementsByName('check-modal')[0].style;
function img1() {
    document.getElementById('menu-child').style.visibility = 'hidden';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'flex';
    document.getElementById('menu-child').style.top = 0;
}
function img2() {
    document.getElementById('menu-child').style.visibility = 'visible';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img1').style.display = 'flex';
    document.getElementById('menu-child').style.top = '100px';
}
//back this project btn=open modal
function modal2() {
    modal[0].style.display = "flex";
    modal[0].style.top = '-120px';
    document.getElementById('overlay').style.display = 'flex';
}

//bookmark button
function bookmark() {
    if (document.getElementById('btn2').style.color != "#70707000") {
        document.getElementById('path').style.fill = "#39b4af";
        document.getElementById('path2').style.fill = "#fff";
        document.getElementById('bookmark').innerHTML = "Bookmarked";
        document.getElementById('bookmark').style.fontWeight = 700;
        document.getElementById('bookmark').style.color = "#39b4af";
    }

    else if (document.getElementById('btn2').background == 'none') {
        document.getElementById('path').style.fill = "#39b4af";
        document.getElementById('path2').style.fill = "#fff";
        document.getElementById('bookmark').innerHTML = "";
        document.getElementById('bookmark').style.color = "none";
    }
}

//select reward=open modal
function modal2_select_reward1() {
    modal[0].style.display = 'flex'
    modal[0].style.top = '500px';
    document.getElementById('overlay').style.display = 'flex';
    check[1].checked = true;
    dropdown[0].style.display = 'flex';

    //disable the modal option
    same2[0].style.opacity = '50%';
    same[1].style.opacity = '50%';
    check[0].disabled = true;
    check[2].disabled = true;
}
function modal2_select_reward2() {
    modal[0].style.display = 'flex'
    modal[0].style.top = '800px';
    document.getElementById('overlay').style.display = 'flex';
    check[2].checked = true;
    dropdown[1].style.display = 'flex';

    //disable the modal option
    same2[0].style.opacity = '50%';
    same[0].style.opacity = '50%';
    check[0].disabled = true;
    check[1].disabled = true;
}
//close-modal
function modal2_close() {
    modal[0].style.display = "none";
    document.getElementById('overlay').style.display = 'none';
}



//checkbox-pledge with no reward
function checkBox() {
    if (check[0].checked == true) {
        number2.innerHTML = c + 1;
        check_modal.display = 'flex';
        progressbar.width = '78%';

        same[1].style.opacity = '50%';
        same[0].style.opacity = '50%';
        check[2].disabled = true;
        check[1].disabled = true;

        modal[0].style.display = "none";

    }
    else if (check[0].checked == false) {
        number2.innerHTML = c + 1;
        progressbar.width = '76%';

        same[1].style.opacity = '100%';
        same[0].style.opacity = '100%';
        check[2].disabled = false;
        check[1].disabled = false;
    }
}
//checkbox-pledge bamboo stand 
function checkBox1() {

    if (check[1].checked == true) {
        //disable the modal option
        same2[0].style.opacity = '50%';
        same[1].style.opacity = '50%';
        check[0].disabled = true;
        check[2].disabled = true;

        //show dropdown 
        dropdown[0].style.display = 'flex';
    }


    else if (check[0].checked == false) {
        //enable the modal option
        same2[0].style.opacity = '100%';
        same[1].style.opacity = '100%';
        check[0].disabled = false;
        check[2].disabled = false;

        //show dropdown 
        dropdown[0].style.display = 'none';

        if (dropdown_btn[0].click = true) {
            number1.innerHTML = x;
            number2.innerHTML = c;
            progressbar.width = '76%';
        }
    }
}
function dropdown0() {
    number1.innerHTML = x + n;
    number2.innerHTML = c + 1;
    check_modal.display = 'flex';
    progressbar.width = '78%';
    modal[0].style.display = "none";
    //convert number2 to 5008
    if (number2 == 5009) {
        number2 -= 1;
    }
}
//checkbox-pledge black edtion stand
function checkBox2() {

    if (check[2].checked == true) {
        //disable the modal option
        same2[0].style.opacity = '50%';
        same[0].style.opacity = '50%';
        check[0].disabled = true;
        check[1].disabled = true;

        //show dropdown 
        dropdown[1].style.display = 'flex';
    }


    else if (check[2].checked == false) {
        //enable the modal option
        same2[0].style.opacity = '100%';
        same[0].style.opacity = '100%';
        check[0].disabled = false;
        check[1].disabled = false;

        //show dropdown 
        dropdown[1].style.display = 'none';

        if (dropdown_btn[1].click = true) {
            number1.innerHTML = x;
            number2.innerHTML = c;
            progressbar.width = '76%';
        }
    }
}
function dropdown1() {
    number1.innerHTML = x + b;
    number2.innerHTML = c + 1;
    check_modal.display = 'flex';
    progressbar.width = '78%';
    modal[0].style.display = "none";
    //convert number2 to 5008
    if (number2 == 5009) {
        number2 -= 1;
    }
}



//close the check modal 
function close_checkmodal() {
    check_modal.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
