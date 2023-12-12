const React = require("react");
const Layout = require("./Layout");
const Picture = require("./PictureCard");
const PictureAddForm = require("./PictureAddForm");

function MainPage({ pictures }) {
  return (
    <Layout>
      <h1 className="mb-4 text-3xl font-bold uppercase">Наши картинки</h1>
      <PictureAddForm />

      <div className="js-pictures-container mt-4 w-full gap-x-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {pictures.map((picture) => (
          <Picture picture={picture} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
