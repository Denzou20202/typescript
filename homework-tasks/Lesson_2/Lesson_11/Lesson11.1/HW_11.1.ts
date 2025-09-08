const cartsDiv  = document.getElementById('carts') as HTMLDivElement

fetch('https://dummyjson.com/carts')
  .then(res => res.json())
  .then(cartsObject => {
    const {carts} = cartsObject
    console.log(carts)

    for (const cart of carts) {
      const div: HTMLDivElement = document.createElement('div')
      div.classList.add('cart-container')
      const infoDiv: HTMLDivElement = document.createElement('div')
       infoDiv.innerText = `
          "userId" : ${cart.userId}
          "totalProducts" : ${cart.totalProducts}
          "totalQuantity" : ${cart.totalQuantity}
          "total" :  ${cart.total}
          "discountedTotal" : ${cart.discountedTotal}
       `

      const ol: HTMLOListElement = document.createElement('ol')
      for (const product of cart.products) {
        const li: HTMLLIElement = document.createElement('li')
        const info: HTMLParagraphElement = document.createElement('p')
        info.innerText = `
            "id" : ${product.id}
            "title" : ${product.title}
            "price" : ${product.price}
            "quantity" : ${product.quantity}
            "discountPercentage" : ${product.discountPercentage}
            "total" : ${product.total}
            "discountedTotal" : ${product.idiscountedTotald}
        `
        const img: HTMLImageElement = document.createElement('img')
        img.src = product.thumbnail

        li.append(info, img)
        ol.appendChild(li)
      }

      div.append(infoDiv, ol)
      cartsDiv.appendChild(div)
    }
  });


