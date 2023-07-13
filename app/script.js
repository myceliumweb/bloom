var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antarctica","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Democratic Republic of the Congo","Costa Rica","Cote D'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","eSwatini","Ethiopia","Fiji","Finland","France","French Guiana","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Greenland","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Vatican City","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","North Korea","South Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libyan","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","Somaliland","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Western Sahara","Yemen","Zambia","Zimbabwe"];


var locDisplayNum = 0;
function displayLocationChoices() {
	if (locDisplayNum == 0) {
	document.getElementById("location-selections").style.display = "block";
  document.getElementById("location-selector").innerHTML = `select location <span style="float:right">&#9650;</span>`;
  locDisplayNum = 1;
  } else {
  document.getElementById("location-selections").style.display = "none";
  document.getElementById("location-selector").innerHTML = `select location <span style="float:right">&#9660;</span>`;
  locDisplayNum = 0;
  }
}

function setLocation(input) {
	var userLoc = input;
}

function addCountry(country) {
	var x = document.createElement("button");
  x.style = "width:100%;background:lightgrey;margin-top:0px;margin-bottom:0px;border-radius:0pxfont-size:10px;";
  x.innerHTML = country;
  x.onclick = function() {setLocation(country); this.style.background = "tomato"; document.getElementById("location-selections").style.pointerEvents = "none";};
	document.getElementById("location-selections").appendChild(x);
}

for (let i = 0; i < countries.length; i++) {
	addCountry(countries[i]);
}

//page functions
function show(elmnt) {
	elmnt.style.display = "block";
}
function hide(elmnt) {
	elmnt.style.display = "none";
}
var page = {
	loading: document.getElementById("loading-logo"),
  prompt: document.getElementById("sign-in-prompt"),
  signIn: document.getElementById("sign-in"),
  createAccount: document.getElementById("create-account"),
  questionaire: document.getElementById("questionaire"),
  tab: document.getElementById("tab-div"),
  feed: document.getElementById("feed")
}
//load post content
var postNumber = 0;
function addToFeed() {
	var r = Math.round(Math.random() * 250);
  var g = Math.round(Math.random() * 250);
  var b = Math.round(Math.random() * 250);
  var postCreator = "<span class='link'>@bloom_tests</span> – post" + postNumber;
  var randomWord = words[Math.round(Math.random() * words.length)];
  var randomFilter = "saturate(" + Math.round(Math.random() * 2000) + "%) invert(" + Math.round(Math.random() * 100) + "%) contrast(" + Math.round(Math.random() * 2000) + "%)";
  //dimensions
  var h = window.innerHeight - 100;
  var w = (window.innerHeight - 100) * (9/16);
	var x = document.createElement("div");
  x.style = `
  	height: ${h + "px"};
    width: ${w + "px"};
    background: rgb(${r}, ${g}, ${b});
    border: none;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 15px;
    margin-left: ${((window.innerWidth - w) / 2) + "px"}`;
  x.innerHTML = `
  	<img src="https://source.unsplash.com/random?=${Math.random()}" class="img" style="filter:${randomFilter}">
  	<div class="comment">
    	<p style="color:white;width:90%;margin:30px 5%;font-size:15px;text-align:left;">${postCreator}<span class="material-icons" style="color:white;font-size:30px;float:right;margin:0px 10px 0px 0px;" onclick="this.style.color='tomato';">favorite</span></p>
    </div>`;
    postNumber++;
  page.feed.appendChild(x);
}
setInterval(addToFeed,500);
show(page.loading);
setTimeout(function() {hide(page.loading);show(page.prompt)}, 2000);