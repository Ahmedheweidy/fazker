


// // count the number and change the bg of the button
// function countdown(buttonId) {
//     var button = document.getElementById(buttonId);
//     button.addEventListener("click", function () {
//         var count = parseInt(button.innerHTML);
//         if (count > 0) {
//             count--;
//             button.innerHTML = count;
//         }
//         if (count == 0) {
//             button.style.backgroundColor = "green";
//         }
//     });
// }

// // reset all the button
// function countdown(buttonId) {
//     var button = document.getElementById(buttonId);
//     var initialCount = parseInt(button.innerHTML);
//     var resetButton = document.getElementById("resetButton");
//     resetButton.addEventListener("click", function () {
//         button.innerHTML = initialCount;
//         button.style.backgroundColor = "";
//     });
//     button.addEventListener("click", function () {
//         var count = parseInt(button.innerHTML);
//         if (count > 0) {
//             count--;
//             button.innerHTML = count;
//         }
//         if (count == 0) {
//             button.style.backgroundColor = "green";
//         }
//     });
// }


// countdown("myButton");
// countdown("myButton1");
// countdown("myButton2");
// countdown("myButton3");
// countdown("myButton4");
// countdown("myButton5");
// countdown("myButton6");
// countdown("myButton7");
// countdown("myButton8");
// countdown("myButton9");
// countdown("myButton10");
// countdown("myButton11");
// countdown("myButton12");
// countdown("myButton13");
// countdown("myButton14");
// countdown("myButton15");
// countdown("myButton16");
// countdown("myButton17");
// countdown("myButton18");
// countdown("myButton19");
// countdown("myButton20");
// countdown("myButton21");
// countdown("myButton22");
// countdown("myButton23");
// countdown("myButton24");
// countdown("myButton25");
// countdown("myButton26");
// countdown("myButton27");
// countdown("myButton28");
// countdown("myButton29");
// countdown("myButton30");
// countdown("myButton31");
// countdown("myButton32");
// countdown("myButton33");
// countdown("myButton34");
// countdown("myButton35");
// countdown("myButton36");
// countdown("myButton37");
// countdown("myButton38");
// countdown("myButton39");
// countdown("myButton40");
// countdown("myButton41");
// countdown("myButton42");
// countdown("myButton43");
// countdown("myButton44");
// countdown("myButton45");
// countdown("myButton46");
// countdown("myButton47");
// countdown("myButton48");
// countdown("myButton49");
// countdown("myButton50");
// countdown("myButton51");
// countdown("myButton52");
// countdown("myButton53");
// countdown("myButton54");
// countdown("myButton55");
// countdown("myButton56");
// countdown("myButton57");


function countdown(button) {
    var initialCount = parseInt(button.innerHTML);
    button.addEventListener("click", function () {
        var count = parseInt(button.innerHTML);
        if (count > 0) {
            count--;
            button.innerHTML = count;
        }
        if (count == 0) {
            button.style.backgroundColor = "green";
        }
    });
    // إضافة الحدث لزر إعادة التعيين
    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function () {
        button.innerHTML = initialCount;
        button.style.backgroundColor = "";
    });
}

// تمرير جميع الأزرار لدالة countdown
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
    countdown(buttons[i]);
}


var div = document.querySelector('div');
div.addEventListener('click', function () {
    div.classList.toggle('active');
});



function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






function goToPage1() {
    document.getElementById("page1").classList.add("active");
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.remove("active");
    document.getElementById("page4").classList.remove("active");
    document.getElementById("page5").classList.remove("active");
    document.getElementById("page6").classList.remove("active");
}

function goToPage2() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
    document.getElementById("page3").classList.remove("active");
    document.getElementById("page4").classList.remove("active");
    document.getElementById("page5").classList.remove("active");
    document.getElementById("page6").classList.remove("active");
}

function goToPage3() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");
    document.getElementById("page4").classList.remove("active");
    document.getElementById("page5").classList.remove("active");
    document.getElementById("page6").classList.remove("active");
}

function goToPage4() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.remove("active");
    document.getElementById("page4").classList.add("active");
    document.getElementById("page5").classList.remove("active");
    document.getElementById("page6").classList.remove("active");
}

function goToPage5() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.remove("active");
    document.getElementById("page4").classList.remove("active");
    document.getElementById("page5").classList.add("active");
    document.getElementById("page6").classList.remove("active");
}

function goToPage6() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.remove("active");
    document.getElementById("page4").classList.remove("active");
    document.getElementById("page5").classList.remove("active");
    document.getElementById("page6").classList.add("active");
}