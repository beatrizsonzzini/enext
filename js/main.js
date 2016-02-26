function addCart(){
  document.getElementById("bag-number").innerHTML=parseInt(document.getElementById("bag-number").innerHTML)+1;
  window.location='#close';
}

function lightbox(number){
  window.location='#lightbox';

  loadJSON(function(response) {
	  var json= JSON.parse(response);
    var ingredients="";
	  console.debug(json.potions[number]);
	  var potion=json.potions[number];	
    document.getElementById("image-modal").src="products/"+potion.image;
    document.getElementById('title-modal').innerHTML = potion.name;
    document.getElementById('use-modal').innerHTML = potion.effect; 
    for(var i in potion.ingredients){
      ingredients+=potion.ingredients[i]+"<br />";  
    }
    document.getElementById('ingredients-modal').innerHTML = ingredients;
    document.getElementById('price-modal').innerHTML = "<br />$"+potion.price;
  });
}

function loadJSON(callback)
{
   var data_file = 'potions.json';
   var http_request = new XMLHttpRequest();
   try{
      // Opera, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // IE
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            alert("Your browser broke!");
            return false;
         }
      }
   }
   http_request.open("GET", data_file, true);
   http_request.overrideMimeType("application/json");
   http_request.onreadystatechange  = function(){
      if (http_request.readyState == 4)
      {
		    callback(http_request.responseText);
      }
   }
   
   http_request.send(null);
 
}

function mostrarMenu(){
  document.getElementById('menu').style.opacity="1";
  document.getElementById('menu').style.display="block";
  document.getElementById('search').style.opacity="1";
  document.getElementById('search').style.display="block";
  document.getElementById('iconX').style.opacity="1";
  document.getElementById('iconX').style.display="inline-block";
  document.getElementById('logotipo').style.opacity="0";
  document.getElementById('logotipo').style.display="none";
  document.getElementById('icon').style.opacity="0";
  document.getElementById('icon').style.display="none";
  document.getElementById('bag').style.opacity="0";
  document.getElementById('bag').style.display="none";
  document.getElementById('bag-label').style.opacity="0";
  document.getElementById('bag-label').style.display="none";
  document.getElementById('bag-number').style.opacity="0";
  document.getElementById('bag-number').style.display="none";
}

function esconderMenu(){
  document.getElementById('menu').style.opacity="0";
  document.getElementById('menu').style.display="none";
  document.getElementById('search').style.opacity="0";
  document.getElementById('search').style.display="none";
  document.getElementById('iconX').style.opacity="0";
  document.getElementById('iconX').style.display="none";
  document.getElementById('logotipo').style.opacity="1";
  document.getElementById('logotipo').style.display="inline-block";
  document.getElementById('icon').style.opacity="1";
  document.getElementById('icon').style.display="inline-block";
  document.getElementById('bag').style.opacity="1";
  document.getElementById('bag').style.display="block";
  document.getElementById('bag-label').style.opacity="1";
  document.getElementById('bag-label').style.display="inline-block";
  document.getElementById('bag-number').style.opacity="1";
  document.getElementById('bag-number').style.display="inline-block";
}


