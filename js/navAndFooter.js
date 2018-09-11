/* 导航的背景色及字体色变化 */
var w = document.getElementById("body");
w.onscroll=function(e){
	if ($(document).scrollTop() >= 300) {
		$(".navCon").css({"background":"rgba(0,0,0,0.6)"});
		$("nav .navList li a").addClass("blackA");
	} else{
		$(".navCon").css({"background":"rgba(255,255,255,0.6)"});
		$("nav .navList li a").removeClass("blackA");
	}
}