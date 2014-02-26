var StudyView = Backbone.View.extend({

	events : {
		"click .toggle" :"toggleone",
		"click .hideAll": "hideAll",
		"click .showAll": "showAll"
	},

	initialize : function() {
		var self = this;
		self.render();
		
	},

	toggleone: function (e) {
		e.preventDefault();
		var tog = $(e.currentTarget);
		var deets = tog.siblings('.details').first();
		deets.toggle();
	},

	hideAll: function (e) {
		e.preventDefault();
		var self = this;
		self.$('.details').hide();
	},

	showAll: function (e) {
		e.preventDefault();
		var self = this;
		self.$('.details').show();
	},

	render: function () {
		var self = this;
		var html = "";

		art = _.shuffle(art); 
		_.each(art, function (data){
			html += $.Mustache.render('work', data);
		});

		self.$el.append(html);
	}
	
});
