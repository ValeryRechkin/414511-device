    var popuplinks = document.getElementsByClassName('popuplink');
    var overlay = document.getElementsByClassName('popup-overlay')[0];
    var closeButtons = document.getElementsByClassName('popup-close');

    [].forEach.call(popuplinks, function(link) {
      link.addEventListener('click', function(e) {
        popupID = link.getAttribute('href');
        popup = document.querySelector(popupID);
        overlay.classList.add("active");
        popup.classList.add("active");
        console.log(overlay);
      })
    });

    [].forEach.call(closeButtons, function(close) {
      close.addEventListener('click', function(e) {
        overlay.classList.remove("active");
        close.parentElement.classList.remove("active");
      })
    });

    var sliderIndicators = document.querySelectorAll('.slider-indicators button');
    [].forEach.call(sliderIndicators, function(slideButton,  key) {
      slideButton.addEventListener('click', function(e) {
        document.querySelectorAll('.slider-indicators .active')[0].classList.remove('active');
        document.querySelectorAll('.slide.active')[0].classList.remove('active');
        document.querySelectorAll('.slide')[key].classList.add('active');
        document.getElementsByClassName('slide-number')[0].innerHTML = "0"+(key+1);
        slideButton.parentElement.classList.add('active');
      })
    });
