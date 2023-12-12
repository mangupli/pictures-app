require("@babel/register");
require("dotenv").config();
const fs = require("fs/promises");
const express = require("express");
const { Picture } = require("./db/models");
const upload = require("./utils/uploadMulter");

const serverConfig = require("./config/serverCofnig");
const MainPage = require("./components/MainPage");
const PictureCard = require("./components/PictureCard");
const path = require("path");

const app = express();

serverConfig(app);

app.get("/", async (req, res) => {
  try {
    const pictures = await Picture.findAll({ order: [["createdAt", "DESC"]] });
    const html = res.renderComponent(MainPage, { pictures });
    res.send(html);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ошибка на сервере");
  }
});

app.post("/api/pictures", upload.single("picture"), async (req, res) => {
  try {
    // Обработка загруженного файла
    const uploadedFile = req.file;
    // Multer загружает картинку по абсолютному пути относительно корня директории,
    // а на клиенте мне нужен адрес картинки относительно папки public, поэтому убираю ее в начале пути
    const filePath = uploadedFile.path.replace("public", "");

    // создаем новую запись в бд с адресом до картинки
    const picture = await Picture.create({ filePath });

    // генерируем новую карточку
    const html = res.renderComponent(
      PictureCard,
      { picture },
      { doctype: false },
    );

    // отправляем карточку назад клиенту
    // 201 статус = успешно создано
    res.status(201).json({ html });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
});

app.delete("/api/pictures/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const picture = await Picture.findByPk(+id);
    if (picture) {
      // удалить файл
      await fs.unlink(path.join(__dirname, "public", picture.filePath));

      // удалить запись в бд
      await Picture.destroy({ where: { id } });

      return res.sendStatus(204);
    }
    return res.status(400).json({ message: "Такой картинки не найдено" });
  } catch (error) {
    console.error("Ошибка при обработке запроса:", error);
    res.status(500).json({ message: "Ошибка на сервере" });
  }
});

const PORT = process.env.PORT ?? 3000;

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT} 💖`);
});
