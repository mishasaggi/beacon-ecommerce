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
                'style': { 'background-image' : 'url(\"src/assets/images/' + product.id +'.jpg\")',
                            'background-position': 'center center',
                            'background-size': 'cover'
                          }
              }, 
              m("p.prod-details", [
                m("span.prod-name", product.name),
                m("span.prod-cost", product.cost),
                m("br"),
                m("span.prod-rating", "  Rating  " + product.rating + " stars"),
                m("br"),
                m("span.prod-short", product.short)
              ])
                 //product.name + " | " + product.cost +" | "+ "Rating  " + product.rating + " | " + product.short
            )
        }))
    }
}
