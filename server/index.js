const express = require('express');
const axios = require('axios');

const server = express();
server.use(express.static(`${__dirname}/../client`));

server.get('/:pid/getGalleries', (req, res) => {
  axios.get(`http://ec2-54-177-71-152.us-west-1.compute.amazonaws.com/${req.params.pid}/getGalleries`)
    .then((galleries) => {
      res.status(200).send(galleries.data)
    })
    .catch(() => {
      res.status(404).send('galleries error');
      console.log('/:pid/product-details error');
    });
});

server.get('/:pid/product-details', (req, res) => {
    axios.get(`http://ec2-13-56-11-125.us-west-1.compute.amazonaws.com/${req.params.pid}/product-details`)
    .then((details) => {
      res.status(200).send(details.data)
    })
    .catch((error) => {
      res.status(404).send('details error');
      console.log('/:pid/getGalleries error');
    });
});

server.get('/:pid/reviews', (req, res) => {
  axios.get(`http://ec2-13-57-226-242.us-west-1.compute.amazonaws.com/${req.params.pid}/reviews`)
    .then((reviewData) => {
      res.status(200).send(reviewData.data)
    })
    .catch((error) => {
      res.status(404).send('reviews error');
      console.log('/:pid/reviews error');
    });
});

server.put('/:pid/reviews/vote/:voteType/:id/:toggle', (req, res) => {
  axios.put(`http://ec2-13-57-226-242.us-west-1.compute.amazonaws.com/${req.params.pid}/reviews/vote/:voteType/:id/:toggle`)
    .then((reviewVote) => {
      res.status(200).send(reviewVote.data)
    })
    .catch((error) => {
      res.status(404).send('reviewVote error');
      console.log('/:pid/reviews/vote/:voteType/:id/:toggle error');
    });
});

server.get('/:pid/recommendation/getInfo', (req, res) => {
  axios.get(`http://ec2-13-57-228-157.us-west-1.compute.amazonaws.com/${req.params.pid}/recommendation/getInfo`)
    .then((recommendations) => {
      res.status(200).send(recommendations.data)
    })
    .catch((error) => {
      res.status(404).send('rec error');
      console.log('/:pid/recommendation/getInfo error');
    });
});

const PORT = 8000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
