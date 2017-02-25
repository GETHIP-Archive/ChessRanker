import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

console.log('im running');

Meteor.methods({
    'test.resetDatabase': () => {
        resetDatabase();
    }
});

describe('Tournament', function() {
    it('Create Tournament', function() {
        Meteor.methods({
            'tournament.createTournament': {
                name: 'Hypest game of all time'
            }
        });

        assert.equal('ben', 'ben');
    });
});

describe('Profile', function() {
    Meteor.methods({

    });
});