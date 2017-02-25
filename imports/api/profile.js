//API access to user profiles
import { Profiles } from '../../lib/profile.js';

if(Meteor.isServer) {
    Meteor.publish('profiles', function profilesPublication() {
        return Profiles.find();
    });
}

Meteor.methods({
    'profile.updateName'(newName) { //string newName
        if(Meteor.user()) {

            Profiles.update(Meteor.userId(), {$set: {name: newName}});

        } else {
            throw new Error(unauthorizedMessage);
        }
    },
    'profile.updatePicture'(newPicture) { //String of base64 picture
        if(Meteor.user()) {
            Profiles.update(Meteor.userId(), {$set: {picture: newPicture}});
        } else {
            throw new Error(unauthorizedMessage);
        }
    },
    'profile.updateDescription'(description) { //String description
        if(Meteor.user()) {
            Profiles.update(Meteor.userId(), {$set: {description: newDescription}});
        } else {
            throw new Error(unauthorizedMessage);
        }
    }
});
