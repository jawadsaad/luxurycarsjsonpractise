/* ----------------------------------------------------------------------------------------
    THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */


var mySurvey = document.getElementById('survey');

mySurvey.addEventListener('change', loadData, false);

var myManufacturer = document.getElementById('manufacturer');

myManufacturer.addEventListener('change', loadData, false);


function loadData() {
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    console.log(manufacturerStored);
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open('GET', 'https://raw.githubusercontent.com/jawadsaad/luxurycarsjsonpractise/master/expensiveLuxuryCars.json', true);
    
    myRequest.onload = function() {
        if(this.readyState == 4 && this.status == 200) {
            var myData = JSON.parse(this.responseText);
            console.log(myData);
            
            if(manufacturerStored === '') {
                function clearAll() {
                     var hideText = document.getElementsByClassName('data');
                     for(var i = 0; i < hideText.length; i++) {
                         hideText[i].innerHTML = '';
                     }
                }
                
                clearAll();
                document.getElementById('messageAlert').innerHTML = "You must choose a car manufacturer to load data...";
                
            } else {
                document.getElementById('messageAlert').innerHTML = "";
                
                document.getElementById('manufacturerC').innerHTML = myData.data[manufacturerStored].manufacturer;
                document.getElementById('modelC').innerHTML = myData.data[manufacturerStored].model;
                document.getElementById('priceC').innerHTML = myData.data[manufacturerStored].price;
                document.getElementById('descriptionC').innerHTML = myData.data[manufacturerStored].description;
                document.getElementById('videoC').innerHTML = '<iframe width="560" height="315" src="' + myData.data[manufacturerStored].video + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                document.getElementById('overallC').innerHTML = myData.data[manufacturerStored].quality[0].rating;
                document.getElementById('mechanicalC').innerHTML = myData.data[manufacturerStored].quality[1].rating;
                document.getElementById('powertrainC').innerHTML = myData.data[manufacturerStored].quality[2].rating;
                document.getElementById('bodyC').innerHTML = myData.data[manufacturerStored].quality[3].rating;
                document.getElementById('interiorC').innerHTML = myData.data[manufacturerStored].quality[4].rating;
                document.getElementById('accessoriesC').innerHTML = myData.data[manufacturerStored].quality[5].rating;
                document.getElementById('imgC').innerHTML = '<img src="' + myData.data[manufacturerStored].img + '" />';
            }
        }
    }
    
    myRequest.send();
    
    console.log(myRequest);
}