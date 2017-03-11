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

FlowRouter.route('/create/tournament/', {
    action: function(params, queryParams) {
        BlazeLayout.render("createTournament");
    }
});

FlowRouter.route('/tournament/edit/:tournamentId', {
    action: function(params, queryParams) {
        BlazeLayout.render("editTournament", {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/player/:playerName', { // playerName is player id
    action: function(params, queryParams) {
        BlazeLayout.render('playerPage', { playerName: params.playerName});
    }
});

FlowRouter.route('/creatematch/:tournamentId', {
    action: function(params, queryParams) {
        BlazeLayout.render("createMatch", {tournamentId: params.tournamentId});
    }
});
