var m = require("mithril");

var ProductList = require("./ProductView");
var ProductDetails = require("./DetailView");

m.route(document.body, "/list", {
    "/list": ProductList,
    "/details/:id": ProductDetails,
})
