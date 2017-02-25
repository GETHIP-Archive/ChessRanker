import { Template } from 'meteor/templating';
PlayerLists = new Mongo.Collection('playerLists')

Template.editTournament.helpers({
  playerLists: function() {
    return PlayerLists.find();
  }
});

  Template.editTournament.events({
    'submit .new-player': function(event) {
      var title = event.target.title.value;

      PlayerLists.insert({
         title: title,
         createdAt: new Date()
      });

      even.target.title.value = "";

      return false;
    }
  });
