import { Meteor } from 'meteor/meteor';

import '../imports/api/tournament.js';
import '../imports/api/profile.js';

import { Profiles } from '../lib/profile.js'; 

Meteor.startup(() => {
  // code to run on server at startup

  Profiles.insert({
      name: "Ben",
      username: "ben",
      description: 'hello world'
  });

});
