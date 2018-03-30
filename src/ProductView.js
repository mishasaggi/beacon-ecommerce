var m = require("mithril")
var Product = require("./ProductModel")

//Should list all products with a link to detailed view
module.exports = {
    oninit: Product.loadList,
    view: function() {
        return m(".product-list .wrapper", Product.list.map(function(product) {
            return m("a.product-list-item.panel", 
              { href: "/details/" + product.id, 
                oncreate: m.route.link,
                'style': { 'background-image' : 'url(\"src/assets/images/1001.jpg\")',
                            'background-position': 'center center'}
              }, 
              //product.name + " " + product.cost)
              m("p.opp", product.name + " | " + product.cost +" | "+ "Rating  " + product.rating + " | " + product.short)
              // m("h2.opp", "short description here!")
            )
        }))
    }
}

//m("img", { src: "img.jpg", width: '100', height: '200' })
//style: {'background-img': 'url(\"assets\\\\1001.png\")'}