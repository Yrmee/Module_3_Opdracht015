const btn1 = document.querySelector(".btn-alert");
const btn2 = document.querySelector("body");

btn1.addEventListener("click", function(myAlert){
    console.log(myAlert.target);
    console.log(myAlert);
});

btn1.addEventListener("click", function(myAlert){
    myAlert.preventDefault();
    console.log("button clicked");
});

const toggleColor = () => {
    btn2.classList.toggle("red-background") 
};

btn2.addEventListener("click", toggleColor);
