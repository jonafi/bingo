$(document).ready(function () {
    $.fn.preload = function () {
        this.each(function () {
            $('<img/>')[0].src = this;
        });
    }
    $(['beachball.jpg', 'seagull.jpg', 'crab.jpg', 'flipflops.jpg', 'icecream.jpg', 'scuba.jpg', 'seashell.jpg', 'umbrella.jpg']).preload();
    let i = 0;
    function begin() {
        $("#go").html("NEXT");
        if (i < 8) {
            $("#bigCard").html('<img class = "full" src="' + draw[i] + '.jpg"/>');
            $("#littleCard").append('<img class = "tiny" src="' + draw[i] + '.jpg"/>');
            i++;
        }
        else {
            $("#go").addClass("hide");
            $("#bigCard").html('<p class="gameover">GAME OVER!</p><button id="new">NEW GAME</button>');
        }
    }
    $(document).on("click", "#new", refresh);
    $("#go").on("click", begin);
});
let options = ["beachball", "seagull", "crab", "flipflops", "icecream", "scuba", "seashell", "umbrella"];
const shuffle = function (array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
let draw = shuffle(options);
function refresh() {
    location.reload();
}