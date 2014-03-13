var StudyView = Backbone.View.extend({

	events : {
		"click .toggle" :"toggleone",
		"click .toggleAll": "toggleAll"
	},

	initialize : function() {
		var self = this;

		self.art = art;
		if (self.options.focus) {
			self.art = _.filter(self.art, function(a) { return a.focus; });
		}

		self.render();
		self.$('.details').hide();
	},

	toggleone: function (e) {
		e.preventDefault();
		var tog = $(e.currentTarget);
		var deets = tog.siblings('.details').first();
		deets.toggle();
	},

	toggleAll: function (e) {
		e.preventDefault();
		var self = this;
		self.$('.details').toggle();
	},

	render: function () {
		var self = this;
		var html = "";

		alert(self.art.length);

		self.art = _.shuffle(self.art); 
		_.each(self.art, function (data){
			html += $.Mustache.render('work', data);
		});

		self.$el.append(html);
	}
	
});
