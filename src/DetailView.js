var m = require("mithril")
var Product = require("./ProductModel")

module.exports = {
    oninit: function(vnode) {Product.loadDetailed(vnode.attrs.id)},
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "Product Details"),
            m("button", "dummy Add to Cart")
        ])
    }
}
