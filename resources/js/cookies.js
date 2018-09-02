

var dropCookie = true; // false disables the Cookie
var cookieDuration = 1; // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie'; // Name of the cookie
var cookieValue = 'on'; // Value of the cookie

function createDiv(){
	var bodytag = document.querySelector('body');
	var div = document.createElement('div');
	div.id = 'cookie-law';
	div.innerHTML = '<p>We use cookies to create the most secure and effective website possible for our customers. Full details can be found <a href="#" rel="nofollow" title="Privacy &amp; Cookies Policy">here</a> <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><i class="ion-ios-close"></i></a></p>';
	// Korean text for innerHTML: 저희 웹사이트는 인터넷의 쿠키를 사용합니다. 계속한다면 우리의 <a>개인 정보 정책에</a> 동의합니다.
	bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
	bodytag.className += 'cookiebanner'; //Adds a class to the <body> tag when the banner is visible
	createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	if(window.dropCookie) {
		document.cookie = name+"="+value+expires+"; path=/";
	}
}

//Checks the value of the cookie with <name> and returns it, if available.
function checkCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i].trim();
		//c = c.trim();
		if (c.indexOf(nameEQ) == 0){
			return c.substring(nameEQ.length,c.length);
		}
	}
	return null;
}

//Sets the cookie value to empty for the cookie of <name>, which erases the cookie.
function eraseCookie(name) {
	createCookie(name,"",-1);
}

//Runs when the window opens. Creates the cookie banner if the cookieValue is different.
window.onload = function(){
	if(checkCookie(window.cookieName) != window.cookieValue){
		createDiv();
	}
}

//Removes the cookie banner <div>
function removeMe(){
	//var element = document.getElementById('cookie-law'); OLD VERSION
	var element = document.querySelector('#cookie-law');
	element.parentNode.removeChild(element);
}