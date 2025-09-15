let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        imgBox.classList.remove("show-img");
        qrImage.src = "";
        alert("Error Maukkan Text atau Url terlebih dahulu!");
    }
}

function downloadQR(){     
    if(qrImage.src && qrImage.src !== "" && imgBox.classList.contains("show-img")){         
        const link = document.createElement("a");         
        link.href = qrImage.src;         
        link.download = "qr_code.png";         
        document.body.appendChild(link);         
        link.click();         
        document.body.removeChild(link);
        alert("QR Code berhasil didownload!");
    } else {         
        alert("QR Code belum di-generate!\nSilakan generate QR Code terlebih dahulu sebelum download.");
        qrText.focus();
    } 
}