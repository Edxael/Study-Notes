console.log("Hello from JS")

const add = (key, value = {}) => localStorage.setItem(key, JSON.stringify(value))
const get = key => JSON.parse(localStorage.getItem(key))
const remove = key => localStorage.removeItem(key)
const clear = key => localStorage.clear()




add('myCart', [])
let items = get('myCart') // Form Local-Storage to Variable
console.log("Items: ", items)



function add_H() {
  // console.log("Adding Hamburger")
  let items = get('myCart')
  items.push({ price: 15.99, name: "Hamburger" })
  add('myCart', items)
  // console.log("The car: ", items)
}



function add_P() {
  // console.log("Adding Pizza")
  let items = get('myCart')
  items.push({ price: 12.99, name: "Pizza"  })
  add('myCart', items)
  // console.log("The car: ", items)
}




function calculateTab() {
  // console.log(" ")
  // console.log(" ")
  // console.log(" ==================================")
  // console.log("About to calculate total")

  let checkOut = get('myCart')
  // console.log("All the items: ", checkOut)

  let totItems = checkOut.length;
  let totalPrice = checkOut.reduce((pv, cv) => {
    return pv + cv.price
  }, 0)

  // console.log("Total # items: ", totItems)
  // console.log("Total Price: ", totalPrice)

  // let renderItems = 
  document.getElementById('itemsNum').innerHTML = totItems
  document.getElementById('itemsPrice').innerHTML = totalPrice

}