var http = require('http');

http.createServer(function(req, res){

  console.log(new Date, "Redirecting", req.url);

  function giveup(code) {
    if(code == 410) {
      res.writeHead(410, {
        Server: "pfe+redirect",
        "X-Patrick-Says": "Redirect Engine in just 41 lines of code. node.js rocks"
      });
      res.end("This content is gone, there is no forwarding address. Sorry.");
    } else {
      res.writeHead(302, {
        Location: "http://thepatrick.com.au/",
        Server: "pfe/redirect",
        "X-Patrick-Says": "Redirect Engine in just 41 lines of code. node.js rocks"
      });
      res.end("Redirecting to http://thepatrick.com.au/");
    }
  }

  function re(url, m, destUrl, status) {
    if(_ref = url.match(new RegExp(m))) {
      for(var idx = 1; idx < _ref.length; idx++) {
        destUrl = destUrl.replace("$" + idx, _ref[idx]);
      }
      if(status == 410) {
        giveup(410);
      } else {
        res.writeHead(status || 302, {
          Location: destUrl,
          Server: "pfe/redirect",
          "X-Patrick-Says": "Redirect Engine in just 41 lines of code. node.js rocks"
        });
        res.end();
      }
      return true;
    }
    return false;
  }

  if(req.url.substring(0, 7) == "/macnz/") {
    macnz(re.bind(null, req.url.substring(7)), giveup);
  } else if(req.url.substring(0, 15) == "/patrickgeeknz/") {
    patrickgeeknz(re.bind(null, req.url.substring(15)), giveup);
  } else if(req.url.substring(0, 9) == "/soapbox/") {
    soapbox(re.bind(null, req.url.substring(9)), function() {
      patrickgeeknz(re.bind(null, req.url.substring(9)), giveup);
    });
  } else {
    giveup();
  }
}).listen(10394, function() {
  console.log("Up and running on http://localhost:10394/ ...");
});


function macnz(re, giveup) {
  if(re("^$", "http://www.thepatrick.com.au/projects/", 301)) return;
  if(re("^about.html$", "http://www.thepatrick.com.au/", 301)) return;
  if(re("^cheetahwatch/bugz", "http://thepatrick.lighthouseapp.com/projects/24374-cheetahwatch/overview", 301)) return;
  if(re("^cheetahwatch", "http://www.thepatrick.com.au/cheetahwatch/", 301)) return;
  if(re("^if(.*)", null, 410)) return;


  if(re("^favicon.ico", "http://cdn.m.ac.nz/favicon.ico", 301)) return;
  if(re("^apple-touch-icon.png", "http://cdn.m.ac.nz/apple-touch-icon.png", 301)) return;

  if(re("^(a|b|c|d)[/]?$", "http://www.thepatrick.com.au/projects/retired/flickrtools", 301)) return;
  if(re("^gmigrations", "http://code.m.ac.nz/gearshift", 301)) return;
  if(re("^(cine|injectr)", "http://www.thepatrick.com.au/projects/retired/cineapp", 301)) return;

  if(re("^justupdate/auth-done", "x-justupdate-oauth://auth/complete", 302)) return;

  if(re("^justupdate", "http://www.thepatrick.com.au/justupdate/", 301)) return;

  if(re("^bugz", "http://thepatrick.lighthouseapp.com/projects/24374-cheetahwatch/overview", 301)) return;

  if(re("^(dom-badge|dombadge|slideshow|flickrtools|favourite-photographers)", "http://www.thepatrick.com.au/projects/retired/flickrtools", 301)) return;

  giveup();

}

