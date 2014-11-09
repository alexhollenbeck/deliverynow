// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Admin' }
  });
  var tom = Meteor.users.findOne(tomId);
  // var sachaId = Meteor.users.insert({
  //   profile: { name: 'Sacha Greif' }
  // });
  // var sacha = Meteor.users.findOne(sachaId);

  // var telescopeId = Posts.insert({
  //   title: 'Introducing Telescope',
  //   userId: sacha._id,
  //   author: sacha.profile.name,
  //   url: 'http://sachagreif.com/introducing-telescope/',
  //   submitted: new Date(now - 7 * 3600 * 1000),
  //   commentsCount: 2,
  //   upvoters: [], votes: 0
  // });

  // Comments.insert({
  //   postId: telescopeId,
  //   userId: tom._id,
  //   author: tom.profile.name,
  //   submitted: new Date(now - 5 * 3600 * 1000),
  //   body: 'Interesting project Sacha, can I get involved?'
  // });

  // Comments.insert({
  //   postId: telescopeId,
  //   userId: sacha._id,
  //   author: sacha.profile.name,
  //   submitted: new Date(now - 3 * 3600 * 1000),
  //   body: 'You sure can Tom!'
  // });

  Posts.insert({
    title: 'Joy Yee’s Noodle Kitchen',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.yelp.com/menu/joy-yees-noodle-kitchen-evanston',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Chipotle Mexican Grill',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.chipotle.com/en-us/menu/menu.aspx',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Lou Malnati’s Pizzeria',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.loumalnatis.com/our-menu',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Papa John’s Pizza',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.yelp.com/menu/papa-johns-pizza-evanston-2/pizzas',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Jimmy John’s',
    userId: tom._id,
    author: tom.profile.name,
    url: 'https://www.jimmyjohns.com/menu/#/',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Thai Sookdee',
    userId: tom._id,
    author: tom.profile.name,
    url: 'https://thaisookdee.carry-out.com/menu.asp',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Edzo’s Burger Shop',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.yelp.com/menu/edzos-burger-shop-evanston',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Potbelly Sandwich Shop',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.potbelly.com/Food/OurMenu.aspx?subPage=Sandwiches',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Mt. Everest Restaurant',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.yelp.com/menu/mt-everest-restaurant-evanston/main-menu',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  Posts.insert({
    title: 'Tomate Fresh Kitchen',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://www.yelp.com/menu/tomate-fresh-kitchen-evanston',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });


  // Posts.insert({
  //   title: 'The Meteor Book',
  //   userId: tom._id,
  //   author: tom.profile.name,
  //   url: 'http://themeteorbook.com',
  //   submitted: new Date(now - 12 * 3600 * 1000),
  //   commentsCount: 0,
  //   upvoters: [], votes: 0
  // });

  // for (var i = 0; i < 10; i++) {
  //   Posts.insert({
  //     title: 'Test post #' + i,
  //     author: sacha.profile.name,
  //     userId: sacha._id,
  //     url: 'http://google.com/?q=test-' + i,
  //     submitted: new Date(now - i * 3600 * 1000 + 1),
  //     commentsCount: 0,
  //     upvoters: [], votes: 0
  //   });
  // }
}
