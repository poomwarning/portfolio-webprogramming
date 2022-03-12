window.onload = pageLoad;
var mycorm ;
var IDre;
var passre;
var spanerror;
var allTEXTBOX;
var IDPASS = 
{
    ID: "",
    PASS: ""
};

function exportvalue ()
{
  IDPASS;
}


function pageLoad()
{
    spanerror = document.getElementById("errormsg");
  mycorm = document.getElementById("myForm");
  mycorm.onsubmit = onclicksubmit;
  mycorm.onreset = onreseting;
}
function onclicksubmit()
{
    // var frompass1 = document.getElementsByName("password1").values;
    // var frompass2 = document.getElementsByName("password2").values;
    // var username = document.getElementsByName("username").values;
    var frompass1 = document.forms["myForm"]["password1"];
    var frompass2 = document.forms["myForm"]["password2"];
    var username = document.forms["myForm"]["username"];
    //alert(frompass1.value+"and"+frompass2.value);
    if(frompass1.value==frompass2.value)
    {
        alert("ooooooof gl");
       IDPASS.ID = username.value;
       IDPASS.PASS = frompass1.value;
      window.sessionStorage.setItem("IDPASS",JSON.stringify(IDPASS));
    }
    else
    {
        spanerror.innerHTML = "please fill correct information";
        alert("ooooooof wrong ");
        return false;
    }
}
function onreseting()
{
  window.location.reload();
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

/*module.exports ={student};*/