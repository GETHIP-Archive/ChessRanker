# Documentation
## API

- All API's will be accessible by importing /imports/api/`<api>`.js
- API methods are called by running `Meteor.call('<methodName>', parameters`
- The API's for ChessRankr generally only exist for database writing actions. It's insecure to write directly to the database from the client.

### Tournament

- createTournament()
- addPlayers()
- removePlayers()
- updatePlayer()
- updateScore()
- finishGame()

### Profile
- updateName()
- updatePicture()
- updateDescription()
