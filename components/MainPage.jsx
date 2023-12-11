const React = require('react');
const Layout = require('./Layout');
const Picture = require('./PictureCard');
const PictureAddForm = require('./PictureAddForm');

function MainPage({ pictures }) {
  return (
    <Layout>
      <h1>Наши картинки</h1>
      <PictureAddForm />

      <div className="js-pictures-container">
        {pictures.map((picture) => (
          <Picture picture={picture} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
