/*
  You must use the map function when you want to create a new array with same
  quantity of objects
*/
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
  const {name , price } = product
  
  return price >= 30
   ? {
     name: name,
     price: price / 2
   }
   : product
})

console.log('saleProducts: ', saleProducts)