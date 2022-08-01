free stock avatar https://pravatar.cc/

# Привет!

Во-первых, поздравляем! Ты выбрал для начала своей карьеры, пожалуй, самый эффективный и увлекательный старт - стажировку в нашей компании.

Во-вторых, приготовься к тому, что будет непросто - мы разработчики, а не университетские преподаватели. Времени на раскачку не будет, а обучение на стажировке максимально приближено к реальной работе :)

В-третьих, надо сделать тестовое задание, чтобы попасть на стажировку. Нам это нужно для того, чтобы понять, что ты уже немного умеешь программировать и сможешь справиться с тем материалом, который мы будем давать в процессе стажировки.

## Что нужно сделать?

В качестве тестового задания мы предлагаем тебе реализовать небольшое приложение, в котором есть всего по чуть-чуть: верстки, работы с API, преобразование данных и т.д.

## Какие требования к процессу и результату?

1. Первое, что нужно сделать - это прочитать и разобраться во всех требованиях, дизайне и API, указанных в этом документе;
2. Затем - разбить проект на отдельные задачи, т.е. продекомпозировать;
3. После этого дать временную оценку в часах каждой задаче. Если ожидаемое тобой время выполнения отдельной задачи превышает 2 часа - значит нужно эту задачу разбить на подзадачи и оценить каждую из них. В итоге у тебя должен получиться план работ и ожидаемое время выполнения всего тестового задания;
4. После планирования можно переходить к программированию. Создай новый репозиторий в GitHub, сделай его приватным (после старта стажировки можно будет его сделать публичным) и добавь в collaborators пользователя kode-frontend;
5. В первом commit в репозиторий в файле [readme.md](http://readme.md) зафиксируй свой план задач с ожидаемой временной оценкой из пункта 3;
6. Двигаясь по собственному плану, реализуй тестовое задание;
7. По завершению работ, добавь в [readme.md](http://readme.md) реальное время выполнение задач и напиши в телеграм о готовности [@eka_jo](https://t.me/Eka_jo), чтобы задание начали проверять.

### На что мы будем смотреть? На все сразу:

- на полноту реализованного функционала и соответствие дизайну;
- количество ошибок;
- стиль и оформление кода;
- работу с git - оформление commits, pull requests;
- декомпозицию и оценку - то есть на твоё умение разбивать задачи и планировать собственное время;
- на что-то ещё :)

### Сколько есть времени?

Столько, сколько потребуется. Но, разумеется у реализации тестового, как и у любой рабочей задачи есть дедлайн - 15 ноября 2021 23:59:59 UTC +2. Но постарайся закончить выполнение тестового как можно быстрее, чтобы мы смогли вдумчиво его проверить!

Достаточно вводных, переходим к требованиям!

# Требования

## Стэк

- Create React App
- React Router
- Axios

## Дизайн

Хороший дизайн для клиентского разработчика - отличный способ быстро понять, что предстоит сделать. Не забываем, что верстка должна быть адаптивной! Он у нас именно такой:

[https://www.figma.com/file/GRRKONipVClULsfdCAuVs1/KODE-Trainee-Dev-Осень'21?node-id=11%3A14414](https://www.figma.com/file/GRRKONipVClULsfdCAuVs1/KODE-Trainee-Dev-%D0%9E%D1%81%D0%B5%D0%BD%D1%8C'21?node-id=11%3A14414)

## API

Спецификация метода API (он у нас один) - [https://kode-education.stoplight.io/docs/trainee-test/b3A6MjUxNDM5Mjg-get-users](https://kode-education.stoplight.io/docs/trainee-test/b3A6MjUxNDM5Mjg-get-users)

Запрос для получения успешного ответа:

```bash
curl --request GET \
  --url https://stoplight.io/mocks/kode-education/trainee-test/25143926/users \
  --header 'Content-Type: application/json' \
  --header 'Prefer: code=200, example=success'
```

Запрос для тестирования на разных данных (генерируется автоматически при каждом запросе):

```bash
curl --request GET \
  --url https://stoplight.io/mocks/kode-education/trainee-test/25143926/users \
  --header 'Content-Type: application/json' \
  --header 'Prefer: code=200, dynamic=true'
```

Запрос, который вернет ошибку с http кодом 500:

```bash
curl --request GET \
  --url https://stoplight.io/mocks/kode-education/trainee-test/25143926/users \
  --header 'Content-Type: application/json' \
  --header 'Prefer: code=500, example=error-500'
```

## Функциональные требования

### **Запуск**

Когда пользователь открывает сайт необходимо загрузить актуальный список работников компании.

При входе в приложение необходимо отобразить экран 2.0.0. Изначально он должен быть в состоянии загрузки, экран 1.0.0. Если при загрузке произошла ошибка, отсутствует интернет соединение или API вернул ошибку, необходимо отобразить экран "Критическая ошибка". В случае успеха, необходимо отобразить Top App Bar и список людей.

### **Top App Bar**

Компонент находится на верху экрана и представляет из себя поле для поиска с иконкой "Поиск", кнопкой "Сортировка" и панель вкладок. При переключении между вкладками,  на главном экране список работников фильтруется и отображаются только люди работающие в выбранном выбранном департаменте, либо все, если выбрана вкладка "Все".

Соответствия названия вкладок с полем "department" из запроса API:

android - Android

ios - iOS

design - Дизайн

management - Менеджмент

qa - QA

back_office - Бэк-офис

frontend - Frontend

hr - HR

pr - PR

backend - Backend

support - Техподдержка

analytics - Аналитика

При нажатии на кнопку "Фильтр" открывается Bottom Sheet с вариантами сортировки списка работников. Есть два варианта сортировки "По алфавиту" (по умолчанию), "По дню рождения". При переключении варианта сортировки, панель должна закрываться, а список на главной странице должен перезагружаться.

Когда пользователь вводит текст в поисковое поле, необходимо фильтровать список на главном экране и отображать только работников соответствующих параметрам поиска. Поиск может осуществляться по имени, фамилии или никнейму, состоящему из двух символов.

В случае отсутствия результатов поиска необходимо отобразить информацию о том, что ничего не было найдено. Экран "2.0.0Г Люди (Ошибка поиска)".

### Экран "г**лавная"**

Вверху главной страницы должна быть расположена верхняя панель приложения, на которой должны находиться: поле для поиска, панель вкладок для группировки загруженного списка пользователей, список работников. Список должен обновляться каждый раз, когда меняются параметры поиска, обновляется вариант сортировки или пользователь переключается вкладки департаментов.

Пользователь имеет возможность скролить список работников.

В режиме сортировки "По алфавиту" для каждого работника отображается его фотография, имя, никнейм и департамент.

В режиме сортировки "По дню рождения", список отображается от ближайшей даты для рождения вниз. Если день рождения следующего работника будет только в следующем году, то необходимо отобразить блок с годом, экран 2.0.1А.

Когда пользователь кликнет на человека, необходимо открыть экран информации о человеке (экран "детали").

### Экран "детали"

Сверху экрана деталей должна отображаться кнопка назад для навигации на главный экран. Также вернуться на главный экран можно, если нажать системную кнопку назад.

В шапке экрана должна отображаться аватарка пользователя, имя, никнейм и название департамента.

Ниже находится дата рождения и номер телефона. При нажатии на номер телефона необходимо открыть приложение для звонка по номеру.

## Дополнительное задание

Дополнительное задание не обязательно для выполнения. Если вы не успеваете - лучше сделать хорошо основную часть. Но если время осталось...

Необходимо реализовать real-time отслеживание состояния сети устройства.

При отключении устройства от сети, верхняя панель приложения должна измениться на сообщение об ошибке сети, экран 2.0.0.А — Люди (Ошибка).
При этом должна остаться возможность пользоваться приложением в offline, теми данными которые успели загрузится до отключения сети.

При восстановлении доступа к сети:

1. Верхняя панель приложения должна измениться на сообщение о загрузке, экран 2.0.0.А — Люди (Загрузка).
2. Список на активной вкладке должен обновиться.

# На этом всё, желаем удачи!