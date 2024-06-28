document.addEventListener('DOMContentLoaded', function() {
    let display = document.querySelector('#calcArea');
    let answer = 0;
    let clear = document.querySelector("#clear");

    clear.onclick = clearScreen;
    function clearScreen() {
        display.innerHTML = "";
    }
    
    document.querySelectorAll('.numbers').forEach(function(element) {
        element.onclick = function() {
            display.innerHTML += element.innerHTML;
        };
    });

    document.querySelectorAll('.operator').forEach(function(element) {
        element.onclick = function() {
            if(element.innerHTML == "+/-"){
                display.innerHTML = display.innerHTML*-1;
            }
            else if (element.innerHTML !== "=") {
                display.innerHTML += element.innerHTML;
            } 
            else {
                displayAnswer();
            }
        };
    });
     
    function displayAnswer() {
        try {
            answer = eval(display.innerHTML.replace(/x/g, '*'));
            display.innerHTML = answer;
        } catch (error) {
            display.innerHTML = 'Error';
        }
    }
});
