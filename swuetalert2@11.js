const cr = "©Copyright 2023  <img src='https://i.im.ge/2022/12/18/dnNRqa.2564-01-03-094436.png' width='25' height='25' alt='AllaboutITAppScript'> Teerapong Promwang"
const text = document.getElementById("text").innerHTML = `<div id="loader">
    <div class="overlay">
      <div class="overlay__inner">
        <div class="overlay__content">
          <span><h1><center><i class="fas fa-cog fa-pulse"></i>&#3607;&#3656;&#3634;&#3609;&#3652;&#3604;&#3657;&#3621;&#3610;&#3594;&#3639;&#3656;&#3629;&#3612;&#3641;&#3657;&#3614;&#3633;&#3602;&#3609;&#3634;&#3629;&#3629;&#3585;&#3652;&#3611;&#3649;&#3621;&#3657;&#3623; <br>&#3619;&#3632;&#3610;&#3610;&#3592;&#3638;&#3591;&#3652;&#3617;&#3656;&#3626;&#3634;&#3617;&#3634;&#3619;&#3606;&#3651;&#3627;&#3657;&#3607;&#3656;&#3634;&#3609;&#3651;&#3594;&#3657;&#3591;&#3634;&#3609;&#3605;&#3656;&#3629;&#3652;&#3604;&#3657; <br>&#3585;&#3619;&#3640;&#3603;&#3634;&#3651;&#3627;&#3657;&#3648;&#3585;&#3637;&#3618;&#3619;&#3605;&#3636;&#3612;&#3641;&#3657;&#3614;&#3633;&#3602;&#3609;&#3634;&#3604;&#3657;&#3623;&#3618;&#3588;&#3619;&#3633;&#3610;</span>
          </h1></div></center></span>
      </div>
    </div>
  </div>`;
/** start**/
  $(document ).ready(async function() {
      document.getElementById('message').innerHTML= cr;
      document.getElementById('message').className = 'msgBg';
      document.getElementById('loader').style.display = "none";
      //const location =  await getlocation();
      //console.log(location)
      //init(location)
  });
