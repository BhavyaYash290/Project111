p1="";
p2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedImage" src="'+data_uri+'">';
    });
}
console.log("ml5 Version : ", ml5.version);

classifier=ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/kU9y3QP-n/.json, modelLoaded');
function modelLoaded(){
    console.log("model's loaded");
}
function speak(){
    var synth=window.SpeechSynthesis;
    speakData1="The first prediction is "+p1;
    speakData2="The second prediction is "+p2;
    var utterThis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterThis);
}