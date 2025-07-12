// .netlify/functions/submit-rims.js
exports.handler = async (event) => {
  // Parse form data
  const { namaRims, kodeRims, pemilikRims, fotoRims } = JSON.parse(event.body);
  
  // Simpan data ke file atau database
  // Di sini kita simpan ke file log sederhana
  const fs = require('fs');
  const path = require('path');
  
  const logData = {
    timestamp: new Date().toISOString(),
    namaRims,
    kodeRims,
    pemilikRims,
    fotoRims: fotoRims ? fotoRims.name : 'No file'
  };
  
  // Tulis ke file log
  const logPath = path.join(__dirname, 'rims-data.json');
  fs.appendFileSync(logPath, JSON.stringify(logData) + '\n');
  
  // Kembalikan response
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Data rims berhasil disimpan',
      data: logData
    })
  };
};
