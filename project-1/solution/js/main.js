var arr = [
    {
        id: 0,
        data: 'asd123123asd'
    },
    {
        id: 1,
        data: 'osd;askd'
    },
    {
        id: 2,
        data: 'fsdfs;ldfk;'
    }
];

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
        var article = new Article();

        article.setValue(value);

        var riba = article.render();

        $('#articles-list').append(riba);
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

var ArticlesContainer = Backbone.View.extend({
    el: '#articles-container',
    template: _.template(Templates.articlesContainer),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());

        var articlesList = new ArticlesList();

        this.$('#articles-list').html(articlesList.render());
    }
});

var Article = Backbone.View.extend({
    // el: '#articles-list',
    tagName: 'li',
    template: _.template(Templates.article),
    initialize: function() {
        //this.render();
    },
    setValue: function(value) {
        this.value = value;
    },
    render: function() {
        var self = this;

        return self.$el.html(this.template({
            data: self.value
        }));
    }
});

var ArticlesList = Backbone.View.extend({
    tagName: 'ul',
    render: function() {
        var self = this;

        articlesCollection.add(arr);

        articlesCollection.each(function(el) {
            var article = new Article();

            article.setValue(el.get('data'));

            self.$el.append(article.render());
        });

        return self.$el;
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
var articlesContainer = new ArticlesContainer();