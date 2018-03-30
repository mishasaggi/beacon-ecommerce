var m = require("mithril")

// list, reviews and current will be empty properties of 'Product' when fetching from external DB (dynamic)
// and populated on init
var Product = {
    list: [{ id: 1001, 
              name: 'August Wifi Bridge', 
              cost: '$45.37', 
              rating: '4.5', 
              short: 'Control your door from anywhere',
              long: 'Control your door from anywhere. \n Connect your August Smart Lock to Wi-Fi. \n Always know that your door is locked. \n Lock or unlock your door, even if you are away from home. \n Voice Control – Connect your lock to Amazon Alexa, the Google Assistant or Siri. \n Get instant alerts when someone enters or exits your home.'
            },
              
            { id: 1002, 
              name:'LIFX(A9) Smart LED Light Bulb', 
              cost: '$59.99', 
              rating: '3', 
              short: 'Adjustable, Multicolor, Dimmable, No Hub Required, Works with Alexa, Apple HomeKit and the Google Assistant.',
              long: 'Works with Amazon Alexa to support dimming, shades of white, and color settings through voice control (Alexa device sold separately) \n 16 million colors and warm to cool whites \n Easy to set up, built in wifi - no hub required \n Bright - equivalent to 75W bulb. Beam Angle: 135 degrees \n Works with Alexa, Apple HomeKit and Google Assistant'
            },

            { id: 1003, 
              name: 'August Smart Keypad', 
              cost: '$56.99', 
              rating: '4', 
              short: 'Secure, code-based home entry',
              long: 'Secure, code-based home entry \n Accessory for the August Smart Lock \n Create unique codes instantly from your smartphone anytime. Mounts outside and works with any August Smart Lock \n Perfect for guests and your kids, no smartphone needed. Requires iOS (9.0 or higher) or Android (5.0 or higher) smartphones \n House cleaners, dog walkers, and other service providers can securely come and go using a temporary PIN. \n Locks door with the simple push of a button.'
            },

            { id: 2001, 
              name: 'August Smart Lock Pro + Connect, 3rd gen', 
              cost: '$249.00', 
              rating: '3.5', 
              short: 'Always know who is coming and going.',
              long: 'Works with Amazon Alexa for voice control (hub required and included, Alexa device sold separately) \n Control and monitor your door from anywhere. Lock and unlock your door, control keyless access and keep track of who comes and goes, all from your phone'
            },

            { id: 2002, 
              name: 'iSmart Alarm', 
              cost: '$159.00', 
              rating: '3.2', 
              short: 'Premium Home Security Package',
              long: 'Include 1 HD Wi-Fi video camera, 3 contact sensors, 1 motion sensor and 1 CubeOne \n Free Instant Notifications - Phone Call, Text Message, Push Notification, and Email \n Sound Recognition, Time Lapse, Night Vision, Motion and Sound Detection'
            },

            { id: 2003, 
              name: 'YEELITE Smart WiFi LED Light Strip', 
              cost: '$29.89', 
              rating: '5', 
              short: 'Multi Applications',
              long: 'Voice Control: work with Amazon Alexa, Google Assistant for voice control, and IFTTT \n Flexable Materal and Easy Installation: can be bent and attached to most surface with adhensive tape at back side \n Colorful light: 16 million colors, adjustable color temperature and dimmable light \n Multi Applications: set time schedules and countdowns, sync to music for enhanced experience'
            },

            { id: 3001, 
              name: 'Feed and Go PetSmart Feeder 2018', 
              cost: '$99.00', 
              rating: '3.2', 
              short: 'For Wet/Dry Food, Treats & Meds',
              long: 'The Only Smart Pet Feeder For Wet/Dry Food, Treats and Medication, Measures 18L x 16W x 3H (Inches). Note: We Don\'t Recommend Leaving Wet Food In For Longer Than 24 hrs \n Connects By Wi-Fi To Your Home Network In Under One Minute'
            },

            { id: 3002, 
              name: 'MicroBot Push 2nd gen', 
              cost: '$49.89', 
              rating: '3.2', 
              short: 'Wireless Robotic Button Pusher',
              long: 'Press buttons and switches remotely and manually \n Works with rocker switches, protruding push buttons, non-protruding push buttons, toggle switches, Tactile buttons, capacitive buttons (smartphones)'
            },

            { id: 3003, 
              name: 'August Smart Lock 2nd gen', 
              cost: '$126.00', rating: '3.2', 
              short: 'Dark Gray',
              long: 'Works with Amazon Alexa for voice control (hub required, Alexa device and hub sold separately). Does not support unlock by voice at this time.'
            },

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
           { id: 7003, name: 'feature your product here', cost: '', rating: 4.9, short: ''}
           ],
    loadList: function() {
        // NEXT: load from local storage or request to external database like DynamoDB
           return;
    },
    reviews: {'1001' : [{ rating: 5,
                                  review: "We bought these bridges to go with the August Smart Lock. The bridge allows Alexa to operate the lock. Note: Alexa will not unlock the door on command but she will lock it. Makes sense - you wouldn't want a thief tell her to unlock the door and have her do it... The bridge plugs into an outlet and has to be within 15 feet or so of the lock, the closer the better. This is the only inconvenience of the bridge. Depending on where you install the lock, you might be limited in options on where to plug the bridge in. The bridge was easy to install. The August software, on the smart phone, walks you through it. The bridge also has a reset button if installation doesn't work out well the first time. The bridge was a necessity and we would have preferred not have to use it, but the door locks would not otherwise work with Alexa."},
                                { rating: 4,
                                  review: "The first thing you need to understand is that this device connects to your lock over bluetooth, just like your phone does -- which is why it is required to be in close proximity to your lock."
                                }]
                            ,'1002' : [{ rating: 5,
                                          review: "This is a review after day 1. I would like to clarify one config issue that was not clear to me from the product description and LIFX website. You do not have to operate the bulb in the same network as your smart phone or tablet. I have an Internet of things (IoT) wifi that is separate from my normal WiFi. All you need to do is connect the bulb to the IoT WiFi and then temporarily switch your phone to the IoT WiFi and claim the bulb to your LIFX cloud account. Then you can switch back your phone to your normal network and still control the bulb from your phone. Technically it means you control the bulb remotely all the time instead of via the local WiFi. The result is the same: you have full control over your bulb from your phone. "},
                                        { rating: 1,
                                          review: "Tried 3. Could never set it up. The final stage the rotating set up circle kept eternally rotating and never finalized."
                                        }]
                            ,'1003' : [{ rating: 5,
                                          review: "I love the August product line. The keypad is a must have if you have the door lock. It is super easy to install and I have had no problem with the Bluetooth connection between the keypad and the lock. I have the lock set to autolock after 5 minutes and the keypad makes it easy to get back into my house after a quick run or when outside working in the garden. If you have the door lock you must have the keypad it will simplify your life."},
                                        { rating: 3,
                                          review: "I consider the keypad a necessity if you are going to buy the August Smart lock. The idea of having to always have a charged phone with me in order to unlock my door seems like an overall faulty idea."
                                        }]
                            ,'2001' : [{ rating: 5,
                                          review: "Hardware and WiFi/app installation was a breeze. It’s amazing that you can lock and unlock your door from anywhere, and you can see when doors are open and closed with the door detection sensor. Letting my flooring installation company in and out from 1500 miles away!"},
                                        { rating: 1,
                                          review: "DANGER!! I have had this lock for less than 2 months and calibrate it every few weeks just to make sure everything is aligned yet on multiple occasions people have complained that they were locked in the apartment. My wife, a renter and my house cleaner. I thought it may be the Schlage deadbolt pressing against the frame but that does not appear to be the issue. My house keeper could not get the deadbolt unlocked and was locked inside my condo. That is a scary incident and a huge liability. How can a lock not let you out."
                                        }]
                            ,'2002' : [{ rating: 4,
                                          review: "I've had the unit running for over a month with three door/window sensors. Easy setup, batteries are good. Android app works well enough and is simple. IFTTT also works great for automatically arming at a specific time or when your cell phone leaves the area. Only downside is the alarm isn't as loud as I'd prefer. As a note, I haven't connected/tried the motion sensor."},
                                        { rating: 4,
                                          review: "I installed the system today on 5 doors. This package includes a motion sensor but I have not installed it yet. I don't see anything garage door specific and not sure how to monitor that, maybe a motion sensor in the garage. We have the cube set to chime whenever a door is opened and will see how long it takes for that to drive us crazy vs getting to like it. The notifications seem fine and the phone call for an alarm works OK."
                                        }]
                            ,'2003' : [{ rating: 5,
                                          review: "I have been looking for a comparable product to Phillips Hue for a long time, i think i've found it. For half the cost. They're wifi enabled so no hub is needed and, YES it does work flawlessly with Amazon Echo. When setting up the lights choose Singapore, not mainland, then enable the yeelight skill, find your device and boom.. Alexa​ control."},
                                        { rating: 1,
                                          review: "I had to change this from 5 star to 1. It keep disconnecting and I have to reset every day or few days. I really want this to work but with so much bug, I will just stick with hue strip. This just doesn't worth the headache."
                                        }]
                            ,'3001' : [{ rating: 5,
                                          review: "I was looking for something simple, and thought the webcam was unnecessary (which, honestly, it is), but it's turned out to be a really fun feature. I put treats in the spaces between her meals, and then when I'm at work or just out and about, I can give her a treat and see her cute little face. I love it!"},
                                        { rating: 3,
                                          review: "I expected a lot more from this expensive product considering I had several other options. However, I think I like the benefits so I won't be returning it."
                                        }]
                            ,'3002' : [{ rating: 5,
                                          review: "Exactly as advertised, exactly what I wanted. Easy to use to push any kind of button, including remotely controlling door opener. Up in running in under a minute."},
                                        { rating: 1,
                                          review: "I wish I could give this product 0 stars. You need to be within 10-20 feet of the device in order to control it."
                                        }]
                            ,'3003' : [{ rating: 5,
                                          review: "Love this lock. Installed it on my new front door. Easy to install, program to phone, unobtrusive from exterior."},
                                        { rating: 2,
                                          review: "Not easy to install."
                                        }]
                            ,'4001' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'4002' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'4003' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'5001' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'5002' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'5003' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'6001' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'6002' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'6003' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'7001' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'7002' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
                            ,'7003' : [{ rating: 5,
                                          review: "Love it."},
                                        { rating: 2,
                                          review: "It's alright."
                                        }]
    },
    current: {},
    loadDetailed: function(currentId) {
        console.log('DETAILED: ', currentId);
        console.log('check other', Product.list);
        //here we filter out the unique product from the static data
        // NEXT: request external db by unique id
        Product.current = Product.list.filter(function(item) {
                      console.log('item ', item.id, currentId);
                        return item.id == currentId;
                    })[0];
        Product.current.reviews = Product.reviews[currentId];
        console.log('current is ', Product.current);
        return;
    }
}
            
module.exports = Product
