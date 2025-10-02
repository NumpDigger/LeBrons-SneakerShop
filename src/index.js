const products = [
    {
        id: 1,
        title: "Nike Blazzer Mid Suede",
        price: 79.99,
        imgUrl: "../assets/product/sneaker-1.jpg"
    },
    {
        id: 2,
        title: "Nike Air Max 207",
        price: 59.99,
        imgUrl: "../assets/products/sneaker-2.jpg"
    },
    {
        id: 3,
        title: "Nike Blazer Mid Suede",
        price: 39.99,
        imgUrl: "../assets/products/sneaker-3.jpg"      
    },
]

// products.forEach((item) => {
//     console.log(item.id)
// })

const card = document.querySelector('.cards')

products.forEach((item) => {
    cards.insertAdjacentHTML('beforeend', `
         Название: ${item.title}
        
        `)
})