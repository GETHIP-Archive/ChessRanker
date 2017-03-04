FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/home', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/user/:username', {
    action: function(params, queryParams) {
        BlazeLayout.render('user', {username: params.username});
    }
});

FlowRouter.route('/tournament/:tournamentId', {
    action: function(params, queryParams) {
        BlazeLayout.render('tournament', {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/tournament/edit/', {
    action: function(params, queryParams) {
        BlazeLayout.render("editTournament", {tournamentId: "create"});
    }
});

FlowRouter.route('/tournament/edit/:tournamentId', {
    action: function(params, queryParams) {
        BlazeLayout.render("editTournament", {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/tournament/:tournamentId/:playerName', { // playerName is player id
    action: function(params, queryParams) {
        BlazeLayout.render('player', {tournamentId: params.tournamentId, playerName: params.playerName});
    }
});

FlowRouter.route('/player/:playerName', { // playerName is player id
    action: function(params, queryParams) {
        BlazeLayout.render('playerPage', { playerName: params.playerName});
    }
});

FlowRouter.route('/tournament/:tournamentId/creatematch', {
    action: function(params, queryParams) {
        BlazeLayout.render("math", {tournamentId: params.tournamentId});
    }
});
