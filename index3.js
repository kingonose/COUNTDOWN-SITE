

var countDownDate = new Date("Sep 27, 2024 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = '<span>' + days + '</span><div class="countdown-label">days</div>';
    document.getElementById("hours").innerHTML = '<span>' + hours + '</span><div class="countdown-label">hours</div>';
    document.getElementById("minutes").innerHTML = '<span>' + minutes + '</span><div class="countdown-label">minutes</div>';
    document.getElementById("seconds").innerHTML = '<span>' + seconds + '</span><div class="countdown-label">seconds</div>';

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
let slideIndex = 0;   
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}