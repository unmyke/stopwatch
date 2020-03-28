# Stopwatch / Slomux

## [Тестовое задание](https://codepen.io/csssr/pen/QPyPrz?editors=1010) [CSSSR](https://csssr.com/)

> Slomux — упрощённая, сломанная реализация Flux.
> Перед вами небольшое приложение, написанное на React + Slomux.
> Это нерабочий секундомер с настройкой интервала обновления.
>
> Исправьте ошибки и потенциально проблемный код, почините приложение и прокомментируйте своё решение.
>
> При нажатии на "старт" должен запускаться секундомер и через заданный интервал времени увеличивать свое значение на значение интервала.
>
> При нажатии на "стоп" секундомер должен останавливаться и сбрасывать свое значение.

## Установка:

```shell
$ git clone https://unmyke@bitbucket.org/unmyke/stopwatch.git

$ npm install
```

## Запуск приложения в режиме разработки:

```shell
$ npm start
```

## Сборка проекта (результат сборки в папке './build'):

```shell
$ npm build
```

## Внесенные изменения

### модуль slomux

**`StoreContext`**

- для передачи хранилища использован [новый `Context API`](https://ru.reactjs.org/docs/context.html);

**`Provider`**

- классовый компонент `Provider` заменен функциональным;
- использован [новый `Context API`](https://ru.reactjs.org/docs/context.html);

**`createStore`**

- добавлена функция `unsubsсribe` для возможности отписаться от изменений в хранилище;
- исправлена инициация состояния хранилища: в случае, если в функцию не передано начальное состояние хранилища, то оно устанавливается в значение начального состояния корневого редьюсера;

**`connect`**

- исправлено некорректное поведение, при котором компоненты, обернутые HOC'ом `connect` в `WrappedComponent`, не обновлялись при монтировании;
- добавлена отписка от обновления компонента `WrappedComponent` перед отмонтированием;
- классовый компонент `WrappedComponent` заменен функциональным с использованием хуков для принудительного обновления оборачиваемых компонентов ([`useState`](https://ru.reactjs.org/docs/hooks-state.html) и [`useEffect`](https://ru.reactjs.org/docs/hooks-effect.html)) и получения хранилища состояния ([`useContext`](https://ru.reactjs.org/docs/hooks-reference.html#usecontext));

**`reducer`**

- добавлено значение начального состояние;
- добавлен возврат текущего состояния при передаче экшна, обработка которого не предусмотрена;
- добавлена проверка при обработке экшна `CHANGE_INTERVAL`, не допускающего установки состояния (интервала времени) в отрицательное значение;

### компоненты

**`Interval`**

- исправлена очередность аргументов при вызове HOC'а `connect`;
- добавлена логика UI, предотвращающая:

  - установку отрицательного значения интервала (отключение кнопки декремента);
  - изменение интервала при запущенном секундомере (отключение кнопок изменения интервала);

- классовый компонент `IntervalComponent` заменен функциональным;

**`Timer`**

- функции обработчиков кнопок __"Старт"__ и __"Стоп"__ заменены на стрелочные функции во избежание потери контекста;
- в обработчике кнопки __"Старт"__ изменено использование функции `setTimeout` на `setInterval` для предотвращения остановки секундомера по истечению временного интервала `currentInterval`;
- добавлено состояние компонента `сurrentIntervalId`, хранящее идентификатор интервала `setInterval`. На основании значения `сurrentIntervalId` определяется факт запуска секундомера, что дает возможность корректно выполнить отмену выполнения коллбека `setInterval` при остановке секундомера, предотвращающая изменение состояния `currentTime` после остановки;
- добавлена отчистка интервала при отмонтировании компонента;
- добавлена логика UI, предотвращающая:

  - запуск секундомера повторно (отключение кнопки __"Старт"__);
  - запуск секундомера при незаданном значение интервала (отключение кнопки __"Старт"__);
  - остановка уже остановленного секундомера (отключение кнопки __"Стоп"__);

- классовый компонент `TimerComponent` заменен функциональным, хранение состояния UI реализовано с помощью хука [`useReducer`](https://ru.reactjs.org/docs/hooks-reference.html#usereducer).

## [Демо](https://codepen.io/unmyke/pen/YzXGazw)
