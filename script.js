
let langs = ["日本語", "中文", "Română"];
let i = 0;

function change() {
    i = (i + 1) % langs.length;
    update();
}

function prev() {
    i = (i - 1 + langs.length) % langs.length;
    update();
}

function update() {
    document.getElementById("text").innerText = langs[i];
}

function hienTrangChu() {
    document.getElementById("ketqua").innerHTML = "Trang chủ";
}

document.querySelectorAll(".word").forEach(el => {
    el.addEventListener("click", () => {
        alert(
            el.innerText + "\n" +
            el.dataset.reading + "\n" +
            el.dataset.mean
        );
    });
});

function showN5() {
    document.getElementById("n5box").classList.remove("d-none");
}

function closeBox() {
    document.getElementById("n5box").classList.add("d-none");
}
