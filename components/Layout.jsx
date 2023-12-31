const React = require("react");

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="/scripts/script.js" />
        <link rel="stylesheet" href="/styles/style.css" />
        <title>Pictures</title>
      </head>
      <body className="container mx-auto my-8 px-10">{children}</body>
    </html>
  );
}

module.exports = Layout;
