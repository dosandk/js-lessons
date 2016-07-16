var App = Backbone.View.extend({
    el: '#app',
    template: _.template(Templates.indexTemplate),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
    }
});

var Form = Backbone.View.extend({
    el: '#form',
    template: _.template(Templates.form),
    events: {
        'click #submit': 'sendForm'
    },
    sendForm: function(e) {
        e.preventDefault();
        console.log(e);
        console.error('sendForm');

        console.log(this.$('#title').val());
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
    }
});

var ArticlesList = Backbone.View.extend({
    el: '#articles-list',
    template: _.template(Templates.articlesList),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
    }
});

var MySuperModel = Backbone.Model.extend({});
var MySuperCollection = Backbone.Collection.extend({});

var app = new App();
var form = new Form();
var articlesList = new ArticlesList();