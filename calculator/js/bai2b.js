function kiemTraSo(so) {
    if (isNaN(so) || so == '') {
        return false;
    }
    return true;
}

function cong() {
    let so1 = document.getElementById("txtSo1").value;
    let so2 = document.getElementById("txtSo2").value;

    if (!kiemTraSo(so1) || !kiemTraSo(so2)) {
        document.getElementById("kq").innerHTML = '<span style="color:red;">(*) Vui lòng nhập số hợp lệ!</span>';
        return;
    }

    so1 = parseFloat(so1);
    so2 = parseFloat(so2);

    let ketQua = so1 + so2;
    document.getElementById("kq").innerHTML = ketQua;
}

function tru() {
    let so1 = document.getElementById("txtSo1").value;
    let so2 = document.getElementById("txtSo2").value;

    if (!kiemTraSo(so1) || !kiemTraSo(so2)) {
        document.getElementById("kq").innerHTML = '<span style="color:red;">(*) Vui lòng nhập số hợp lệ!</span>';
        return;
    }

    so1 = parseFloat(so1);
    so2 = parseFloat(so2);

    let ketQua = so1 - so2;
    document.getElementById("kq").innerHTML = ketQua;
}

function nhan() {
    let so1 = document.getElementById("txtSo1").value;
    let so2 = document.getElementById("txtSo2").value;

    if (!kiemTraSo(so1) || !kiemTraSo(so2)) {
        document.getElementById("kq").innerHTML = '<span style="color:red;">(*) Vui lòng nhập số hợp lệ!</span>';
        return;
    }

    so1 = parseFloat(so1);
    so2 = parseFloat(so2);

    let ketQua = so1 * so2;
    document.getElementById("kq").innerHTML = ketQua;
}

function chia() {
    let so1 = document.getElementById("txtSo1").value;
    let so2 = document.getElementById("txtSo2").value;

    if (!kiemTraSo(so1) || !kiemTraSo(so2)) {
        document.getElementById("kq").innerHTML = '<span style="color:red;">(*) Vui lòng nhập số hợp lệ!</span>';
        return;
    }

    so1 = parseFloat(so1);
    so2 = parseFloat(so2);

    if (so2 === 0) {
        document.getElementById("kq").innerHTML = '<span style="color:red;">(*) Không thể chia cho 0!</span>';
        return;
    }

    let ketQua = so1 / so2;
    document.getElementById("kq").innerHTML = ketQua;
}