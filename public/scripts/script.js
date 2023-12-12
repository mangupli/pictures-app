const form = document.querySelector(".js-form");
const picturesContainer = document.querySelector(".js-pictures-container");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const input = e.target.picture;

    // файлы на сервер отправляются с помощью класса FormData
    const formData = new FormData();

    // добавляем по ключу 'picture' файл, который загрузил пользователь
    formData.append("picture", input.files[0]);

    // Отправка запроса на сервер для загрузки картинки
    const response = await fetch("/api/pictures", {
      method: "POST",
      body: formData,
      // внимание - headers не нужны
    });

    const data = await response.json();
    if (response.ok) {
      // добавляем картинку на страницу
      picturesContainer?.insertAdjacentHTML("afterbegin", data.html);
      // очищаем инпут
      input.value = "";
    } else {
      console.error(data.message);
    }
  });
}

if (picturesContainer) {
  picturesContainer.addEventListener("click", async (e) => {
    if (e.target.classList.contains("js-delete")) {
      const pictureCard = e.target.closest(".js-picture");
      const { id } = pictureCard?.dataset;
      const response = await fetch(`/api/pictures/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        pictureCard.remove();
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    }
  });
}
