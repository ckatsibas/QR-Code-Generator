var qrCodeContainer = document.getElementById("qrCodeContainer");

function generateQR() {
  var input = document.querySelector("input");
  if (input.value === "" || input.value === " ") {
    alert("Input Field Can not be blank!");
  } else {
    if (qrCodeContainer.firstChild != null) {
      qrCodeContainer.removeChild(qrCodeContainer.firstChild);
    }
    var svgNode = new QRCode(input.value);
    qrCodeContainer.appendChild(svgNode);
    qrCodeContainer.classList.add("show-image");
    input.value = "";
  }
}
