import { Meteor } from 'meteor/meteor';
import { Tempalate } from 'meteor/templating';
import { Profiles } from '../../lib/profile.js';
import { Index, MinimongoEngine } from 'meteor/easy:search';

ProfilesIndex = new EasySearch.Index({
    collection: Profiles,
    fields: ['name'],
    engine: new MinimongoEngine({
        /*selector: (searchObject, options, aggregation) => {

            let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

            if(selector.name === "") {
                searchObject.name = "dsfadfasdfadsfadsfasdfdsf";
            }

            return selector;
        }*/
    })
});

Template.home.onCreated(function() {
    Meteor.subscribe("profiles");
});

Template.home.helpers({
    profilesIndex: () => {
        return ProfilesIndex;
    },
    inputAttributes: () => {
        return {
            placeholder: 'Search for a user',
            style: 'width: 500px; height: 30px; padding: 5px; display: block;'
        };
    }
});
