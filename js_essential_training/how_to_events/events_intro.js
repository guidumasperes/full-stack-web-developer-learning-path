const btn = document.querySelector("#btn-to-be-clicked");

//Viewport size
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
console.log(vw, vh);

btn.addEventListener("click", () => {
    btn.innerHTML === "A button to be clicked!" ? btn.innerHTML = "A clicked button." : btn.innerHTML = "A button to be clicked!";
    if (btn.style.marginTop === "") {
        btn.style.marginTop = "20px";
    } else {
        let numberInt = parseInt(btn.style.marginTop);
        numberInt = numberInt + 20;
        btn.style.marginTop = numberInt + "px";
    }
});

//Using callback separete from event listener
const btnCallback = document.querySelector("#btn-callback-ex");

function changeColor(event) {
    console.log(event);
    this.style.color = "red"; //Remember that in some contexts we just can't use "this", like in some cases with arrow functions
}

btnCallback.addEventListener("click", changeColor);

//How to pass an argument and the event to a callback function ?
const btnCallbackArgs = document.querySelector("#btn-callback-ex-args");

function changeSize(event, btn, size) {
    console.log(event);
    btn.style.fontSize = size; //You can't use this anymore, you need to pass the object
}

btnCallbackArgs.addEventListener("click", (event) => {
    changeSize(event, btnCallbackArgs, "20px");
}); //We need to cheat in order to pass args