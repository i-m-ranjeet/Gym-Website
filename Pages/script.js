
const loginForm = document.querySelector('.acc-form');
const form = document.querySelector('.form');
const upload_file = document.querySelector('.upload-button');
const lg_form = document.querySelector('.lg-form');
const rg_form = document.querySelector('.rg-form');
const choise1 = document.querySelector('.ch1');
const choise2 = document.querySelector('.ch2');
const profile_container = document.querySelector('.profile-container');
const aadhar_holder = document.querySelector('.aadhar-holder');
const aadhar = document.querySelector('.aadhar');
// function displayLogin(){
// 	lg_form.style="display:;";
// 	rg_form.style="display:none;";
// 	loginForm.style.right="0";
// 	form.style.top="50%";
// 	choise1.style="background:transparent; cursor:text;";
// 	choise2.style="background:#15f; cursor:pointer;";
// }
// function displayReg(){
// 	lg_form.style="display:none;";
// 	rg_form.style="display:;";
// 	loginForm.style.right="0";
// 	form.style.top="50%";
// 	choise1.style="background:#15f; cursor:pointer;";
// 	choise2.style="background:transparent; cursor:text;";
	
// }
function closeForm(){
	loginForm.style.right="-100%";
	form.style.top="-100%";	
}
function upload(){
	upload_file.click();
}
function openlink(navvalue){
	switch(navvalue){
		case 'home':
		window.location.href="../index.html";
		break;
		case 'instructors':
		window.location.href="instructors.html";
		break;
		case 'classes':
		window.location.href="classes.html";
		break;
		case 'rules':
		window.location.href="rules.html";
		break;
		case 'about':
		window.location.href="about.html";
		break;
		case 'profile':
		window.location.href="profile.html";
		break;
	}
}
function showprofile(){
	profile_container.style.left="0";
}
function closeprofile(){
	profile_container.style.left="100%";
}
function show_preview(){
	aadhar_holder.style.left="0";
	aadhar.style.top = "50%";
}
function close_preview(){
	aadhar_holder.style.left="100%";
	aadhar.style.top = "-100%";
}
