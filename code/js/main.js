window.onload = function() {
    initReview();
}

// infotexts
function hideInfoTexts()
{
    var elements = document.getElementsByClassName('infoText');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';        
    }
}
function showProduction()
{
    hideInfoTexts();
    document.getElementById('Production').style.display = 'block';
}
function showConvertion()
{
    hideInfoTexts();
    document.getElementById('Convertion').style.display = 'block';
}
function showDelivery()
{
    hideInfoTexts();
    document.getElementById('Delivery').style.display = 'block';
}

// chips
function eatChips()
{
    let chips = document.getElementById('chips_eat');
    let source = chips.src;
    let stage = source.match(/(\d).JPG/)[1] - 1;
    if(stage >= 0){
        chips.src = source.replace(/\d.JPG/, stage) + '.JPG';
        let audio = document.getElementById('crisp');
        audio.currentTime = 0.05;
        audio.play();
    }
}

function refillChips(){
    let chips = document.getElementById('chips_eat');
    let source = chips.src;
    chips.src = source.replace(/\d.JPG/, 9) + '.JPG'
}


// video overlay

window.addEventListener("load", () =>{
    let videos = document.getElementsByClassName('video_overlay');
    for (let i = 0; i < videos.length; i++) {
        videos[i].addEventListener('click', videoOverlayClick);    
    }
});


function videoOverlayClick(e){
    let overlay = e.target.closest('.video_overlay');
    let video = overlay.querySelectorAll('video')[0];
    if(video.paused){
        video.play();
        overlay.querySelectorAll('.video_button')[0].style.display = 'none';
    }
    else{
        video.pause();
        overlay.querySelectorAll('.video_button')[0].style.display = "block";
    }
}

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
    document.getElementById('reviewerName').innerHTML = reviews[reviewIndex][0];
    document.getElementById('quote').innerHTML = reviews[reviewIndex][1];
}