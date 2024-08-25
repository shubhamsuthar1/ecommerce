const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

    // Select the container with the ID 'items'
    let productsContainer = document.getElementById('items');
    
    // Select all the product items within the container
    let products = productsContainer.getElementsByClassName('product-item');

    // Loop through all product items and hide those that don't match the search query
    for (let i = 0; i < products.length; i++) {
        let h6 = products[i].getElementsByTagName('h6')[0];

        if (h6) {
            let textvalue = h6.textContent || h6.innerHTML;

            if (textvalue.toUpperCase().indexOf(filter) >= 0) {
                products[i].style.display = "";
            } else {
                products[i].style.display = "none";
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
  
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none'; 
    }
});
