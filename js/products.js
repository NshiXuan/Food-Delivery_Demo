//菜单
const filters = [...document.querySelectorAll('.filters div')]
filters[0].className = 'active'

// filters.forEach((item, index) => {
//   item.onclick = () => {
//     filters.forEach((item) => {
//       item.className = ''
//     })
//     filters[index].className = 'active'
//   }
// })

filters.forEach((item) => {
  item.addEventListener('click', function () {
    filters.forEach((item) => {
      item.className = ''
    })
    this.className = 'active'
  })
})

// const getProducts = async () => {
//   try {
//     const results = await fetch("./data/products.json");
//     const data = await results.json();
//     const products = data.products;
//     return products;
//   } catch (err) {
//     console.log(err);
//   }
// };
