const React = require("react");

function PictureAddForm() {
  return (
    <form className="js-form flex w-72 flex-col">
      <input type="file" accept="image/*" name="picture" />
      <button
        type="submit"
        className="my-4 bg-green-300 px-4 py-1 hover:bg-green-400"
      >
        Загрузить картинку
      </button>
    </form>
  );
}
module.exports = PictureAddForm;
