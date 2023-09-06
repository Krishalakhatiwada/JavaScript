// let paragraph=document.getElementById("demo");
// console.log(paragraph);

// let para2=document.getElementsByClassName("demo2");
// console.log(para2)[0];

// let boldtags=document.getElementsByTagName("b");
// console.log(boldtags);

//Query selector :
// let paragraph=document.querySelector("#demo");
// console.log(paragraph)
// let paragraph=document.querySelector(".demo2");
// console.log(paragraph);
// for all in class:
// let paragraph=document.querySelectorAll(".demo2");
// console.log(paragraph);

// document.write("Hello Shradha");
// console.log(document.getElementById("demo"));

// let paragraph=document.getElementById("demo1");
// paragraph.innerHTML="<b>Hello</b>";

// let paragraphs=document.getElementByClassName("demo2")
// paragraphs.innerHTML="JS";

// let paragraph=document.querySelectorAll(".demo3")[0];
// usingClass.innerHtml="Welcome";

// let image=document.getElementById("image");
// image.src="image.jpg";

// let timerPara=document.getElementById("time");
// timerPara.innerText=Date();

// let paragraph=document.getElementById("demo");
// paragraph.style.color='red';
 
// function displayDate(){
//     document.getElementById("demo").innerHTML=Date();
// }
const  msg=document.getElementById('msg');
document.getElementById('btn').addEventListener('mouseover',function(){
    msg.innerHTML="Why are you trying to click,goooo away😭";
})
document.getElementById('btn').addEventListener('mouseout',function(){
    msg.innerHTML="KINA hataisss feri rakh aba🤨";

})

