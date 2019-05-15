
// ********************************  Slider   **********************************************

$(document).ready(function(){
    
    var szybkosc = 500;
    var automatycznaZmiana = true;
    var czasZmianySlajdu = 5000; 

    $(".slide").first().addClass("active");

    $(".slide").hide();

    $(".active").show();

    $("#next").click(nastepnySlajd);{

    };

    $("#prev").click(poprzedniSlajd);{
  
    };

    if(automatycznaZmiana == true) {
        setInterval(nastepnySlajd, czasZmianySlajdu);
    
    };

    function nastepnySlajd(){
        $(".active").removeClass("active").addClass("oldActive");

        if($(".oldActive").is(":last-child")) {
           
            $(".slide").first().addClass("active");
        }
        else{
        
         $(".oldActive").next().addClass("active");
        }
       
         $(".oldActive").removeClass("oldActive");
        
         $(".slide").fadeOut(szybkosc);
        
         $(".active").fadeIn(szybkosc);
    };

    function poprzedniSlajd(){
        $(".active").removeClass("active").addClass("oldActive");
       
       if($(".oldActive").is(":first-child")) {
          
           $(".slide").last().addClass("active");
       }
       else{
      
        $(".oldActive").prev().addClass("active");
       }
       
        $(".oldActive").removeClass("oldActive");
        
        $(".slide").fadeOut(szybkosc);
        
        $(".active").fadeIn(szybkosc);
    }
});

// *******************************   Kalkulator BMI **********************************


function calcBmi(weight, height){
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var bmi = Math.round((weight / (height * height))*10000);
  var error = 'Błąd. Wpisz poprawne dane.'

  if (10 <= bmi && bmi < 14 ){
    return bmi = document.getElementById('result').value=bmi + ' = Masz dużą niedowagę.';
  } else if(15 <= bmi && bmi < 19){
    return bmi = document.getElementById('result').value=bmi + ' = Masz niedowagę.';
  } else if (19 <= bmi && bmi < 25) {
    return bmi = document.getElementById('result').value=bmi + ' = Jesteś zdrowy!';
  } else if (25 <= bmi && bmi < 30) {
    return bmi = document.getElementById('result').value=bmi + ' = Masz niewielką nadwagę.';
  } else if (30 <= bmi && bmi < 40) {
    return bmi = document.getElementById('result').value=bmi + ' = Masz nadwagę.';
  } else if (40 <= bmi && bmi < 50) {
    return bmi = document.getElementById('result').value=bmi + ' = Masz poważną nadwagę!';
  } else if (bmi >= 50 && bmi < 120){
    return bmi = document.getElementById('result').value=bmi + ' = Jesteś bardzo otyły.';
  } else if ( 120 <= bmi || 10 > bmi){
    return error = document.getElementById('result').value=error;
  }
}

    
// *********************************** Mapa ***********************************************

function zaladujMape(){
  
  var wspolrzedne = new google.maps.LatLng(54.3490998, 18.6491538,17);
  var opcjeMapy = {
      zoom: 15,
      center: wspolrzedne,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var mapa = new google.maps.Map(document.getElementById("mapka"), opcjeMapy);
}

// ******************************* "Przycisk "Powrót do góry" *******************************

jQuery(document).ready(function() {
  
    var btn = $('#button');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });



