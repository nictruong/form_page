var BoxAItemView = Backbone.Marionette.ItemView.extend({
	template: "#boxAItem_template",

	onRender: function() {
		this.$el = this.$el.children();
		this.$el.unwrap();
		this.setElement(this.$el);
	}
});

var BoxACollectionView = Backbone.Marionette.CollectionView.extend({
	childView: BoxAItemView,

	className: "boxA well",

	onShow: function() {
		$('.boxA').sortable({
			connectWith: ".boxB"
		})

		$('.boxB').sortable({
			connectWith: ".boxA"
		})
	}
});