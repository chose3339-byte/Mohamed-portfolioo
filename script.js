fetch('store.json')
.then(response => response.json())
.then(products => {
    const container = document.getElementById('products');
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <p><strong>${p.price}</strong></p>
        `;
        container.appendChild(card);
    });
});
