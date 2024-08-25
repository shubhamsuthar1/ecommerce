const productTamplate = document.querySelector('#product-tamplate');
// const productContainer = document.querySelector('#product-container');
export const showProductContainer = (product) => {
    if (!product) {
    console.log(product);
}
    // if (!product) {
    //     return false;
    // }

    // product.forEach((curPro) => {
    //     const { id, name, image, price } = curPro;

    //     const productClone = document.importNode(productTamplate.content, true);

    //     productClone.querySelector(".product-name").textContent = name;
    //     productClone.querySelector("#product-img").src = image;
    //     productClone.querySelector("#product-img").alt = name;
    //     productClone.querySelector(".price").textContent = price;
    //     productClone.querySelector(".selling").textContent = name;
        

    //     productContainer.append(productClone);
    // });
};