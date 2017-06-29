
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res) {


    switch (req.url) {
        case  '/':
            fs.readFile('04.html', 'utf-8', function (err, data) {
                if (err) {
                    res.end('文件读取失败');
                    console.log(err)
                } else {
                    res.writeHead(200, {'contont-type': 'text/html'});
                    res.end(data)
                }
            });
            break;
        case '/a.jpg':
            fs.readFile('a.jpg', function (err, data) {
                if (err) {
                    res.end('文件读取失败');
                    console.log(err)
                } else {
                    res.writeHead(200, {'contont-type': 'image/jpeg'});
                    res.end(data)
                }
            });
            break;
        case '/04.js':
            fs.readFile('04.js', function (err, data) {
                if (err) {
                    res.end('文件读取失败');
                    console.log(err)
                } else {
                    res.writeHead(200, {'contont-type': 'text/javascript;charset=utf8'});
                    res.end(data)
                }
            });
            break;
        case '/04.css':
            fs.readFile('04.css', function (err, data) {
                if (err) {
                    res.end('文件读取失败');
                    console.log(err)
                } else {
                    res.writeHead(200, {'contont-type': 'text/css;charset=utf8'});
                    res.end(data)
                }
            });
            break;
        case '/06.html': fs.readFile('06.html','utf-8',function(err,data){
            if(err){
                console.log('du读取失败');
                console.log(err)

            } else{
                console.log('读取成功');
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data)
            }
        });break;
        case '/05.html':fs.readFile('05.html','utf-8',function(err,data){
            if(err){
                console.log('du读取失败');
                console.log(err)

            } else{
                console.log('读取成功');
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data)
            }
        });break;
        case '/04.html': fs.readFile('04.html','utf-8',function(err,data){
            if(err){
                console.log('读取失败');
                console.log(err)
            }else {
                res.writeHead(200,{'concent-type':'text/html;charset=utf8'});
                res.end(data)
            }
        });break;
        default: res.end('404 not found')
    }

}).listen(2000);


