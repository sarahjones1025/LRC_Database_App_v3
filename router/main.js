module.exports = function(app)

{
     app.GET('/',function(req,res){
        res.render('index.html');
     });
     app.GET('/about',function(req,res){
        res.render('about.html');
    });
};