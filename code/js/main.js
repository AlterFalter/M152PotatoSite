window.onload = function() {
    initReview();
}

// infotexts
function hideInfoTexts()
{
    $(".infoText").hide();
}
function showProduction()
{
    hideInfoTexts();
    $("#Production").show();
}
function showConvertion()
{
    hideInfoTexts();
    $("#Convertion").show();
}
function showDelivery()
{
    hideInfoTexts();
    $("#Delivery").show();
}

// chips
function eatChips()
{
    let source = $("#chips").attr('src');
    let stage = source.match(/\d/)[0] - 1;
    if(stage >= 0){
        $("#chips").attr('src', source.replace(/\d/, stage));
        $('#crisp')[0].currentTime = 0.05;
        $('#crisp')[0].play();
    }
}

function refillChips(){
    let source = $("#chips").attr('src');
    $("#chips").attr('src', source.replace(/\d/, 9));
}

// lightbox
function openModal(n) {
    currentSlide(n);
    document.getElementById('myModal').style.display = "block";
}
  
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}
  
var slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

// video overlay
$(".video_overlay").on('click', (e) => {
    let overlay = $(e.target).closest('.video_overlay');
    let video = overlay.find('video').get(0);
    if(video.paused){
        video.play();
        overlay.find('.video_button').hide();
    }
    else{
        video.pause();
        overlay.find('.video_button').show();
    }
});

// reviews
var reviewIndex;
var reviews;
function initReview()
{
    reviewIndex = 0;
    reviews = [
        ["Roman Schilter", "The real name for a potato is Gummel! You should eat Gümmel with a Steak." ],
        ["Jonas Portman", "Baked potatoes are the best!" ],
        ["Marco Despeaux", "Potatoes are like unicorns. Awesome and farting rainbows." ],
    ];
    updateReview();
}
function showPrevReview()
{
    reviewIndex--;
    if (reviewIndex == -1)
    {
        reviewIndex = reviews.length - 1;
    }
    updateReview();
}
function showNextReview()
{
    reviewIndex++;
    if (reviewIndex == reviews.length)
    {
        reviewIndex = 0;
    }
    updateReview();
}
function updateReview()
{
    $("#reviewerName").text(reviews[reviewIndex][0]);
    $("#quote").text(reviews[reviewIndex][1]);
}