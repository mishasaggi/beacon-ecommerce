var m = require("mithril")

var Product = {
    list: [],
    loadList: function() {
        // load from local storage or request to external database goes here
        // temp static test data
        Product.list = [{ id: 1001, name: 'a1', cost: '$9.99'},
           { id: 1002, name: 'b1', cost: '$10.89'},
           { id: 1003, name: 'c1', cost: '$11.89'},
           { id: 1004, name: 'd1', cost: '$12.89'},
           { id: 2001, name: 'a2', cost: '$13.89'},
           { id: 2002, name: 'b2', cost: '$14.89'},
           { id: 2003, name: 'c2', cost: '$15.89'},
           { id: 2004, name: 'd2', cost: '$16.89'},
           { id: 3001, name: 'a3', cost: '$17.89'},
           { id: 3002, name: 'b3', cost: '$18.89'},
           { id: 3003, name: 'c3', cost: '$18.99'},
           { id: 3004, name: 'd3', cost: '$20.89'},
           { id: 4001, name: 'a4', cost: '$22.89'},
           { id: 4002, name: 'b4', cost: '$24.89'},
           { id: 4003, name: 'c4', cost: '$36.89'},
           { id: 4004, name: 'd4', cost: '$39.89'},
           { id: 5001, name: 'a5', cost: '$45.89'},
           { id: 5002, name: 'b5', cost: '$45.99'},
           { id: 5003, name: 'c5', cost: '$100.89'},
           { id: 5004, name: 'd5', cost: '$110.89'}];
           return;
    },
    current: {},
    loadDetailed: function(id) {
        console.log('id passed in, detailed: ', id);
        // request by unique serial number
        // test case
        Product.current = {
            id: 1002, 
            name: 'a1',
            cost: '$32.89',
            rating: '4.5',
            snippet: 'useful and cool looking',
            description: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        };
        return;
    }
}

module.exports = Product
