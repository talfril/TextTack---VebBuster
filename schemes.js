const schemesData = [
  {
    number: "01",
    title: "ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ",
    text: "Отправить запрос вы можете любым удобным для вас способом: например, через форму на сайте. Также вы можете связаться с нами напрямую.",
  },
  {
    number: "02",
    title: "МЫ ПРОВЕРЯЕМ НАЛИЧИЕ ПОЗИЦИЙ",
    text: "Проверяем наличие на складе, а также актуальность производства (возможна замена, если необходимо.) Если требуется замена - подбираем аналоги и привозим на заказ.",
  },
  {
    number: "03",
    title: "ФОРМИРУЕМ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ",
    text: "На данном этапе мы с вами согласуем ценовое предложение, обговариваем сроки поставки и условия оплаты.",
  },
  {
    number: "06",
    title: "ВЫ ПОЛУЧАЕТЕ ТОВАР",
    text: "Поставляем вам товар в надлежащей упаковке в сопровождении оригиналов всех необходимых документов либо вы забираете его самовывозом.",
  },
  {
    number: "05",
    title: "МЫ ВЫПОЛНЯЕМ ЗАКАЗ",
    text: "Товар поступает на склад в Москву или Санкт-Петербург, где мы сверяем правильность поставки и начинаем сборку.",
  },

  {
    number: "04",
    title: "ПРОВОДИМ ОПЛАТУ",
    text: "Далее, после получения авансового платежа, мы размещаем заказ.",
  },
];

const schemesContainer = document.getElementById("schemes-container");
const schemesTemplate = document.getElementById("schemes-template");

function createCard(data) {
  const cardClone = schemesTemplate.content.cloneNode(true);

  const number = cardClone.querySelector(".scheme-number");
  const title = cardClone.querySelector(".scheme-title");
  const text = cardClone.querySelector(".scheme-text");

  number.textContent = data.number;
  title.textContent = data.title;
  text.textContent = data.text;

  schemesContainer.appendChild(cardClone);
}

schemesData.forEach(createCard);