function patrickgeeknz(re, giveup) {

  if(re("^$", "http://thepatrick.com.au/", 301)) return;
  if(re("^stuff", null, 410)) return;
  if(re("^tools", null, 410)) return;
  if(re("^content", null, 410)) return;
  if(re("^column", null, 410)) return;
  if(re("^concepts$", null, 410)) return;
  if(re("^decades", null, 410)) return;
  if(re("^software", null, 410)) return;
  if(re("^else", null, 410)) return;
  if(re("^search", null, 410)) return;
  if(re("^myspace", null, 410)) return;
  if(re("^mint/mint.js.php", null, 410)) return;
  if(re("^firefox_off.jpg", null, 410)) return;

  if(re("favicon.ico", "http://thepatrick.cachefly.net/favicon.ico", 301)) return;
  if(re("apple-touch-icon.png", "http://thepatrick.cachefly.net/apple-touch-icon.png", 301)) return;

  if(re("^(syndicate|atom.xml|index.rdf|index.xml|feed/)", "http://myio.com.au/rss", 301)) return;
  if(re("^([0-9]+)/([0-9]+)/([^\.]+)", "http://soapbox.co.nz/$1/$2/$3", 301)) return;
  if(re("^([0-9]+)/([0-9]+)(|/|/index.html)", "http://soapbox.co.nz/$1/$2/", 301)) return;
  if(re("^([0-9]+)(|/|/index.html)$", "http://soapbox.co.nz/$1/$2/", 301)) return;

  if(re("^colophon/([^\.]+)$", null, 410)) return;

  if(re("^rights-reserved$", "http://thepatrick.com.au/rights-reserved.html", 301)) return;
  if(re("^rights-reserved.html$", "http://thepatrick.com.au/rights-reserved.html", 301)) return;
  if(re("^colophon/the-author/", "http://thepatrick.com.au/", 301)) return;

  if(re("^soapbox", "http://myio.com.au/", 301)) return;
  if(re("^(category/features/movies|category/features/movies/|movies|movies/|movies/index|movies/index.html)$", "http://movies.soapbox.co.nz/", 301)) return;

  if(re("^movies/index-([^.]+)", "http://movies.soapbox.co.nz/index-$1", 301)) return;
  if(re("^movies/([a-z0-9-^.]+)", "http://movies.soapbox.co.nz/movie/$1", 301)) return;
  if(re("^category/(.*)", "http://myio.com.au/tagged/$1", 301)) return;


  // entries moved from /y/m/d/title to /y/m/title
  if(re("^([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([_0-9a-z-]+)", "http://soapbox.co.nz/$1/$2/$4", 301)) return;

  // b2 archives
  if(re("^blog/archives/m/([0-9]{4})([0-9]{2})$", "http://soapbox.co.nz/$1/$2/", 301)) return;
  if(re("^b2", "http://myio.com.au/", 301)) return;
  if(re("^blog", "http://myio.com.au/", 301)) return;

  // things move
  if(re("^index.php", "/", 301)) return;
  if(re("^(vcard|colophon/make-contact/PatrickQuinnGraham)", "http://static.patrick.geek.nz/PatrickQuinnGraham.vcf", 301)) return;
  if(re("^photos$", "http://photos.patrick.geek.nz", 301)) return;
  if(re("^decade$", "http://decade.geek.nz/", 301)) return;
  if(re("^(aboutme/contactme|contactme|colophon/make-contact|colophon/the-author/makecontact)", "http://thepatrick.com.au/make-contact.html", 301)) return;
  if(re("^download/cheetahwatch(.*)", "http://thepatrick.cachefly.net/download/cheetahwatch$1", 301)) return;
  if(re("^download(.*)", "http://download.patrick.geek.nz$1", 301)) return;
  if(re("^things(.*)", "http://download.patrick.geek.nz/things$1", 301)) return;
  if(re("^about", "http://thepatrick.com.au/", 301)) return;
  if(re("^more-by-me$", "http://thepatrick.com.au/projects/", 301)) return;
  if(re("^default.asp$", "http://myio.com.au/", 301)) return;
  if(re("^else/experiments", "http://thepatrick.com.au/projects/", 301)) return;
  if(re("^flickrtools", "http://www.thepatrick.com.au/projects/retired/flickrtools", 301)) return;

  giveup();

}

