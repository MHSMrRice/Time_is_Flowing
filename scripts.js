function showWaterfall() {
    document.getElementById("waterfall").classList.add("show");
    document.getElementById("waterfall").classList.remove("noShow");
    document.getElementById("hideall").classList.add("showing");
    document.getElementById("hideall").classList.remove("hide");
}
function showTable() {
    document.getElementById("table").classList.add("show");
    document.getElementById("table").classList.remove("noShow");
    document.getElementById("hideall").classList.add("showing");
    document.getElementById("hideall").classList.remove("hide");
}
function hideAll() {
    document.getElementById("table").classList.add("noShow");
    document.getElementById("waterfall").classList.add("noShow");
    document.getElementById("table").classList.remove("show");
    document.getElementById("waterfall").classList.remove("show");
    document.getElementById("hideall").classList.add("hide");
    document.getElementById("hideall").classList.remove("showing");
}