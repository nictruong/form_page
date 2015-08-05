SubmitItemView = Backbone.Marionette.ItemView.extend({
	template: "#submit_template",

	events: {
		"click #submit_button" : "submit"
	},

	initialize: function(options) {
		this.counters = options.counters;
	},

	submit: function() {
		var self = this;

		var selectedCounters = $('.selectCounters').val();

		var counterList = new CounterList();

		selectedCounters.forEach(function(obj) {
			counterList.push(self.counters.get(obj));
		});

		MyApp.trigger('includeCounters', counterList);
	}
});