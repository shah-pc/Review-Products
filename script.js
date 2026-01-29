// 1. Data Source
const products = [
    {
        name: "Minimalist Watch",
        description: "Crafted with premium Italian leather and a sapphire crystal face, this watch is the pinnacle of minimalist design.",
        link: "https://example.com/watch",
        photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800"
    },
    {
        name: "Wireless Headphones",
        description: "Experience studio-quality sound with 40 hours of battery life and active noise cancellation.",
        link: "https://example.com/audio",
        photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800"
    },
    {
        name: "Leather Backpack",
        description: "A durable, water-resistant companion for your daily commute or weekend getaways.",
        link: "https://example.com/bag",
        photo: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800"
    },
    {
        name: "Smart Speaker",
        description: "Room-filling sound with integrated voice assistant and smart home controls.",
        link: "https://example.com/speaker",
        photo: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800"
    }
];

// 2. DOM Elements
const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('product-search');
const modal = document.getElementById('product-modal');
const closeBtn = document.querySelector('.close-button');

// 3. Render Function
function displayProducts(productsToRender) {
    grid.innerHTML = ""; // Clear existing

    if (productsToRender.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: #888;">No products found matches your search.</div>`;
        return;
    }

    productsToRender.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.photo}" alt="${product.name}">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 70)}...</p>
            </div>
        `;
        card.onclick = () => openModal(product);
        grid.appendChild(card);
    });
}

// 4. Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
    );
    displayProducts(filtered);
});

// 5. Modal Controls
function openModal(product) {
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById('modal-desc').innerText = product.description;
    document.getElementById('modal-img').src = product.photo;
    document.getElementById('modal-link').href = product.link;
    modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// 6. Initial Load
displayProducts(products);