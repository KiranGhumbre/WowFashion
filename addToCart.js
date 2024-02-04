document.addEventListener('DOMContentLoaded', function () {
   
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-block')) {
            addToCart(event.target);
        }
    });

    function addToCart(button) {
       alert("Product added to cart")
    }
});