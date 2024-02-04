// Load the navigation dynamically
         fetch('./navigation.html')
             .then(response => response.text())
             .then(data => {
                 document.getElementById('navigation-placeholder').innerHTML = data;
             });

        
        // Load the footer dynamically
        fetch('./footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-content').innerHTML = data;
            });

         