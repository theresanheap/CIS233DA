showTime();
let gasLevel = 0;

function getGas() {
    if (gasLevel === 0) {
        gasLevel = 1;
        document.getElementById('gas').src = './assets/images/gas1.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.png';
    } else {
        gasLevel = 0;
        document.getElementById('gas').src = './assets/images/gas0.png';
        document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.png';
    }
}

  

let tracStatus = 0; 
let battStatus = 0; 
let parkStatus = 0; 

function getTrac() {
    if (tracStatus === 0) {
      tracStatus = 1;
      document.getElementById('trac').src = './assets/images/trac1.PNG';
      document.getElementById('bttn_trac').src = './assets/images/bttn_trac_1.PNG';
    } else if (tracStatus === 1) {
      tracStatus = 0;
      document.getElementById('trac').src = './assets/images/trac0.PNG';
      document.getElementById('bttn_trac').src = './assets/images/bttn_trac_0.PNG';
    }
  }
  
  function getBatt() {
    if (battStatus === 0) {
      battStatus = 1;
      document.getElementById('batt').src = './assets/images/batt1.PNG';
      document.getElementById('bttn_batt').src = './assets/images/bttn_batt_1.PNG';
    } else if (battStatus === 1) {
      battStatus = 0;
      document.getElementById('batt').src = './assets/images/batt0.PNG';
      document.getElementById('bttn_batt').src = './assets/images/bttn_batt_0.PNG';
    }
  }
  
  function getPark() {
    if (parkStatus === 0) {
      parkStatus = 1;
      document.getElementById('brake').src = './assets/images/p1.PNG';
      document.getElementById('bttn_park').src = './assets/images/bttn_park_1.PNG';
    } else if (parkStatus === 1) {
      parkStatus = 0;
      document.getElementById('brake').src = './assets/images/p0.PNG';
      document.getElementById('bttn_park').src = './assets/images/bttn_park_0.PNG';
    }
  }

  let gearshiftStatus = 0;
const gearshiftIndicator = document.getElementById('mode');
const gearshiftImage = document.getElementById('bttn_shifter');

function setMode() {
  switch (gearshiftStatus) {
    case 0:
      gearshiftStatus = 1;
      gearshiftIndicator.innerHTML = 'ECO PRO';
      gearshiftImage.style.top = '720px';
      break;
    case 1:
      gearshiftStatus = 2;
      gearshiftIndicator.innerHTML = 'COMFORT';
      gearshiftImage.style.top = '740px';
      break;
    case 2:
      gearshiftStatus = 3;
      gearshiftIndicator.innerHTML = 'SPORT';
      gearshiftImage.style.top = '760px';
      break;
    default:
      gearshiftStatus = 0;
      gearshiftIndicator.innerHTML = 'PARK';
      gearshiftImage.style.top = '700px';
      break;
  }
}
