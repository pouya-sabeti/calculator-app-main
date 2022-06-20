var a = localStorage.getItem("theme");
var b = localStorage.getItem("darsad");
if (!(a == "" && b == "")) {
    change(a, b);
}
function change(a, b) {
    document.querySelector(".bull").style = "left:" + b + "%";
    localStorage.setItem("theme", a);
    localStorage.setItem("darsad", b);
    if (a == 1) {
        document.body.className = "";
    }
    if (a == 2) {
        document.body.className = "thme-2";
    }
    if (a == 3) {
        document.body.className = "thme-3";
    }
}
var value_1 = "";
var value_3 = "";
function calcul(a) {
    if (!(document.querySelector(".monitor-input").value.length >= 23)) {
        document.querySelector(".monitor-input").value += a;
    }



}
function check() {
    if (document.querySelector(".monitor-input").value.length < 19 && document.querySelector(".monitor-input").value.length > 14) {
        document.querySelector(".monitor-input").classList.remove("font_size_50");
        document.querySelector(".monitor-input").classList.remove("font_size_30");
        document.querySelector(".monitor-input").classList.add("font_size_35");
    }
    if (document.querySelector(".monitor-input").value.length < 14) {
        document.querySelector(".monitor-input").classList.remove("font_size_35");
        document.querySelector(".monitor-input").classList.add("font_size_50");
    }
    if (document.querySelector(".monitor-input").value.length > 19) {
        document.querySelector(".monitor-input").classList.remove("font_size_35");

        document.querySelector(".monitor-input").classList.add("font_size_30");
    }
    if (document.querySelector(".monitor-input").value.length == 23) {
        document.querySelector(".error").classList.add("show_error");
    }
    else {
        document.querySelector(".error").classList.remove("show_error");
    }

}
setInterval(check, 100)
function math_a(a) {
    if (!(value_3 == "")) {
        value_1 = "";
    }
    value_1 = value_1 + document.querySelector(".monitor-input").value + a;
    console.log(value_1);
    document.querySelector(".math_input").innerHTML = value_1;
    document.querySelector(".monitor-input").value = "";
}
function Equal() {
    value_1 = value_1 + document.querySelector(".monitor-input").value;
    document.querySelector(".math_input").innerHTML = value_1;
    document.querySelector(".monitor-input").value = "";
    var value_2 = document.querySelector(".math_input").innerHTML;

    document.querySelector(".monitor-input").value = value_3 = eval(value_2);

}

function del() {
    var value_4 = document.querySelector(".monitor-input").value.split("");
    value_4.pop();
    var fg = "";
    for (let i = 0; i < value_4.length; i++) {
        fg += value_4[i];

    }
    document.querySelector(".monitor-input").value = fg;
}

function reset() {
    document.querySelector(".monitor-input").value = "";
    document.querySelector(".math_input").innerHTML = "Calculator";
    value_1 = "";
    value_2 = "";
    value_3 = "";
}