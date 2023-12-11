const React = require('react');

function PictureCard({ picture }) {
  return (
    <div className="js-picture" data-id={picture.id}>
      <img src={picture.filePath} />
      <button type="button" className="js-delete">
        Удалить
      </button>
    </div>
  );
}

module.exports = PictureCard;
