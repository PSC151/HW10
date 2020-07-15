app.listen(8000)

get.app('/main', function(req, res){
    res.sendfile(dirname + '/main.html');
});