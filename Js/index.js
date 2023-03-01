var NumberView0 = 3;
var NumberView02 = 269;
document.getElementById('number-view0').innerHTML= NumberView0 + "," + NumberView02;
function view() {
    NumberView02+=1
    document.getElementById('number-view0').innerHTML= NumberView0 + "," + NumberView02;
}

var NumberLike = 0;
document.getElementById('number-like').innerHTML= NumberLike;
function like() {
    NumberLike+=1; 
    document.getElementById('number-like').innerHTML= NumberLike;
}

var NumberDislike = 0;
document.getElementById('number-dislike').innerHTML= NumberDislike;
function dislike() {
    NumberDislike+=1;
    document.getElementById('number-dislike').innerHTML= NumberDislike;
}

var NumberView1 = 3;
var NumberView12 = 456;
document.getElementById('number-view1').innerHTML= NumberView1 + "," + NumberView12;
function view1() {
    NumberView12+=1
    document.getElementById('number-view1').innerHTML= NumberView1 + "," + NumberView12;
}

var NumberLike1 = 0;
document.getElementById('number-like1').innerHTML= NumberLike1;
function like1() {
    NumberLike1+=1;
    document.getElementById('number-like1').innerHTML= NumberLike1;
}

var NumberDislike1 = 0;
document.getElementById('number-dislike1').innerHTML= NumberDislike1;
function dislike1() {
    NumberDislike1+=1;
    document.getElementById('number-dislike1').innerHTML= NumberDislike1;
}

var NumberView2 = 3;
var NumberView22 = 746;
document.getElementById('number-view2').innerHTML= NumberView2 + "," + NumberView22;
function view2() {
    NumberView22+=1
    document.getElementById('number-view2').innerHTML= NumberView2 + "," + NumberView22;
}

var NumberLike2 = 0;
document.getElementById('number-like2').innerHTML= NumberLike2;
function like2() {
    NumberLike2+=1;
    document.getElementById('number-like2').innerHTML= NumberLike2;
}

var NumberDislike2 = 0;
document.getElementById('number-dislike2').innerHTML= NumberDislike2;
function dislike2() {
    NumberDislike2+=1;
    document.getElementById('number-dislike2').innerHTML= NumberDislike2;
}

var NumberView3 = 23;
var NumberView32 = 649;
document.getElementById('number-view3').innerHTML= NumberView3 + "," + NumberView32;
function view3() {
    NumberView32+=1
    document.getElementById('number-view3').innerHTML= NumberView3 + "," + NumberView32;
}

var NumberLike3 = 0;
document.getElementById('number-like3').innerHTML= NumberLike3;
function like3() {
    NumberLike3+=1;
    document.getElementById('number-like3').innerHTML= NumberLike3;
}

var NumberDislike3 = 0;
document.getElementById('number-dislike3').innerHTML= NumberDislike3;
function dislike3() {
    NumberDislike3+=1;
    document.getElementById('number-dislike3').innerHTML= NumberDislike3;
}

var NumberView4 = 41;
var NumberView42 = 114;
document.getElementById('number-view4').innerHTML= NumberView4 + "," + NumberView42;
function view4() {
    NumberView42+=1
    document.getElementById('number-view4').innerHTML= NumberView4 + "," + NumberView42;
}

var NumberLike4 = 0;
document.getElementById('number-like4').innerHTML= NumberLike4;
function like4() {
    NumberLike4+=1;
    document.getElementById('number-like4').innerHTML= NumberLike4;
}

var NumberDislike4 = 0;
document.getElementById('number-dislike4').innerHTML= NumberDislike4;
function dislike4() {
    NumberDislike4+=1;
    document.getElementById('number-dislike4').innerHTML= NumberDislike4;
}

var numberweekover , numberweekout , numbermonthover , numbermonthout , numberyearover , numberyearout;
function week() {
    document.getElementById('content-month').style.position='absolute'
    document.getElementById('content-month').style.opacity='0'
    document.getElementById('content-month').style.visibility='hidden'
    document.getElementById('content-year').style.position='absolute'
    document.getElementById('content-year').style.opacity='0'
    document.getElementById('content-year').style.visibility='hidden'
    document.getElementById('content-week').style.position='relative'
    document.getElementById('content-week').style.visibility='visible'
    document.getElementById('content-week').style.opacity='1'
    document.getElementById('week').style.background='#39a0d0'
    document.getElementById('week').style.color='#fff'
    document.getElementById('week').style.cursor='default'
    document.getElementById('month').style.color='#555'
    document.getElementById('year').style.color='#555'
    document.getElementById('month').style.background='#f5f5f5'
    document.getElementById('year').style.background='#f5f5f5'
    document.getElementById('month').style.cursor='pointer'
    document.getElementById('year').style.cursor='pointer'
    numberweekover=0;
    numberweekout=1;
    numbermonthover=1;
    numbermonthout=0;
    numberyearover=1;
    numberyearout=0;
}

