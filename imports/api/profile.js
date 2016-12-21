//API access to user profiles
import { Profiles } from '../../lib/profile.js';

if(Meteor.isServer) {
    Meteor.publish('profiles', function profilesPublication() {
        return Profiles.find();
    });
}

Meteor.methods({
    'profile.updateName'() {

    },
    'profile.updatePicture'() {

    },
    'profile.updateDescription'() {

    }
});
