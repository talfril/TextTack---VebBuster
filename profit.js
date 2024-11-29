const cardsData = [
    {
      image: "../assets/svg/profits/profit1.svg",
      title: "Качественная продукция",
      text: "Все наши товары сертифицированы и имеют сопроводительную документацию."
    },
    {
      image: "../assets/svg/profits/profit2.svg",
      title: "Индивидуальный подход",
      text: "Возможность изготовления компонентов специально для вас на заводах-изготовителя."
    },
    {
      image: "../assets/svg/profits/profit3.svg",
      title: "Бесплатная доставка",
      text: "При наличии товара на складе и заказе от 10 000 рублей, доставим бесплатно по Москве и СПБ в течение 2х часов."
    },
    {
        image: "../assets/svg/profits/profit4.svg",
        title: "Подбираем аналоги",
        text: "Поможем подобрать аналоги популярных европейских брендов в условиях санкций."
      },
      {
        image: "../assets/svg/profits/profit5.svg",
        title: "Резервный запас компонентов",
        text: "Хранение товара на наших складах для постоянных клиентов."
      },
      {
        image: "../assets/svg/profits/profit6.svg",
        title: "Гибкая система оплаты",
        text: "Отсрочка платежей для постоянных клиентов."
      },
      
  ];

  const cardContainer = document.getElementById('card-container');
  const cardTemplate = document.getElementById('card-template');

  function createCard(data) {
    const cardClone = cardTemplate.content.cloneNode(true);

    const img = cardClone.querySelector('.card-img');
    const title = cardClone.querySelector('.card-title');
    const text = cardClone.querySelector('.card-text');

    img.src = data.image;
    title.textContent = data.title;
    text.textContent = data.text;

    cardContainer.appendChild(cardClone);
  }

  cardsData.forEach(createCard);