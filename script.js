function generateQRCode() {
  const vcardContent = document.getElementById('vcardInput').value
  const qrcodeDiv = document.getElementById('qrcode')

  // Clear existing QR code if any
  qrcodeDiv.innerHTML = ''

  if (vcardContent.trim() === '') {
    alert('Please enter vCard content.')
    return
  }

  // Generate QR code as SVG
  QRCode.toString(
    vcardContent,
    {
      type: 'svg',
      errorCorrectionLevel: 'L',
      width: 256, // Adjust as needed
      rendererOpts: {
        quality: 1,
      },
    },
    function (err, url) {
      if (err) throw err
      qrcodeDiv.innerHTML = url
    }
  )
}