function soapbox(re, giveup) {

  if(re("^$", "http://myio.com.au/", 301)) return;

  if(re("^(rss|syndicate|atom.xml|index.rdf|index.xml|feed/)", "http://myio.com.au/rss", 301)) return;

  if(re("^archive", "http://myio.com.au/archive", 301)) return;
  if(re("^past[/]?([0-9]{4})?[/]?", "http://myio.com.au/archive", 301)) return;
  if(re("^past/([0-9]{4})/([0-9]{1,2})[/]?([0-9]{1,2})?[/]?$", "http://myio.com.au/archive/$1/$2/", 301)) return;

  // soapbox blog posts
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/times-change", "http://myio.com.au/post/78225569", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/pdtable", "http://myio.com.au/post/78225687", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/technology-marches-on", "http://myio.com.au/post/78226611", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/dirty-campaigns", "http://myio.com.au/post/78226613", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/one-of-these-is-different", "http://myio.com.au/post/78226619", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/halloween", "http://myio.com.au/post/78226628", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/aperture-151", "http://myio.com.au/post/78226636", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/new-toy", "http://myio.com.au/post/78226638", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/entertain-this", "http://myio.com.au/post/78226644", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/pqphotos_beta_2", "http://myio.com.au/post/78226646", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/vfs-cafe", "http://myio.com.au/post/78226656", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/cssedit", "http://myio.com.au/post/78226674", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/cssedit-revisited", "http://myio.com.au/post/78226760", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/macappaday", "http://myio.com.au/post/78226763", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/decade-d2", "http://myio.com.au/post/78226773", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/fresh-water", "http://myio.com.au/post/78226791", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/toolkit", "http://myio.com.au/post/78226802", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/first-snow", "http://myio.com.au/post/78226804", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/you-know-you-want-one", "http://myio.com.au/post/78226814", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/soapbox-christmasish", "http://myio.com.au/post/78226833", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/parallels-beta-3306", "http://myio.com.au/post/78226837", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/ipv6-connected-again", "http://myio.com.au/post/78226849", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/apple-finally-loves-nz", "http://myio.com.au/post/78226856", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/playstation-3-first-impressions", "http://myio.com.au/post/78226862", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/trip-away", "http://myio.com.au/post/78226871", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/merry-christmas-and-happy-festivus", "http://myio.com.au/post/78226874", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/another-year-over", "http://myio.com.au/post/78226885", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/iphone", "http://myio.com.au/post/78226893", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/macfuse-and-unionfs", "http://myio.com.au/post/78226901", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/darfur", "http://myio.com.au/post/78226906", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/so-vista-is-ready", "http://myio.com.au/post/78226922", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/soapbox-v61", "http://myio.com.au/post/78226929", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/s3-backups", "http://myio.com.au/post/78226938", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/red-light-neon", "http://myio.com.au/post/78227679", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/s3-backup-for-itunes", "http://myio.com.au/post/78227685", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/google-apps", "http://myio.com.au/post/78227695", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/oddities", "http://myio.com.au/post/78227699", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/a-couple-of-things", "http://myio.com.au/post/78227720", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/the-next-step", "http://myio.com.au/post/78227728", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/comments-and-openid", "http://myio.com.au/post/78227730", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/kathy-sierra", "http://myio.com.au/post/78227731", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/soapbox-v62-london", "http://myio.com.au/post/78227746", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/itunes-emi-drm", "http://myio.com.au/post/78227748", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/nokia-6126-and-isync-revisited", "http://myio.com.au/post/78227754", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/to-the-uk", "http://myio.com.au/post/78227758", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/in-the-uk", "http://myio.com.au/post/78227759", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/one-week-into-living-in", "http://myio.com.au/post/78227770", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/one-week-on-from-one", "http://myio.com.au/post/78227771", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/visiting-athens", "http://myio.com.au/post/78227784", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/itunes-plus", "http://myio.com.au/post/78227788", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/introducing-gearshift", "http://myio.com.au/post/78227792", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/following-on", "http://myio.com.au/post/78227801", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/444-days-later", "http://myio.com.au/post/78227807", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/a-better-classcreate", "http://myio.com.au/post/78227813", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/thames-path", "http://myio.com.au/post/78227824", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/cheetahwatch", "http://myio.com.au/post/78227832", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/london-flickr-meetups-brighton", "http://myio.com.au/post/78227841", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/dconstruct-07-not-an-unconference", "http://myio.com.au/post/78227850", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/amsterdam", "http://myio.com.au/post/78227857", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/singapore", "http://myio.com.au/post/78227862", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/returning-home", "http://myio.com.au/post/78227865", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/twitter-stats", "http://myio.com.au/post/78227868", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/two-months-already", "http://myio.com.au/post/78227870", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/dublin-in-less-than-48", "http://myio.com.au/post/78227874", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/history-meme", "http://myio.com.au/post/78227879", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/all-change-please", "http://myio.com.au/post/78227885", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/vancouver", "http://myio.com.au/post/78227890", 301)) return;
  if(re("^past/[0-9]+/[0-9]+/[0-9]+/apartment-living", "http://myio.com.au/post/78227896", 301)) return;

  if(re("^twitter", null, 410)) return;
  if(re("^pages/colophon", null, 410)) return;
  if(re("^pages/rightsreserved", "http://thepatrick.com.au/rights-reserved.html", 301)) return;

  // Really really old stuff from movable type
  if(re("^([0-9]{4})/(.*)", "http://crypt.soapbox.co.nz/$1/$2", 301)) return;

  giveup();
}