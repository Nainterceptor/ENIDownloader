var resolver = require('./helper.js');
var casper = require('casper').create({
    verbose: true,
    logLevel: 'error'
});

var url = 'http://www.eni-training.com/client_net/mediabook.aspx?idR=300891';

//To debug :

//casper.on("remote.message", function(msg){
//    this.echo("remote.msg: " + msg);
//});
//
//casper.on("resource.error", function(resourceError){
//    this.echo("res.err: " + JSON.stringify(resourceError));
//});
//
//casper.on("resource.requested", function(resource){
//    this.echo("res.req: " + JSON.stringify(resource));
//});


casper
    .start()
    .thenOpen(url, function() {
        this.evaluate(function() {
            document.cookie = "MplusUserSettings=Lng=1; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
            document.cookie = "__rsaxc=835301c9ec7381b8d48174ceb85c8e60; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
            document.cookie = "__hnwky=20731982327777; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
            document.cookie = "ENI_Editions_Portail=Identifiant=00ecf0d7-b277-4a59-86c8-840c66462d91&SessionId=350c7a83-7d70-4237-b870-1670d5b0a8cf; expires=Fri, 1 Aug 2100 20:00:00 UTC; path=/";
        });
    })
    .thenOpen(url, function() {
        var links = this.evaluate(function() {
            return Array.prototype.map.call(document.querySelectorAll('ul#Root a'), function(link){
                return link.getAttribute('href');
            });
        });
        this.each(links, function(self, link) {
            var id = /ida=(\d+)/g.exec(link)[1];
            // May be useful to continue from last id
            //if (Number(id) > 000000) {
                self.thenOpen(resolver(link, url), function() {
                        self.download("http://www.eni-training.com/client_net/pdfexport.aspx?exporttype=2", 'docs/DL' + id + '.pdf');
                });
            //}
        });
    })
    .run(function(){
        this.exit();
    });
