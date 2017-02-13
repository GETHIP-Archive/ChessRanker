export const Profiles = new Mongo.Collection('profiles');

Profiles.schema = new SimpleSchema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    tournaments: {
        type: [String],
        optional: true
    },
    picture: {
        type: String,
        optional: true
    },
    description: {
        type: String
    },
    id: {
        type: String
    }
});
