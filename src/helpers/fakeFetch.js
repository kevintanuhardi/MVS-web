import productList from './assets/products'
import newsList from './assets/news'

const products = (categoriesId, pages) =>  new Promise( async (resolve) => {
  let selectedProduct = productList;
  if(categoriesId){
    selectedProduct = selectedProduct.filter(el => el.category === categoriesId)
  }
  setTimeout(() => resolve(selectedProduct), '0')
})

const productDetail = (productId) => new Promise((resolve, reject) => {
  const product = productList.filter(el => el._id == productId)[0]
  setTimeout(() => resolve(product), '500')
})

const news = (categories, pages, limit) => new Promise( async (resolve) =>{
  let selectedNews = newsList;
  const totalNews = newsList.length;

  const startIndex = limit * (pages - 1);
  const endIndex = startIndex + limit;

  selectedNews = selectedNews.slice(startIndex, endIndex);

  setTimeout(() => resolve({selectedNews, totalNews}), '0')
})

const newsDetail = (newsId) => new Promise((resolve, reject) => {
  const news = newsList.filter(el => el._id == newsId)[0]
  setTimeout(() => resolve(news), '500')
})

export default {
  products,
  productDetail,
  news,
  newsDetail,
}