function month() {
    document.getElementById('content-week').style.position='absolute'
    document.getElementById('content-week').style.opacity='0'
    document.getElementById('content-week').style.visibility='hidden'
    document.getElementById('content-year').style.position='absolute'
    document.getElementById('content-year').style.opacity='0'
    document.getElementById('content-year').style.visibility='hidden'
    document.getElementById('content-month').style.position='relative'
    document.getElementById('content-month').style.visibility='visible'
    document.getElementById('content-month').style.opacity='1'
    document.getElementById('month').style.background='#39a0d0'
    document.getElementById('month').style.color='#fff'
    document.getElementById('month').style.cursor='default'
    document.getElementById('week').style.color='#555'
    document.getElementById('year').style.color='#555'
    document.getElementById('week').style.background='#f5f5f5'
    document.getElementById('year').style.background='#f5f5f5'
    document.getElementById('week').style.cursor='pointer'
    document.getElementById('year').style.cursor='pointer'
    numberweekover=1;
    numberweekout=0;
    numbermonthover=0;
    numbermonthout=1;
    numberyearover=1;
    numberyearout=0;
}

function year() {
    document.getElementById('content-week').style.position='absolute'
    document.getElementById('content-week').style.opacity='0'
    document.getElementById('content-week').style.visibility='hidden'
    document.getElementById('content-month').style.position='absolute'
    document.getElementById('content-month').style.opacity='0'
    document.getElementById('content-month').style.visibility='hidden'
    document.getElementById('content-year').style.position='relative'
    document.getElementById('content-year').style.visibility='visible'
    document.getElementById('content-year').style.opacity='1'
    document.getElementById('year').style.background='#39a0d0'
    document.getElementById('year').style.color='#fff'
    document.getElementById('year').style.cursor='default'
    document.getElementById('week').style.color='#555'
    document.getElementById('month').style.color='#555'
    document.getElementById('week').style.background='#f5f5f5'
    document.getElementById('month').style.background='#f5f5f5'
    document.getElementById('week').style.cursor='pointer'
    document.getElementById('month').style.cursor='pointer'
    numberweekover=1;
    numberweekout=0;
    numbermonthover=1;
    numbermonthout=0;
    numberyearover=0;
    numberyearout=1;
}

function onmouseoverweek() {
    if (numberweekover == 1) {
        document.getElementById('week').style.color='#1E81B0' 
    }
}

function onmouseoutweek() {
    if (numberweekout == 0) {
        document.getElementById('week').style.color='#555' 
    }
}

function onmouseovermonth() {
    if (numbermonthover == 1) {
        document.getElementById('month').style.color='#1E81B0' 
    }
}

function onmouseoutmonth() {
    if (numbermonthout == 0) {
        document.getElementById('month').style.color='#555' 
    }
}

function onmouseoveryear() {
    if (numberyearover == 1) {
        document.getElementById('year').style.color='#1E81B0' 
    }
}

function onmouseoutyear() {
    if (numberyearout == 0) {
        document.getElementById('year').style.color='#555' 
    }
}

function onclickmusic() {
    document.getElementById('id-music').style.background='#111'
    document.getElementById('id-album').style.background='none'
    document.getElementById('id-video').style.background='none'

    document.getElementById('id-chevron-bottom-music').style.visibility='visible'
    document.getElementById('id-chevron-bottom-album').style.visibility='hidden'
    document.getElementById('id-chevron-bottom-video').style.visibility='hidden'

    document.getElementById('id-chevron-bottom-music').style.opacity='1'
    document.getElementById('id-chevron-bottom-album').style.opacity='0'
    document.getElementById('id-chevron-bottom-video').style.opacity='0'

    document.getElementById('id-music').style.cursor='default'
    document.getElementById('id-album').style.cursor='pointer'
    document.getElementById('id-video').style.cursor='pointer'

    document.getElementById('content-music').style.opacity='1'
    document.getElementById('content-album').style.opacity='0'
    document.getElementById('content-music-video').style.opacity='0'

    document.getElementById('content-music').style.visibility='visible'
    document.getElementById('content-album').style.visibility='hidden'
    document.getElementById('content-music-video').style.visibility='hidden'

    document.getElementById('content-music').style.display='block'
    document.getElementById('content-album').style.display='none'
    document.getElementById('content-music-video').style.display='none'

    document.getElementById('content-music').style.position='relative'
    document.getElementById('content-album').style.position='absolute'
    document.getElementById('content-music-video').style.position='absolute'
}

