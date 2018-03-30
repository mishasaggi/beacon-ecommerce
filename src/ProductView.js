var m = require("mithril")
var Product = require("./ProductModel")

//Should list all products with a link to detailed view
module.exports = {
    oninit: Product.loadList,
    view: function() {
        return m(".product-list .wrapper", Product.list.map(function(product) {
            return m("a.product-list-item.panel", {href: "/details/" + product.id, oncreate: m.route.link}, product.name + " " + product.cost)
        }))
    }
}