const React = require("react");
const TrashIcon = require("./TrashIcon");

function PictureCard({ picture }) {
  return (
    <div className="js-picture relative" data-id={picture.id}>
      <img src={picture.filePath} />
      <div className="js-delete absolute right-0 top-0">
        <TrashIcon />
      </div>
    </div>
  );
}

module.exports = PictureCard;
