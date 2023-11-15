var jumpscarediv = document.querySelector(".jump");
var jumpscareVideo = document.querySelector("#jumpscare");

function showImage(imageSrc) {
    document.getElementById('enlargedImg').src = imageSrc;
    document.getElementById('fullImage').style.display = 'block';
}

function hideImage() {
    document.getElementById('fullImage').style.display = 'none';
}

 
function exibirJumpscare() {
  jumpscarediv.style.display = "block";
  jumpscareVideo.play();

  // setTimeout(() => {
  //   jumpscarediv.style.display = "none";
  // }), 10000



}                                    

