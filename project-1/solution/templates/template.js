var Templates = {};

Templates.indexTemplate = '<div class="main-container"><div class="container"><div id="form"></div><div id="form-comments"> </div><div id="articles-container"></div></div></div>';
Templates.form = '<h2>Create article</h2> <div class="form-container"> <form id="create-article"><input id="title" name="title" type="text"/> <input id="submit" type="submit"/> </form> </div>';
// Templates.formComments = '<textarea class="textarea"> textarea </textarea>'
Templates.articlesContainer = '<div class="articles-container"><h3>Articles list</h3> <div id="articles-list"></div> </div>';
Templates.article = '<div class="">Super article <%= data %></div>';
// Templates.articlesList = '<div class="">Super article</div>';