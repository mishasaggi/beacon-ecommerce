var m = require("mithril")
var Product = require("./ProductModel")

module.exports = {
    oninit: function(vnode) {Product.loadDetailed(vnode.attrs.id)},
    view: function() {

      return [ m(".detail-wrapper", [
          m(".pictures",
              {
                'style': { 'background-image' : 'url(\"src/assets/images/1001.jpg\")',
                            'background-position': 'center center',
                            height: '400px',
                            width: '400px'}
              }, ''),
          m(".details", [
            m("h1", {class: "title"}, Product.current.name),
            m("h2", {class: "cost"}, Product.current.cost),
            m("h3", {class: "rating"}, Product.current.rating +" stars"),
            m("h3", {class: "long"}, Product.current.long),
            m("a.button", {href: "", onclick: function(e) {e.preventDefault();}}, "Add to Cart")
          ])
        ]),
        m(".review-wrapper", Product.current.reviews.map(function(item) {

          return [ m("h4", {class: "rating"}, item.rating + " stars"),
                  m("p", {class: "review-text"}, item.review)
                ]
          }))
      ]
    }
}
