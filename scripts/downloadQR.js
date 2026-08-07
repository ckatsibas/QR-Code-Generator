var qrCodeContainer = document.getElementById("qrCodeContainer");

async function downloadSVG() {
  if (qrCodeContainer.firstChild != null) {
    await svgExport.downloadSvg(qrCodeContainer.firstChild, "myQRCode");
  } else {
    alert("The is no QR Code to download! Generate one first.");
  }
}
