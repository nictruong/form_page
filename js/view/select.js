DomainCounterSelectItemView = Backbone.Marionette.ItemView.extend({
	template: "#select_template",

	tagName: "option",

	initialize: function() {
		this.id = this.model.get('id');
	},

	onRender: function() {
		this.$el.attr('value', this.id);
	}
});

DomainCounterSelectCollectionView = Backbone.Marionette.CollectionView.extend({
	childView: DomainCounterSelectItemView,

	tagName: "select",

	attributes: {
		multiple: "multiple"
	},

	className: "form-control selectCounters"
});