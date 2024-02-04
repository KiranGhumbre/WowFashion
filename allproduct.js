fetch('./Categories/wSkirts.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('women-skirts').innerHTML = data;
             });

fetch('./Categories/wPants.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('women-pants').innerHTML = data;
             });

fetch('./Categories/wDresses.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('women-dresses').innerHTML = data;
             });

fetch('./Categories/mshirts.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('men-shirts').innerHTML = data;
             }); 

fetch('./Categories/mPants.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('men-pants').innerHTML = data;
             });

fetch('./Categories/mHoodies.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('men-hoodies').innerHTML = data;
             });

fetch('./Categories/Kids.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('kids').innerHTML = data;
             });

