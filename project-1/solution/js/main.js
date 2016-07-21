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

        var value = this.$('#title').val();

        articlesCollection.add({title: value});
    },
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
    }
});

/*var FormComments = Backbone.View.extend({
    el: '#form-comments',
    template: _.template(Templates.formComments),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
    }
});*/

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

var ArticleModel = Backbone.Model.extend({
    defaults: {
        title: 'default title',
        description: 'super long text'
    },
    initialize: function() {
        console.error(this);
        this.set({id: Date.now()})
    }
});

var ArticlesCollection = Backbone.Collection.extend({
    model: ArticleModel,
    initialize: function() {
        console.error(this);
    }
});

var app = new App();
var articlesCollection = new ArticlesCollection();
var form = new Form();
var articleModel = new ArticleModel();
// var formComments = new FormComments();
var articlesList = new ArticlesList();

// var arr = [
//     {
//         id: 0
//     },
//     {
//         id: 1
//     },
//     {
//         id: 2
//     }
// ];

// articlesCollection.add(arr);
// articlesCollection.add({ id: 4, riba: 'riba'});

// console.log('articleModel', articleModel);
// console.log('articlesCollection', articlesCollection);
console.log('get', articlesCollection.get(2));
