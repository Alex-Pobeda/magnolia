const tours = [
        {
            "img": "https://scdn3.thomascook.com/crop?imageUrl=http://magnolia.production.thomascook.io/wcms/dam/tcuk/new/campaigns/peaks/merchblocks/getawaymerchv7.jpg&maxWidth=300&maxHeight=0",
            "title": "Tenerife",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        },
        {
            "img": "https://scdn3.thomascook.com/crop?imageUrl=http://magnolia.production.thomascook.io/wcms/dam/tcuk/new/campaigns/peaks/merchblocks/from0deposit.jpg&maxWidth=300&maxHeight=0",
            "title": "Mallorca",
            "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        },
        {
            "img": "https://scdn3.thomascook.com/crop?imageUrl=http://magnolia.production.thomascook.io/wcms/dam/tcuk/new/campaigns/peaks/merchblocks/designedforyoumerchv4.jpg&maxWidth=300&maxHeight=0",
            "title": "Ibiza",
            "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        },
        {
            "img": "https://scdn3.thomascook.com/crop?imageUrl=http://magnolia.production.thomascook.io/wcms/dam/tcuk/new/campaigns/peaks/merchblocks/getawaymerchv7.jpg&maxWidth=300&maxHeight=0",
            "title": "Costa Brava",
            "description": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
        }
    ];
        
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
