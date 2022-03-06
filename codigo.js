var video = document.querySelector('video');
var camera = document.getElementById('openCam').addEventListener('load', myAuth());


var foto = document.getElementById('tirarFoto').addEventListener('click', () => {

    var canvas = document.querySelector('canvas');
    clicks += 1;
    
    if(clicks > 2){
    console.log('clickou mais que 2');
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0) //pega o frame e põe na tag canvas

        console.log('tirou foto')

    }

    });


function myAuth(){

    navigator.mediaDevices.getUserMedia({ video: true }) //acessa a camera através do navegador
        .then(function (stream) {
            video.srcObject = stream;
            video.play();  //inicializa o video
        })
        .catch(function (error) {
            console.log(error);
        })
       
}



function toDataURL(src, callback, outputFormat) {
    var img = document.getElementById('tirarFoto');
    img.onload = img.addEventListener('click', function () {
        var canvas = document.querySelector('canvas');
        var context;
        context = canvas.getContext('2d');
        var dataUrl;
        var i = 0;
        do {
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            context.drawImage(video, 0, 0);
            dataUrl = canvas.toDataURL();

            i++;

        } while (i <= 4);


      //  console.log(dataUrl);

    }),

        img.src = src;
    if (img.complete || img.complete == undefined) {
        img.src = "data;image/png;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = src;
    }

}

toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0'),
    function (dataUrl) {
        console.log(dataUrl);
    }


