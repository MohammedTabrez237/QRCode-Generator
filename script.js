let imgTab = document.getElementById("imgTab");
let qrImg = document.getElementById("qrImg");
let qrInfo = document.getElementById("qrInfo");


function generateQR() {
    if (qrInfo.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInfo.value;
        imgTab.classList.add("show-img");
    }
    else {
        qrInfo.classList.add("error");
        setTimeout(() => {
            qrInfo.classList.remove("error");
        }, 1000);
    }
}

