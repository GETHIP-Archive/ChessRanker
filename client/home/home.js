import { Meteor } from 'meteor/meteor';
import { Tempalate } from 'meteor/templating';
import { Tournaments } from '../../lib/tournament.js';
import { Index, MinimongoEngine } from 'meteor/easy:search';

TournamentsIndex = new EasySearch.Index({
	collection: Tournaments,
	fields: ['name'],
	engine: new MinimongoEngine({
		/*selector: (searchObject, options, aggregation) => {

			let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);

			if(selector.name === "") {
				searchObject.name = "dsfadfasdfadsfadsfasdfdsf";
			}

			return selector;
		}*/
	})
});

Template.home.onCreated(function() {
	Meteor.subscribe("tournaments");
});

Template.home.helpers({
	tournamentsIndex: () => {
		return TournamentsIndex;
	},
	inputAttributes: () => {
		return {
			placeholder: 'Search for a tournament',
			style: 'width: 500px; height: 30px; padding: 5px; display: block;'
		};
	}
});
