let respones = require("./Command-respones");
let barcodetoZip = require("./TranslateBarcodetoZipCodeCommand-class");
class goToBrcodeToZipcodepage {
  execute() {
    let text = `Please input bar code:`;
    let newmapping = {"*":new barcodetoZip(this)};
    return new respones(text, newmapping, false, false);
  }
}
module.exports = goToBrcodeToZipcodepage;
