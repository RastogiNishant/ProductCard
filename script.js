document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const packSelector = card.querySelector('.pack-selector');
        const packDialog = card.querySelector('.pack-dialog');
        const packOptions = card.querySelectorAll('.pack-option');
        const packLabel = card.querySelector('.pack-label');
        const price = card.querySelector('.price');
        const pricePerPiece = card.querySelector('.price-per-piece');
        const addToCartBtn = card.querySelector('.add-to-cart');

        // Pack selector functionality
        packSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            packSelector.classList.toggle('active');
            packDialog.classList.toggle('active');
        });

        // Pack options selection
        packOptions.forEach(option => {
            option.addEventListener('click', () => {
                const packSize = option.getAttribute('data-size');
                const packPrice = option.getAttribute('data-price');
                const perPiece = option.getAttribute('data-per-piece');

                packOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');

                packLabel.textContent = `${packSize}-pack`;
                price.textContent = `€${packPrice}`;
                pricePerPiece.textContent = `€${perPiece}/piece`;

                packSelector.classList.remove('active');
                packDialog.classList.remove('active');
            });
        });

        // Add to Cart functionality
        addToCartBtn.addEventListener('click', () => {
            addToCartBtn.classList.add('added');
            addToCartBtn.textContent = 'Added to Cart';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                addToCartBtn.classList.remove('added');
                addToCartBtn.textContent = 'Add to Cart';
            }, 2000);
        });

        // Close dialog when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.product-card')) {
                packSelector.classList.remove('active');
                packDialog.classList.remove('active');
            }
        });
    });
});