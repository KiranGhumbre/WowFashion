fetch('./Categories/wDresses.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('women-dresses').innerHTML = data;
             });