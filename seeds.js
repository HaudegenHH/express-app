const mongoose = require('mongoose')
const Product  = require('./models/product')

mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connection open')
  })
  .catch(err => {
    console.log('Error occurred')
    console.log(err)
  })

// const product = new Product({
//   name: 'Boscorp', 
//   price: 0.99, 
//   category: 'fruits'
// })

// product.save()
// .then(data => console.log(data))
// .catch(err => console.log(err))

const seedProducts = [
  {
    name: 'Milk',
    price: 1.29,
    category: 'dairy'
  },
  {
    name: 'Banana',
    price: 0.89,
    category: 'fruits'
  },
  {
    name: 'cucumber',
    price: 1.79,
    category: 'vegetables'
  },
  {
    name: 'Yogurt',
    price: 1.49,
    category: 'dairy'
  },
]

Product.insertMany(seedProducts)
.then(res => console.log(res))
.catch(err => console.log(err))