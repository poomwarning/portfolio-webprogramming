window.onload = loginLoad;
var loginfrom ;
var usernames ;
var password;
var item = JSON.parse(sessionStorage.getItem("IDPASS"));
function loginLoad(){
	loginfrom  = document.getElementById("myLogin");;
	
	loginfrom.onsubmit = checkLogin;
	loginfrom.onreset = reseting;
	console.log(item.ID+" pass :"+item.PASS);
}

function checkLogin(){
	usernames = document.getElementById("username");
	password = document.forms["myLogin"]["password"]
	 console.log(usernames.value+"and"+ password.value);
	if(usernames.value==item.ID&&password.value ==item.PASS)
	{
		alert("password correct")
	}
	else
	{
		alert("password nor ID incorrect")
		return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}
function reseting()
{
	window.location.reload();
}

			