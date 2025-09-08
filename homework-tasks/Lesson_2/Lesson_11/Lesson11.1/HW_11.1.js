var cartsDiv = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(function (res) { return res.json(); })
    .then(function (cartsObject) {
    var carts = cartsObject.carts;
    console.log(carts);
    for (var _i = 0, carts_1 = carts; _i < carts_1.length; _i++) {
        var cart = carts_1[_i];
        var div = document.createElement('div');
        div.classList.add('cart-container');
        var infoDiv = document.createElement('div');
        infoDiv.innerText = "\n          \"userId\" : ".concat(cart.userId, "\n          \"totalProducts\" : ").concat(cart.totalProducts, "\n          \"totalQuantity\" : ").concat(cart.totalQuantity, "\n          \"total\" :  ").concat(cart.total, "\n          \"discountedTotal\" : ").concat(cart.discountedTotal, "\n       ");
        var ol = document.createElement('ol');
        for (var _a = 0, _b = cart.products; _a < _b.length; _a++) {
            var product = _b[_a];
            var li = document.createElement('li');
            var info = document.createElement('p');
            info.innerText = "\n            \"id\" : ".concat(product.id, "\n            \"title\" : ").concat(product.title, "\n            \"price\" : ").concat(product.price, "\n            \"quantity\" : ").concat(product.quantity, "\n            \"discountPercentage\" : ").concat(product.discountPercentage, "\n            \"total\" : ").concat(product.total, "\n            \"discountedTotal\" : ").concat(product.idiscountedTotald, "\n        ");
            var img = document.createElement('img');
            img.src = product.thumbnail;
            li.append(info, img);
            ol.appendChild(li);
        }
        div.append(infoDiv, ol);
        cartsDiv.appendChild(div);
    }
});
