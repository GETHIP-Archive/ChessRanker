import { Meteor } from 'meteor/meteor';
import { Tempalate } from 'meteor/templating';
import { Profiles } from '../../lib/profile.js';

ProfilesIndex = new EasySearch.Index({
    collection: Profiles,
    fields: ['name'],
    engine: new EasySearch.MongoDB()
});

Template.home.helpers({
    profilesIndex: () => ProfilesIndex,
    inputAttributes: () => {
        return {
            placeholder: 'Search for a game or player',
            style: 'width: 500px; height: 30px; padding: 5px; display: block;'
        };
    }
});
