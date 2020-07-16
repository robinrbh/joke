const express = require('express')

const app = express()

const page = `<html>
  <head>
    <title>Robin Hartog</title>
  </head>

  <body>
    <h1>Why did the programmer quit his job?</h1>
    <p>Because he didn't get arrays.</p>
  </body>
</html>`

app.get('/', (request, response) => response.send(page))

const port = process.env.PORT || 3000

app.listen(
  port, // might be process.env.PORT or 3000
  console.log(`Listening on :${port}`)
)