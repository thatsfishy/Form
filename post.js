// we need the webhook 
// we also need to make a function sendData
var webhook = 'YOUR WEBHOOK HERE'
console.log("JS loaded Successfully.");
// random color for embed 
var random = Math.floor(Math.random() * 1000) * 10200
console.log("Random number = " + random)
// get the questions and email id 
var questions = document.getElementById("Questions").value;
       var email = document.getElementById("Email").value;
                function sendMessage() {
                  
                  {
                    //fetch the webhook
                    fetch(webhook,
                      {
                        method: 'post',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                          // the username to be displayed
                          username: 'Someone has summbited a question or email.',
                          // the avatar to be displayed
                          avatar_url: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
                          // contents of the message to be sent
                          content:
                            "Below are information!",
                          // enable mentioning of individual users or roles, but not @everyone/@here
                          allowed_mentions: {
                            parse: ['users', 'roles'],
                          },
                          // embeds to be sent
                          embeds: [
                            {
                              // decimal number colour of the side of the embed
                              color: random,
                              // author
                              // - icon next to text at top (text is a link)
                              author: {
                                name: 'Github ',
                              },
                              // embed title
                              // - link on 2nd row
                              title: 'New form submission!',
                              url: 'https://github.com/thatsfishy/Form',
                              // thumbnail
                             
                              // embed description
                              // - text on 3rd row
                              description: 'new submisson!',
                              // custom embed fields: bold title/name, normal https://cdn-icons-png.flaticon.com/512/25/25231.png below title
                              // - located below description, above image.
                              fields: [
                                {
                                  name: 'Email : ',
                                  value: `${Email.value}`,
                                },
                                {
                                  name: 'Questions : ',
                                  value: `${Questions.value}`,
                                },
                              ],
                              image: {
                                url:
                                  'https://cdn-icons-png.flaticon.com/512/25/25231.png',
                              },
                            },
                          ],
                        }),
                      }
                    );    
                  } 
                }
