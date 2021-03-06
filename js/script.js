    var popuplinks = document.getElementsByClassName("popuplink");
    var overlay = document.getElementsByClassName("popup-overlay")[0];
    var closeButtons = document.getElementsByClassName("popup-close");

    var form = document.querySelector(".write-us-form");
    var username = form.querySelector("#name");
    var email = form.querySelector("#email");
    var letter = form.querySelector("#letter");

    [].forEach.call(popuplinks, function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var popupID = "#map-popup";
        if (link.classList.contains("writeUsPopUp")) {
          popupID = "#write-us-popup";
        }
        var popup = document.querySelector(popupID);
        overlay.classList.add("active");
        popup.classList.add("active");
      })
    });

    [].forEach.call(closeButtons, function (close) {
      close.addEventListener("click", function (e) {
        e.preventDefault();
        overlay.classList.remove("active");
        close.parentElement.classList.remove("active");
        close.parentElement.classList.remove("error");
      })
    });

    form.addEventListener("submit", function (e) {
      if (!username.value || !email.value || !letter.value) {
        e.preventDefault();
        form.parentElement.classList.add("error");
        if (!username.value) {
          username.classList.add("error");
        } else {
          username.classList.remove("error");
        }
        if (!email.value) {
          email.classList.add("error");
        } else {
          email.classList.remove("error");
        }
        if (!letter.value) {
          letter.classList.add("error");
        } else {
          letter.classList.remove("error");
        }
      } else {
        username.classList.remove("error");
        email.classList.remove("error");
        letter.classList.remove("error");
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("letter", letter.value);
        console.log(localStorage);  
        overlay.classList.remove("active");
        close.parentElement.classList.remove("active");
        close.parentElement.classList.remove("error");        
      }
    });

    var sliderIndicators = document.querySelectorAll(".slider-indicators button");
    [].forEach.call(sliderIndicators, function (slideButton, key) {
      slideButton.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll(".slider-indicators .active")[0].classList.remove("active");
        document.querySelectorAll(".slide.active")[0].classList.remove("active");
        document.querySelectorAll(".slide")[key].classList.add("active");
        document.getElementsByClassName("slide-number")[0].innerHTML = "0" + (key + 1);
        slideButton.parentElement.classList.add("active");
      })
    });

    var serviceLinks = document.querySelectorAll(".home-services-menu a");
    var serviceDescription = document.querySelectorAll(".home-services-description li");
    [].forEach.call(serviceLinks, function (sLink, key) {
      sLink.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".home-services-menu li.active").classList.remove("active");
        document.querySelector(".home-services-description li.active").classList.remove("active");        
        sLink.parentElement.classList.add("active");
        serviceDescription[key].classList.add("active");
      });
    });

    var searchBtn = document.querySelector(".search .button");
    var searchStr = document.querySelector(".search input[name=search-string]");
    searchBtn.addEventListener("mousedown", function(e) {
      searchStr.classList.toggle("focus");
    });
    searchBtn.addEventListener("mouseup", function(e) {
      searchStr.classList.toggle("focus");
    })
