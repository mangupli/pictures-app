# Образ из которого будем собирать контейнер
FROM node:20-slim

# рабочая папка проекта
WORKDIR /app

# копируем package.json 
COPY package.json .
COPY package-lock.json .

# устанавливаем зависимости
# RUN - запускает команду во время сборки контейнера
RUN npm install

# копируем все остальные файлы
COPY . .

# открываем порт 3000 контейнера наружу (если нет PORT в переменных окружения - то установи 3000)
EXPOSE ${PORT:-3000}

# запускаем сервер при запуске контейнера
CMD npm start


