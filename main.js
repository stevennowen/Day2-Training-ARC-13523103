document.getElementById('load-btn').addEventListener('click', function() {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        
        const products = data.products.slice(0, 10);
        const container = document.getElementById('product-container');
        container.innerHTML = ''; 
  
        products.forEach(product => {

          const productDiv = document.createElement('div');
          productDiv.className = 'product';
          productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" alt="${product.title}">
            <p>${product.description}</p>
            <p><strong>Harga:</strong> $${product.price}</p>
            <p><strong>Rating:</strong> ${product.rating}</p>
          `;
          container.appendChild(productDiv);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  