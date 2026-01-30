function showPage(page){
            var content = document.getElementById("content");

            if(page === "about"){
                content.innerHTML = "<h3>About Us</h3><p>We serve fresh and tasty food daily.</p>";
            }
            else if(page === "menu"){
                content.innerHTML = "<h3>Menu</h3><p>Pizza | Burger | Pasta | Drinks</p>";
            }
            else if(page === "contact"){
                content.innerHTML = "<h3>Contact</h3><p>Phone: 1234567890<br>Email: restaurant@gmail.com</p>";
            }
        }

        // Offer button
        function showOffer(){
            alert("🎉 20% Discount Today!");
        }