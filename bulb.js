let flag = 0;

const bulb = document.querySelector("#Bulb");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    if (flag === 0) {
        bulb.style.backgroundColor = "yellow";
        button.innerHTML="OFF"
        console.log("ON");
        flag = 1;
    } else {
        bulb.style.backgroundColor = "white";
        button.innerHTML="ON"
        console.log("OFF");
        flag = 0;
    }
});


