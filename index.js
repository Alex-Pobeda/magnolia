        let toursCount = 0;
        const toursSelected = [];
        
        const count = document.body.querySelector('.count');
        
        function createTourCard(tour) {
            const container = document.body.querySelector('.container');
            const tourCard = document.createElement('div');
            tourCard.className = 'tourCard';
            tourCard.innerHTML = `
                <h3>${tour.title}</h3>
                <img src=${tour.img} alt=${tour.title} />
                <button class='buyButton' data-counter>Buy a Tour</button>
            `;
            container.appendChild(tourCard);
        };
        
        function createToursList(tours) {
            tours.forEach(tour => createTourCard(tour));
        };
        
        function buyTour(e) {
            let target = e.target;
            if (!e.target.hasAttribute('data-counter')) return;
            toursCount += 1;
            count.textContent = toursCount;
            toursSelected.push(target.previousElementSibling.alt);
        };
        
        const buyButton = document.body.querySelector('.container');
        buyButton.addEventListener('click', buyTour);
        
        const cart = document.body.querySelector('.cart');
        
        function showPopup() {
            const popup = document.body.querySelector('.popuptext');
            popup.classList.toggle("show");
            popup.textContent = toursSelected;
        }
        
        cart.addEventListener('click', showPopup);
        
        document.addEventListener('DOMContentLoaded', createToursList(tours));
