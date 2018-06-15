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
    $("#kö").show();
}

// chips
function eatChips()
{
    let source = $("#chips_eat").attr('src');
    let stage = source.match(/\d/)[0] - 1;
    if(stage >= 0){
        $("#chips_eat").attr('src', source.replace(/\d/, stage));
        $('#chips_eat')[0].currentTime = 0.05;
        $('#chips_eat')[0].play();
    }
}

function refillChips(){
    let source = $("#chips_eat").attr('src');
    $("#chips_eat").attr('src', source.replace(/\d/, 9));
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