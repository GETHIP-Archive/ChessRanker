export const Tournaments = new Mongo.Collection('tournaments');

Tournaments.schema = new SimpleSchema({
    name: {
        type: String
    },
    user: {
        type: Number
    },
    place: {
        type: String
    },
    players: {
        type: [String] //player name
    },
    completed: {
        type: Boolean
    },
    date: {
        type: Date
    }
});
