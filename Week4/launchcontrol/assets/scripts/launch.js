function tryLaunch() {
    let launchStatus = true;
    let errorMessage = '';
  
    if (parkStatus === 1) {
      errorMessage += 'Parking brake needs to be disengaged. ';
      launchStatus = false;
    }
    if (tracStatus === 1) {
      errorMessage += 'Traction control needs to be off. ';
      launchStatus = false;
    }
    if (gasLevel === 0) {
      errorMessage += 'Gas tank needs to be filled. ';
      launchStatus = false;
    }
    if (battStatus === 0) {
      errorMessage += 'Battery needs to be charged. ';
      launchStatus = false;
    }
    if (gearshiftStatus !== 3) {
      errorMessage += 'Gear shift needs to be in SPORT mode. ';
      launchStatus = false;
    }
  
    if (!launchStatus) {
      document.getElementById('launch').src = './assets/images/lca0.PNG';
      document.getElementById('msg').innerHTML = errorMessage;
      new Audio('./assets/media/sputter.mp3').play();
    } else {
      document.getElementById('launch').src = './assets/images/lca1.PNG';
      document.getElementById('msg').innerHTML = '';
      new Audio('./assets/media/launch.mp3').play();
    }
  }
  