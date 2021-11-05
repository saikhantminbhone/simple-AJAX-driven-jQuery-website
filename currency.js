$(function () {
    var jsonURL = "currency.json";
    var currencyoption;

    $.getJSON(jsonURL, function (result)
    {
     
      $.each(result, function ( i,currency) {
        
        currencyoption += "<option ' value= '"+currency.price +" ' >" + currency.name + " </option>";
     
      });

    $("#sel").html(currencyoption);
 
    });

});



$ ("document").ready (function() {

    $("#sel").change (function() {

     

var selectedvalue = $("#sel option:selected");
var price = selectedvalue.val ();
var symbol = selectedvalue.text ();


var price1 = price*5;
var price2 = price*2.5;
var price3 = price*1;
var price4 = price*4;






$("#Mashroom").html  (symbol + price1);
$("#Potatos").html ( symbol + price2);
$("#carrots").html (symbol + price3);
$("#Tomatoes").html (symbol + price4);


    });

}
);