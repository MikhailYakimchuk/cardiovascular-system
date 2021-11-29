
let isEN = false

const changeLanguage = document.getElementById("lang")
console.log(changeLanguage)
changeLanguage.onclick = ()=>{
    isEN = !isEN
    if (isEN){
        document.getElementById('image_id').src = 'img/1ua.png';
        document.getElementById("lang_h1").innerHTML = "ВИВЧЕННЯ ГЕМОДИНАМІКИ У ФІЗИЧНІЙ МОДЕЛІ"
        document.getElementById("lang_p").innerHTML = "Фізична модель серцево-судинної системи"
       } 
        else{
        document.getElementById('image_id').src = 'img/1en.png'
        document.getElementById("lang_h1").innerHTML = "STUDY OF HEMODYNAMICS IN THE PHYSICAL MODEL"
        document.getElementById("lang_p").innerHTML = "The physical model of the cardiovascular system"
       }
}

document.addEventListener('change', function () {
    var chk = event.target
    
    if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {

    if(chk.checked &&chk.name == 'a'){   
        if (isEN) intervalId = setInterval(varNameUa, 700)
        else intervalId = setInterval(varName, 700)
     }
        else clearInterval(intervalId)
    
      

}})

    var intervalId = null;
    var images  = ['img/1en.png', 'img/2en.png', 'img/3en.png', 'img/2en.png'],
    imagesUa  = ['img/1ua.png', 'img/2ua.png', 'img/3ua.png', 'img/2ua.png'],
    length  = images.length,
    lengthUa  = imagesUa.length,
    index   = 1;


    var varName = function(){
        document.getElementById('image_id').src = 'img/1en.png'
     if(index == length) index = 0;
     document.getElementById('image_id').src = images[index++];
    };   
    
    var varNameUa = function(){
        document.getElementById('image_id').src = 'img/1ua.png';
        if(index == lengthUa) index = 0;
        document.getElementById('image_id').src = imagesUa[index++];
       };   