var prediction1;
var prediction2;

Webcam.set({height:300,width:350,image_format:'png',image_quality:90});

var camera = document.getElementById("camera");
Webcam.attach("#camera");

function TakePic()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("photoResult").innerHTML = "<img id='capturedPic' src="+data_uri+">";
    });
}

