const React = require('react');

function PictureAddForm() {
  return (
    <form className="js-form">
      <input type="file" accept="image/*" name="picture" />
      <button
        type="submit"
        className="py-1 px-4 bg-green-300 my-4 hover:bg-green-400"
      >
        Загрузить картинку
      </button>
    </form>
  );
}
module.exports = PictureAddForm;
