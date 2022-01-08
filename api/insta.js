const { parse } = require('rss-to-json');

export default function handler(req, res) {
  const feed = 'https://rsshub.app/picuki/profile/filmkitnet'
  parse(feed).then(rss => {
    console.log(JSON.stringify(rss, null, 3));
    
    res.status(200).json({
    body: JSON.stringify(rss, null, 3)
  });
});
  
  
  /*
  fetch(feed)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      res.setHeader('Content-Type', 'text/xml');
      res.send(data)
    });
    */
  
}
