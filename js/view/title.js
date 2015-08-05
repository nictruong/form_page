DisplayedTitleItemView = Backbone.Marionette.ItemView.extend({
	template: "#title_template",

	onShow: function() {
	    $('.colorPicker').ColorPickerSliders({
	    	size: 'sm',
		    placement: 'right',
		    swatches: false,
		    sliders: false,
		    hsvpanel: true,
	    });
	}
});