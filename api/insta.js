const {
  parse
} = require('rss-to-json');

export default function handler(req, res) {
  const username = req.query.username;
  const feed = 'https://rsshub.app/picuki/profile/' + username
  parse(feed).then(rss => {
    console.log(req.query);

    res.status(200).json(rss);
  });

}