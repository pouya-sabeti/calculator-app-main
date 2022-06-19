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