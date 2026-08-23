import http from 'node:http';

const quotes = [
  "Simplicity is the soul of efficiency.",
  "Before software can be reusable it first has to be usable.",
  "Computers are good at following instructions, but not at reading your mind."
];

const server = http.createServer((req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ quote }));
});

server.listen(4500, () => {
  console.log("Quotes microservice running on http://localhost:4500");
});
