import { Meteor } from 'meteor/meteor';
import { Tempalate } from 'meteor/templating';

let Players = new Meteor.Collection('players');

PlayersIndex = new EasySearch.Index({
    collection: Players,
    fields: ['_id'],
    engine: new EasySearch.MongoDB()
});

Template.home.helpers({
    playersIndex: () => PlayersIndex,
    inputAttributes: () => {
        return {
            placeholder: 'Search for a game or player',
            style: 'width: 500px; height: 30px; padding: 5px; display: block;'
        };
    }
});
