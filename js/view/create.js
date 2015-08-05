CreateItemView = Backbone.Marionette.ItemView.extend({
	template: "#create_template",

	events: {
		"click #create_button": "create"
	},

	initialize: function(options) {
		this.page = options.page;
	},

	create: function() {
		var counters = $('.counter');
		var counterArray = [];

		counters.each(function(i, obj) {
			var counter = {
				name: $(this).attr('name'),
				id: $(this).attr('id'),
				displayedName: $(this).val()
			};
			console.log(obj);
			counterArray.push(counter);
		});

		this.page.set({"displayedName": {"name": $('.title').val(), "color": $('.colorPicker').val()}});

		this.page.set({"counting_site": counterArray});
	
		this.page.url = 'test.php';

		console.log(this.page.toJSON());

		this.page.save();
	}
});


