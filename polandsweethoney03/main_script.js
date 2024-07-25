var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 140 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }
    wordArray.push(letters);
}

var count = 1;
$(function () {
    $(".try").click(function () {
        changeWord();
        if (count < 3) {
            $(this).attr('src', "cry.webp");
            count++;
            setTimeout(function () {
                var sc2 = document.getElementById("success02");
                sc2.className += " animate";
                var sctip02 = document.getElementById("successtip02");
                sctip02.className += " animateSuccessTip";
                var md2 = document.getElementById("modal02");
                md2.className += " visible";
                var so = document.querySelector(".sweet-overlay");
                so.style.display = "block";
            }, 800);
        } else {
            $(this).attr('src', "gift2.webp");
            setTimeout(function () {
                document.getElementById("modal03").className += " visible";
                document.querySelector(".sweet-overlay").style.display = "block";
            }, 800);
        }
    });
});

var counter = 2;
$(document).ready(function () {
    $('#update').on('click', function () {
        if (counter == 2) {
            counter++;
            $('#cntVal').html(function (i, val) {
                return +val - 1
            });
        }
    });
});

function hidemodal02() {
    document.getElementById("modal02").classList.remove("visible");
    document.querySelector(".sweet-overlay").style.display = "none";
}