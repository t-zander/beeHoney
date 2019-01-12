// добавляет продукты в корзине в local storage
export const addProductsToLS = (product) => {
  // получить все из local storage
  // декодировать
  // добавить товар
  // перезаписать local storage
  let productsList = getProductsFromLS();

  if(!productsList) {
    productsList = [];
    setProduct();
  }else{
    setProduct();
  }

  function setProduct() {
    const newProductsList = [...productsList, product];
    localStorage.setItem('products', JSON.stringify(newProductsList));
  }
}

export const getProductsFromLS = () => {
  return JSON.parse(localStorage.getItem('products'));
}