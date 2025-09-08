var container = document.getElementById('container');
fetch('https://dummyjson.com/recipes')
    .then(function (res) { return res.json(); })
    .then(function (recipesObject) {
    var recipes = recipesObject.recipes;
    console.log(recipes);
    for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
        var recipe = recipes_1[_i];
        var div = document.createElement('div');
        div.classList.add('cart-container');
        var titleDiv = document.createElement('div');
        titleDiv.classList.add('title-text');
        titleDiv.innerText = "\n          \"userId\" : ".concat(recipe.userId, "\n          \"name\" : ").concat(recipe.name, "\n         ");
        var img = document.createElement('img');
        img.src = recipe.image;
        img.setAttribute('style', 'width:250px; height:250px; border-radius: 50% ');
        var infoDiv = document.createElement('p');
        infoDiv.innerText = "\n            \"caloriesPerServing\" : ".concat(recipe.caloriesPerServing, "\n            \"cookTimeMinutes\" : ").concat(recipe.cookTimeMinutes, "\n            \"cuisine\" : \"").concat(recipe.cuisine, "\"\n            \"difficulty\" : \"").concat(recipe.difficulty, "\"\n        ");
        var ul = document.createElement('ul');
        ul.innerText = "Ingredients";
        for (var _a = 0, _b = recipe.ingredients; _a < _b.length; _a++) {
            var product = _b[_a];
            var li = document.createElement('li');
            li.innerText = "".concat(product);
            ul.appendChild(li);
        }
        var ol = document.createElement('ol');
        ol.innerText = "Instruction";
        for (var _c = 0, _d = recipe.instructions; _c < _d.length; _c++) {
            var item = _d[_c];
            var li = document.createElement('li');
            li.innerText = "".concat(item);
            ol.appendChild(li);
        }
        div.append(titleDiv, img, infoDiv, ol, ul);
        container.appendChild(div);
    }
});
