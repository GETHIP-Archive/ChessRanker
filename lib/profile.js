export const Profiles = new Mongo.Collection('profiles');

Profiles.schema = new SimpleSchema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    tournaments: {
        type: [String]
    },
    picture: {
        type: String
    },
    description: {
        type: String
    },
    id: {
        type: String
    }
});
