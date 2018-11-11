var river = document.getElementById("river1");
var trees = document.getElementById("tree1");
var crops = document.getElementById("crops1");
var mountains = document.getElementById("mountains1");
var gold = document.getElementById("gold1");
var butterflies = document.getElementById("butterflies1");
var pickeditems = [];
total = 0;
var userwon = document.getElementById("userwon1");
var userlost = document.getElementById("userlost1")

river.addEventListener("click", addriver);
trees.addEventListener("click", addriver);
crops.addEventListener("click", addriver);
mountains.addEventListener("click", addriver);
gold.addEventListener("click", addgold);
butterflies.addEventListener("click", addriver);


function addriver(event) {
    total += 350;
    document.getElementById("itembought1").innerHTML = "river";

}

function addgold(event) {
    total += 425;
    document.getElementById("itembought1").innerHTML += " gold";
}


document.getElementById("purchase1").addEventListener("click", runPurchase);

function runPurchase() {
    document.getElementById("gamesection").classList.add("hidden");

    if(total <= 500) {
        document.getElementById("spent1").innerHTML = total;

        document.getElementById("gooditem").innerHTML = "river";

        userwon.classList.remove("hidden");
    } else {
        document.getElementById("spent2").innerHTML = total;

        userlost.classList.remove("hidden");
    }

    document.getElementById("purchase1").classList.add("hidden");

}

document.getElementById("tryagain").addEventListener("click", restart);

function restart() {
    total = 0;
}




