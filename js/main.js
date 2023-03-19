


// count the number and change the bg of the button
function countdown(buttonId) {
    var button = document.getElementById(buttonId);
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
}

// reset all the button
function countdown(buttonId) {
    var button = document.getElementById(buttonId);
    var initialCount = parseInt(button.innerHTML);
    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function () {
        button.innerHTML = initialCount;
        button.style.backgroundColor = "";
    });
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
}


countdown("myButton");
countdown("myButton1");
countdown("myButton2");
countdown("myButton3");
countdown("myButton4");
countdown("myButton5");
countdown("myButton6");
countdown("myButton7");
countdown("myButton8");
countdown("myButton9");
countdown("myButton10");
countdown("myButton11");
countdown("myButton12");
countdown("myButton13");
countdown("myButton14");
countdown("myButton15");
countdown("myButton16");
countdown("myButton17");
countdown("myButton18");
countdown("myButton19");
countdown("myButton20");
countdown("myButton21");
countdown("myButton22");
countdown("myButton23");
countdown("myButton24");
countdown("myButton25");
countdown("myButton26");
countdown("myButton27");
countdown("myButton28");
countdown("myButton29");
countdown("myButton30");
countdown("myButton31");


var div = document.querySelector('div');
div.addEventListener('click', function() {
  div.classList.toggle('active');
});



function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



