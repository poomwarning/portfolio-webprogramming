window.onload = contain;
var piboon ;
var word ;
var topic;
var comment1 ;
var comment2 ;

function contain()
{
 piboon = true;
 
 topic = document.getElementById("topic1");
 comment1 = document.getElementById("comment1");
 comment2 = document.getElementById("comment2");
}
function postFunction()
{
    word = document.getElementById("text1").value;
     if(topic.innerHTML.length<=0)
    {
        topic.innerHTML = word;
        console.log("it has 0 array");
    }
    else if(comment1.innerHTML.length<=0)
    {
        comment1.innerHTML = word;
    }
    else if(comment2.innerHTML.length<=0)
    {
        comment2.innerHTML = word;
    }
    else
    {
     alert("its full man !!ss");
    }
    document.getElementById("text1").value = null;
}

function clearFunction()
{
    topic.innerHTML = null;
    comment1.innerHTML = "";
    comment2.innerHTML = "";
}

