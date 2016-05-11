var $ = jQuery.noConflict();
var user_browser = "";
var browser_detected ="";
var browser_version = "";
var navigator_user = "";
var browser_sha2_compatibility = "";
var it_responsible = "";
var visited = "yes";
var pc = "";
var browser = get_browser_info();
var nAgt = navigator.userAgent;

$(document).ready(function(){
	$('#test-it2').click(function(){
		testbrowser();
	});
	
	$('#dismiss').click(function(){
		$('#response-overlay').removeClass('show');
		location.reload();
	});
	
	$('#no2').click(function(){
		$('#proceed-content').addClass('show');
		$("#proceed-content").load('/site-includes/helphub/proceed.html',function(){});
	});
	$('#browser_input').val(browser.name + browser.version);	
	$('#system_input').val(nAgt);
});
function newPopup(url) {
	var height = screen.height-30;
	var width = screen.width-10;
	popupWindow = window.open(
		url,'popUpWindow','height='+height+',width='+width+',left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}

function testbrowser() {
	var nVer = navigator.appVersion;
	var browserName  = browser.name;
	var majorVersion = browser.version;
	var fullVersion  = ''+parseFloat(navigator.appVersion); 
	var nameOffset,verOffset,ix;
	var sha2_checked = false;
	
	if (browserName == 'Chrome') {
		if (majorVersion < 26) {
		} else {
			sha2_checked = true;
		}
	}

	if (browserName == 'Firefox') {
		if (majorVersion < 1.5) {
		} else {
			sha2_checked = true;
		}
	}

	if (browserName == 'Mozilla') {
		if (majorVersion < 1.4) {
		} else {
			sha2_checked = true;
		}
	}

	if (browserName == 'Opera') {
		if (majorVersion < 9) {
		} else {
			sha2_checked = true;
		}
	}

	if (browserName == 'Safari') {
		if (majorVersion < 3) {
		} else {
			sha2_checked = true;
		}
	}

	if (browserName == 'Netscape') {
		if (majorVersion < 7.1) {
		} else {
			sha2_checked = true;
		}
	}

	if (browserName == 'MSIE') {
		if (majorVersion < 7) {
		} else {
			sha2_checked = true;
		}
	}

	if (browserName == 'Konqueror') {
		if (fullVersion < 3.56) {
		} else {
			sha2_checked = true;
		}
	}
	
	$('#pop-overlay-content').addClass('show');
	$('#pop-overlay-content').load('/site-includes/helphub/window.html',function(){});

}

function get_browser_info(){
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'MSIE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }