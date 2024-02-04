var cost = document.querySelector("span").textContent;
cost = parseInt(cost);

var quantity = 1;

document.querySelector("#quantityWindow").value = quantity;

document.querySelector("#sub").addEventListener("click", subtract);
document.querySelector("#add").addEventListener("click", addition);

var costPrize = document.querySelector("#cost");
var shippingPrize = document.querySelector("#shiping");
var totalElement = document.querySelector("#total");

costPrize.innerHTML = "₹" + cost;
shippingPrize.innerHTML = "₹50";

costPrizeValue = parseInt(cost);
shippingPrizeValue = parseInt(shippingPrize.innerHTML.replace("₹", ""));

updateTotal();

function subtract() {
    if (quantity > 1) {
        quantity--;
        document.querySelector("#quantityWindow").textContent = quantity;
        document.querySelector("#quantityWindow").value = quantity;
        costPrizeValue = cost * quantity;
        costPrize.innerHTML = "₹" + costPrizeValue;

        updateTotal();
    }
}

function addition() {
    quantity++;
    document.querySelector("#quantityWindow").value = quantity;
    costPrizeValue = cost * quantity;
    costPrize.innerHTML = "₹" + costPrizeValue;

    updateTotal();
}

function updateTotal() {
    var total = costPrizeValue + shippingPrizeValue;
    totalElement.innerHTML = "₹" + total;
}
