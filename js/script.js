
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
// function calcBmi(weight, height){
//   var weight = document.getElementById('weight').value;
//   var height = document.getElementById('height').value;
//   var bmi = Math.round((weight / (height * height))*10000);
//   var error = 'Błąd. Wpisz poprawne dane.'

//   if (10 <= bmi && bmi < 14 ){
//     return bmi = document.getElementById('result').value=bmi + ' = Masz dużą niedowagę.';
//   } else if(15 <= bmi && bmi < 19){
//     return bmi = document.getElementById('result').value=bmi + ' = Masz niedowagę.';
//   } else if (19 <= bmi && bmi < 25) {
//     return bmi = document.getElementById('result').value=bmi + ' = Jesteś zdrowy!';
//   } else if (25 <= bmi && bmi < 30) {
//     return bmi = document.getElementById('result').value=bmi + ' = Masz niewielką nadwagę.';
//   } else if (30 <= bmi && bmi < 40) {
//     return bmi = document.getElementById('result').value=bmi + ' = Masz nadwagę.';
//   } else if (40 <= bmi && bmi < 50) {
//     return bmi = document.getElementById('result').value=bmi + ' = Masz poważną nadwagę!';
//   } else if (bmi >= 50 && bmi < 120){
//     return bmi = document.getElementById('result').value=bmi + ' = Jesteś bardzo otyły.';
//   } else if ( 120 <= bmi || 10 > bmi){
//     return error = document.getElementById('result').value=error;
//   }
// }


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

  // function calcBmi(weight, height){

  //       var weight = document.getElementById('weight');
  //       var height = document.getElementById('height');
  //       var bmi = Math.round((weight / (height * height))*10000);

  //       if (10 <= bmi && bmi < 14){
  //         var wynik = bmi + ' = Masz dużą niedowagę.';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result');
  //       } else if(15 <= bmi && bmi < 19){
  //         var wynik = bmi + ' = Masz niedowagę.';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result').style.color = "#00bfff";
  //       } else if (19 <= bmi && bmi < 25) {
  //         var wynik = bmi + ' = Jesteś zdrowy!';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result').style.color = "#00ff00";
  //       } else if (25 <= bmi && bmi < 30) {
  //         var wynik = bmi + ' = Masz niewielką nadwagę.';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result').style.color = "#ffff1a";
  //       } else if (30 <= bmi && bmi < 40) {
  //         var wynik = bmi + ' = Masz nadwagę.';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result').style.color = "#ffbb33";
  //       } else if (40 <= bmi && bmi < 50) {
  //         var wynik = bmi + ' = Masz poważną nadwagę!';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result').style.color = "#ff6600";
  //       } else if (bmi >= 50 && bmi < 120){
  //         var wynik = bmi + ' = Jesteś bardzo otyły.';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result').style.color = "#ff0000";
  //       } else if ( 120 <= bmi || 10 > bmi){
  //         var wynik = 'Wpisz poprawne dane.';
  //         wynik.style.color = "#b3ecff";
  //         return wynik = document.getElementById('result').style.color = "#ff0000";
  //       }
  // }


  // function calcBmi(weight, height){

  //   var weight = document.getElementById('weight');
  //   var height = document.getElementById('height');
  //   var bmi = Math.round((weight / (height * height))*10000);

  //   if (10 <= bmi && bmi < 14){
  //   wynik = document.getElementById('result').bmi + ' = Masz dużą niedowagę.';
  //   wynik.style.color = "#b3ecff";
  //   return wynik;

  //   } else if(15 <= bmi && bmi < 19){
  //     var wynik = bmi + ' = Masz niedowagę.';
  //     return wynik = document.getElementById('result').value;
  //   } else if (19 <= bmi && bmi < 25) {
  //     var wynik = bmi + ' = Jesteś zdrowy!';
     
  //     return wynik = document.getElementById('result').value;
  //   } else if (25 <= bmi && bmi < 30) {
  //     var wynik = bmi + ' = Masz niewielką nadwagę.';
      
  //     return wynik = document.getElementById('result').value;
  //   } else if (30 <= bmi && bmi < 40) {
  //     var wynik = bmi + ' = Masz nadwagę.';
     
  //     return wynik = document.getElementById('result').value;
  //   } else if (40 <= bmi && bmi < 50) {
  //     var wynik = bmi + ' = Masz poważną nadwagę!';
      
  //     return wynik = document.getElementById('result').value;
  //   } else if (bmi >= 50 && bmi < 120){
  //     var wynik = bmi + ' = Jesteś bardzo otyły.';
    
  //     return wynik = document.getElementById('result').value;
  //   } else if ( 120 <= bmi || 10 > bmi){
  //     var wynik = 'Wpisz poprawne dane.';
     
  //     return wynik = document.getElementById('result').value;
  //   }
  // }
    
// *********************************** Mapa *******************************

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

