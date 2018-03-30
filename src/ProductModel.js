var m = require("mithril")

var Product = {
    list: [],
    loadList: function() {
        // load from local storage or request to external database goes here
        // temp static test data
        Product.list = [{ id: 1001, name: 'a1', cost: '$9.99', rating: '4.2', short: 'this is a short description'},
           { id: 1002, name: 'b1', cost: '$10.89', rating: '4.2', short: 'this is a short description, a max of this length to fit well.'},
           { id: 1003, name: 'c1', cost: '$11.89', rating: '4.4', short: 'this is a short description'},
           { id: 2001, name: 'a2', cost: '$12.89', rating: '4.5', short: 'this is a short description'},
           { id: 2002, name: 'b2', cost: '$13.89', rating: '5', short: 'this is a short description'},
           { id: 2003, name: 'c2', cost: '$14.89', rating: '3.2', short: 'this is a short description'},
           { id: 3001, name: 'a3', cost: '$15.89', rating: '3.2', short: 'this is a short description'},
           { id: 3002, name: 'b3', cost: '$16.89', rating: '3.2', short: 'this is a short description'},
           { id: 3003, name: 'c3', cost: '$17.89', rating: '3.2', short: 'this is a short description'},
           { id: 4001, name: 'a4', cost: '$18.89', rating: '3.2', short: 'this is a short description'},
           { id: 4002, name: 'b4', cost: '$18.99', rating: '3.2', short: 'this is a short description'},
           { id: 4003, name: 'c4', cost: '$20.89', rating: '3.2', short: 'this is a short description'},
           { id: 5001, name: 'a5', cost: '$22.89', rating: '3.2', short: 'this is a short description'},
           { id: 5002, name: 'b5', cost: '$24.89', rating: '3.2', short: 'this is a short description'},
           { id: 5003, name: 'c5', cost: '$36.89', rating: '3.2', short: 'this is a short description'},
           { id: 6001, name: 'a6', cost: '$39.89', rating: '3.2', short: 'this is a short description'},
           { id: 6002, name: 'b6', cost: '$45.89', rating: '3.2', short: 'this is a short description'},
           { id: 6003, name: 'c6', cost: '$45.99', rating: '3.2', short: 'this is a short description'},
           { id: 7001, name: 'a7', cost: '$100.89', rating: '3.2', short: 'this is a short description'},
           { id: 7002, name: 'b7', cost: '$110.89', rating: '3.2', short: 'this is a short description'},
           { id: 7003, name: 'feature your product here'}
           ];
           return;
    },
    current: {},
    loadDetailed: function(id) {
        console.log('id passed in, detailed: ', id);
        // request by unique id
        // test case
        Product.current = {
            id: 1002, 
            name: 'a1',
            cost: '$32.89',
            rating: '4.5',
            short: 'useful and cool looking',
            long: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
            reviews: [{ rating: 5,
                        review: "We bought these bridges to go with the August Smart Lock. The bridge allows Alexa to operate the lock. Note: Alexa will not unlock the door on command but she will lock it. Makes sense - you wouldn't want a thief tell her to unlock the door and have her do it... The bridge plugs into an outlet and has to be within 15 feet or so of the lock, the closer the better. This is the only inconvenience of the bridge. Depending on where you install the lock, you might be limited in options on where to plug the bridge in. The bridge was easy to install. The August software, on the smart phone, walks you through it. The bridge also has a reset button if installation doesn't work out well the first time. The bridge was a necessity and we would have preferred not have to use it, but the door locks would not otherwise work with Alexa."
                      },
                      { rating: 4,
                        review: "The first thing you need to understand is that this device connects to your lock over bluetooth, just like your phone does -- which is why it is required to be in close proximity to your lock."
                      }]
        };
        return;
    }
}

module.exports = Product
