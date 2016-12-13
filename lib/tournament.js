export const Tournament = new Mongo.Collection('tournaments');

Tournament.schema = new SimpleSchema({
    name: {
        type: String
    },
    user: {
        type: String
    },
    players: {
        type: [PlayerSchema]
    }
});

var PlayerSchema = new SimpleSchema({
    name: {
        type: String
    },
    elo: {
        type: Number
    }
});
