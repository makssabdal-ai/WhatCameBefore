# Хронодуэль: Что появилось раньше?

Статическая HTML5-игра для Яндекс Игр без сборщика, фреймворков и внешних npm-зависимостей. Игрок выбирает, какое событие, продукт или явление появилось раньше, собирает серии, проходит карьеру и отправляет лучший счет в лидерборд.

## Что внутри

- `index.html` - основная страница игры, подключение `/sdk.js`, аудио и шаблон главного экрана.
- `styles.css` - темы, адаптивная верстка, состояния UI и оформление режимов.
- `game.js` - вопросы, режимы, прогресс, сохранения, реклама, звук и интеграция с Yandex Games SDK.
- `server.js` - локальный статический сервер для проверки без сборки.
- `assets/background.mp3` - фоновая музыка.
- `yandex_publish/` - материалы для публикации: иконки, скриншоты, описание и чеклист.

## Режимы игры

- `Карьера` - карта уровней с прогрессией и непересекающимися наборами вопросов.
- `По темам` - выбор категории вопросов.
- `Блиц` - короткая сессия на максимум очков за ограниченное время.
- `Ежедневный вызов` - фиксированный набор вопросов дня.
- `Бесконечный` - длинная партия до потери жизней.
- `Рейтинг` - локальный лучший результат и лидерборд Яндекс Игр.

## Запуск

```powershell
node server.js
```

После запуска открыть:

```text
http://127.0.0.1:4174/
```

Если порт занят:

```powershell
$env:PORT='4180'; node server.js
```

## Проверки

Проверка синтаксиса JavaScript:

```powershell
node --check game.js
```

Проверка главной страницы:

```powershell
$job = Start-Job -ScriptBlock { Set-Location 'C:\Users\ноут-макс\OneDrive\Desktop\WhatCameBefore'; node server.js }
Start-Sleep -Seconds 1
try { Invoke-WebRequest -Uri http://127.0.0.1:4174/ -UseBasicParsing | Select-Object -ExpandProperty StatusCode }
finally { Stop-Job $job; Remove-Job $job }
```

Проверка MP3:

```powershell
$job = Start-Job -ScriptBlock { Set-Location 'C:\Users\ноут-макс\OneDrive\Desktop\WhatCameBefore'; node server.js }
Start-Sleep -Seconds 1
try { (Invoke-WebRequest -Uri http://127.0.0.1:4174/assets/background.mp3 -UseBasicParsing).Headers['Content-Type'] }
finally { Stop-Job $job; Remove-Job $job }
```

## Яндекс Игры

- `/sdk.js` подключается из `index.html`.
- Локально сервер отдает пустой `/sdk.js`, поэтому игру можно проверять без реального SDK.
- Инициализация SDK выполняется безопасно: при недоступном SDK игра продолжает работать через fallback.
- `LoadingAPI.ready()` вызывается после готовности интерфейса.
- Сохранения идут через `player.setData`, с fallback на `localStorage`.
- Лидерборд использует техническое имя `bestScore`.
- Реклама вызывается только через SDK: fullscreen и rewarded video.

## Публикация

Основной архив для загрузки: `WhatCameBefore-yandex.zip`.

Перед публикацией пройти `yandex_publish/checklist_ru.txt` и убедиться, что в архив попали игровые файлы, аудио и все необходимые ассеты без лишних локальных файлов.
