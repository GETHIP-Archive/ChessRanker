export const Players = new Mongo.Collection('player');

Players.schema = new SimpleSchema({
    name: {
        type: String
    },
    elo: {
        type: Number,
        defaultValue: 300
    },
    kFactor: { //use k-factors of 10, 15, 30
        type: Number,
        defaultValue: 30
    },
    history: { //String of game Id's the player has participated in
        type: [String],
        defaultValue: []
    }
});
