## Необходимо разработать прототип табло рейсов в аэропорту в виде web-приложения.
Проект должен быть полностью рабочим, т.е. его можно собрать и запустить из
исходного кода и весь основной функционал должен быть реализован.

Прототип включает в себя вывод табло прилёта и вылета рейсов, счетчик рейсов
(количество рейсов в табло). Должна быть возможность перейти в режим
администратора (авторизацию делать не нужно), где появляется возможность
просмотра, редактирования и удаления рейсов, добавление новых рейсов.
### У рейса есть следующие данные:
- Номер рейса
- Авиакомпания
- Город вылета
- Город прилёта
- Тип самолёта
- Ожидаемое время вылета/прилёта
- Фактическое время вылета/прилёта
- Статус:
  - вылетел
  - приземлился
  - идет посадка
  - задержан
  - отменён
- Комментарии

Помимо реализации frontend необходимо предоставить документацию к REST API
для этого проекта, как вы её видите.

Дизайн на ваше усмотрение.

Проект нужно реализовать на одной из frontend-технологий: TypeScript + React /
Next.js / Angular