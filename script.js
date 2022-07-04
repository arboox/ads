document.querySelector("#upload-button").addEventListener("click", function () {
  (document.querySelector("#overlay").style.display = "block");
  (document.querySelector("#overlay").className = "overlay emerge");
  (document.querySelector("#upload-s").style.display = "block");
});

document.querySelector("#upload-s-d").addEventListener("click", function () {
  (document.querySelector("#overlay").style.display = "none");
  (document.querySelector("#upload-s").style.display = "none");
});

document.querySelector("#mt-sel-1").addEventListener("click", function () {
  (document.querySelector("#media-photo").style.display = "block");
  (document.querySelector("#media-video").style.display = "none");
  (document.querySelector("#photo-final").style.display = "block");
  (document.querySelector("#video-final").style.display = "none");
});

document.querySelector("#mt-sel-2").addEventListener("click", function () {
  (document.querySelector("#media-video").style.display = "block");
  (document.querySelector("#media-photo").style.display = "none");
  (document.querySelector("#video-final").style.display = "block");
  (document.querySelector("#photo-final").style.display = "none");
});

document.querySelector("#display-s-t").addEventListener("click", function () {
  (document.querySelector("#overlay").style.display = "block");
  (document.querySelector("#overlay").className = "overlay emerge");
  (document.querySelector("#display-s").style.display = "block");
});

document.querySelector("#display-s-d").addEventListener("click", function () {
  (document.querySelector("#overlay").style.display = "none");
  (document.querySelector("#display-s").style.display = "none");
});

document.querySelector("#fs-t").addEventListener("click", function () {
  (document.querySelector("#preview").style.width = "100%");
  (document.querySelector("#fs-t").style.display = "none");
  (document.querySelector("#fs-d").style.display = "block");
  (document.querySelector("#fs-controls").style.right = "16px");
  (document.querySelector(".advert").style.marginTop = "4%");
});

document.querySelector("#fs-d").addEventListener("click", function () {
  (document.querySelector("#preview").style.width = "50%");
  (document.querySelector("#fs-t").style.display = "block");
  (document.querySelector("#fs-d").style.display = "none");
  (document.querySelector("#fs-controls").style.right = "calc(50% + 16px)");
  (document.querySelector(".advert").style.marginTop = "9%");
});

document.querySelector("#adtype-s-t").addEventListener("click", function () {
  (document.querySelector("#overlay").style.display = "block");
  (document.querySelector("#overlay").className = "overlay emerge");
  (document.querySelector("#adtype-s").style.display = "block");
});

document.querySelector("#adtype-s-d").addEventListener("click", function () {
  (document.querySelector("#overlay").style.display = "none");
  (document.querySelector("#adtype-s").style.display = "none");
});

document.querySelector("#adt-sel-1").addEventListener("click", function () {
  (document.querySelector("#app-info").style.display = "none");
  (document.querySelector("#ad-app-display").style.display = "none");
  (document.querySelector("#ad-display").style.display = "block");
});

document.querySelector("#adt-sel-2").addEventListener("click", function () {
  (document.querySelector("#app-info").style.display = "block");
  (document.querySelector("#ad-app-display").style.display = "block");
  (document.querySelector("#ad-display").style.display = "none");
});

document.querySelector("#options-m-t").addEventListener("click", function () {
  (document.querySelector("#options-m").style.display = "block");
  (document.querySelector("#options-m").className = "m emerge");
  (document.querySelector("#options-m-d").style.display = "block");
  (document.querySelector("#options-m-t").style.display = "none");
});

document.querySelector("#options-m-d").addEventListener("click", function () {
  (document.querySelector("#options-m").style.display = "none");
  (document.querySelector("#options-m-d").style.display = "none");
  (document.querySelector("#options-m-t").style.display = "block");
});


function photo() {
        var x = document.getElementById("photo-url").value;

        document.getElementById("upload-photo-prev").src = x;
  document.getElementById("photo-final").src = x;
  document.getElementById("media-final").poster = x;
  document.getElementById("media-final").src = "none";
      }

function video() {
        var x = document.getElementById("video-url").value;

        document.getElementById("upload-vid-prev").src = x;
  document.getElementById("video-final").src = x;
  document.getElementById("media-final").src = x;
  document.getElementById("media-final").poster = "none";
      }

function logo() {
        var x = document.getElementById("logo-img-src").value;

        document.getElementById("logo-img-prev").src = x;
  document.getElementById("logo-final").src = x;
      }

function bname() {
        var name = document.getElementById("public-name").value;

        document.getElementById("name-final").innerHTML = name;
      }

function callToAction() {
  var select = document.getElementById("calltoaction");
var value = select.options[select.selectedIndex].value;
  
  document.getElementById("cta").innerHTML = value;
  document.getElementById("app-call").innerHTML = value;
}

function appic() {
        var x = document.getElementById("app-ic-src").value;

        document.getElementById("app-ic-prev").src = x;
  document.getElementById("logo-final-app").src = x;
      }

function appna() {
        var x = document.getElementById("app-name-i").value;

        document.getElementById("name-final-app").innerHTML = x;
      }

function apphl() {
        var x = document.getElementById("app-hl-i").value;

        document.getElementById("headline-final-app").innerHTML = x;
      }

function finishFetch(){
  setTimeout(function(){
    document.getElementById("progress-bar").style.display="none";
  document.getElementById("pub-card-sk").style.display="none";
  document.getElementById("checkout-sk").style.display="none";
  document.getElementById("pub-card-main").style.display="block";
  document.getElementById("checkout-s").style.display="block";
  }, 5000);
}

document.querySelector("#publish-v-t").addEventListener("click", function () {
  (document.querySelector("#publish-view").style.display = "block");
});

document.querySelector("#publish-v-t-2").addEventListener("click", function () {
  (document.querySelector("#publish-view").style.display = "block");
});

document.querySelector("#publish-v-d").addEventListener("click", function () {
  (document.querySelector("#publish-view").style.display = "none");
});

function legalName() {
        var x = document.getElementById("legal-name").value;

      document.getElementById("pc-bname").innerHTML = x;
      }

function adName() {
        var x = document.getElementById("ad-name").value;

        document.getElementById("pc-cname").innerHTML = x;
      }

function pcURL() {
        var x = document.getElementById("landing-url").value;

        document.getElementById("pc-url").innerHTML = x;
      }

function sDate() {
        var x = document.getElementById("start-date").value;

        document.getElementById("pc-sd").innerHTML = x;
      }

function eDate() {
        var x = document.getElementById("end-date").value;

        document.getElementById("pc-ed").innerHTML = x;
      }

document.querySelector("#adt-sel-1").addEventListener("click", function () {
  (document.querySelector("#pc-adtype").innerHTML = "Short");
});

document.querySelector("#adt-sel-2").addEventListener("click", function () {
  (document.querySelector("#pc-adtype").innerHTML = "App install");
});

document.querySelector("#o-s-1").addEventListener("click", function () {
  (document.querySelector("#pc-objective").innerHTML = "Drive traffic");
});

document.querySelector("#o-s-2").addEventListener("click", function () {
  (document.querySelector("#pc-objective").innerHTML = "App installs");
});

document.querySelector("#o-s-3").addEventListener("click", function () {
  (document.querySelector("#pc-objective").innerHTML = "Awareness");
});

document.querySelector("#submit-btn").addEventListener("click", function () {
  (document.querySelector("#success-view").style.display = "block");
});

document.querySelector("#success-v-d").addEventListener("click", function () {
  (document.querySelector("#success-view").style.display = "none");
});
