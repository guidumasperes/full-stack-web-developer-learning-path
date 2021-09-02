//function declaration
function changeColorFuncDecl() {
    par = document.body.querySelector(".func-decl-par");
    par.style.fontSize = "45px";
}
changeColorFuncDecl();

//function expression
const changeColorFuncExpr = function () {
    par = document.body.querySelector(".func-expr-par");
    par.style.fontSize = "30px";
}
changeColorFuncExpr();

//arrow function
const changeColorArrowFunc = () => {
    par = document.body.querySelector(".arrow-func-par");
    par.style.fontSize = "15px";
}
changeColorArrowFunc();