export const Players = new Mongo.Collection('player');

Players.schema = new SimpleSchema({
    name: {
        type: String
    },
    elo: {
        type: Number,
        defaultValue: 300
    }
});