function onclickalbum() {
    document.getElementById('id-music').style.background='none'
    document.getElementById('id-album').style.background='#111'
    document.getElementById('id-video').style.background='none'

    document.getElementById('id-chevron-bottom-music').style.visibility='hidden'
    document.getElementById('id-chevron-bottom-album').style.visibility='visible'
    document.getElementById('id-chevron-bottom-video').style.visibility='hidden'

    document.getElementById('id-chevron-bottom-music').style.opacity='0'
    document.getElementById('id-chevron-bottom-album').style.opacity='1'
    document.getElementById('id-chevron-bottom-video').style.opacity='0'

    document.getElementById('id-music').style.cursor='pointer'
    document.getElementById('id-album').style.cursor='default'
    document.getElementById('id-video').style.cursor='pointer'
    
    document.getElementById('content-music').style.opacity='0'
    document.getElementById('content-album').style.opacity='1'
    document.getElementById('content-music-video').style.opacity='0'

    document.getElementById('content-music').style.visibility='hidden'
    document.getElementById('content-album').style.visibility='visible'
    document.getElementById('content-music-video').style.visibility='hidden'

    document.getElementById('content-music').style.display='none'
    document.getElementById('content-album').style.display='block'
    document.getElementById('content-music-video').style.display='none'

    document.getElementById('content-music').style.position='absolute'
    document.getElementById('content-album').style.position='relative'
    document.getElementById('content-music-video').style.position='absolute'
}

function onclickvideo() {
    document.getElementById('id-music').style.background='none'
    document.getElementById('id-album').style.background='none'
    document.getElementById('id-video').style.background='#111'

    document.getElementById('id-chevron-bottom-music').style.visibility='hidden'
    document.getElementById('id-chevron-bottom-album').style.visibility='hidden'
    document.getElementById('id-chevron-bottom-video').style.visibility='visible'

    document.getElementById('id-chevron-bottom-music').style.opacity='0'
    document.getElementById('id-chevron-bottom-album').style.opacity='0'
    document.getElementById('id-chevron-bottom-video').style.opacity='1'

    document.getElementById('id-music').style.cursor='pointer'
    document.getElementById('id-album').style.cursor='pointer'
    document.getElementById('id-video').style.cursor='default'
    
    document.getElementById('content-music').style.opacity='0'
    document.getElementById('content-album').style.opacity='0'
    document.getElementById('content-music-video').style.opacity='1'

    document.getElementById('content-music').style.visibility='hidden'
    document.getElementById('content-album').style.visibility='hidden'
    document.getElementById('content-music-video').style.visibility='visible'

    document.getElementById('content-music').style.display='none'
    document.getElementById('content-album').style.display='none'
    document.getElementById('content-music-video').style.display='block'
    
    document.getElementById('content-music').style.position='absolute'
    document.getElementById('content-album').style.position='absolute'
    document.getElementById('content-music-video').style.position='relative'
}
function onclickmenu() {
    document.getElementById('id-shadow-menu').style.visibility='visible'
    document.getElementById('id-menu-media-screen').style.right='200px'
    document.getElementById('id-shadow-menu').style.opacity='1'
}
function onclickshadow() {
    document.getElementById('id-shadow-menu').style.visibility='hidden'
    document.getElementById('id-shadow-menu').style.opacity='0'
    document.getElementById('id-menu-media-screen').style.right='-200px'
}

window.addEventListener("scroll" , scrollfunction)
function scrollfunction() {
    var y1 = document.querySelector("header").offsetHeight
    var y2 = window.pageYOffset
    if (y2 > y1) {
        document.getElementsByClassName("nav")[0].classList.add("nav_scroll")
        document.getElementsByClassName("social-media")[0].classList.add("social_media_scroll")
        document.getElementsByClassName("search")[0].classList.add("search_scroll")
        document.getElementsByClassName("input_search")[0].classList.add("input_search_scroll")
        document.getElementsByClassName("icon_menu")[0].classList.add("icon_menu_scroll")
        var i ;
        for (i = 0 ; i <= 5 ; i++) {
            document.getElementsByClassName("li_menu")[i].classList.add("li_menu_scroll")
        }
    }
    else {
        document.getElementsByClassName("nav")[0].classList.remove("nav_scroll")
        document.getElementsByClassName("social-media")[0].classList.remove("social_media_scroll")
        document.getElementsByClassName("search")[0].classList.remove("search_scroll")
        document.getElementsByClassName("input_search")[0].classList.remove("input_search_scroll")
        var i ;
        for (i = 0 ; i <= 5 ; i++) {
            document.getElementsByClassName("li_menu")[i].classList.remove("li_menu_scroll")
        }
    }
}