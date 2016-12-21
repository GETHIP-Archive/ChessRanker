import { Meteor } from 'meteor/meteor';

import { Tournament } from '../../lib/tournament.js';
import { Profile } from '../../lib/profile.js';

Meteor.methods({
    'tournament.createTournament'(name, players, callback) {

        let formattedPlayers = [];

        if(typeof name !== 'string' || players.isArray() || typeof callback !== 'function') {
            callback({
                status: 'error'
            });
        }

        function checkIfExists(playerName) {
            for(let x in players) {
                if(players[x].name === playerName) {
                    return false;
                }
            }
        }

        for(let i in players) {
            if(typeof players[i].name === 'string' && checkIfExists(players[i].name)) {
                if(players[i].elo) {

                    formattedPlayers.push({
                        name: players[i].name,
                        elo: players[i].elo
                    });

                    callback({
                        status: 'success'
                    });

                } else {

                    formattedPlayers.push({
                        name: players[i].name
                    });

                    callback({
                        status: 'success'
                    });

                }
            } else {
                callback({
                    status: 'error'
                });
            }
        }
    },
    'tournament.addPlayers'() {

    },
    'tournament.removePlayer'() {

    },
    'tournament.updatePlayer'() {

    },
    'tournament.updateScore'() {

    },
    'tournament.finishGame'() {

    }
});
