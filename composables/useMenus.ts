export const useMenus = () => {
  const topMenu = [
    { title: 'Новости', link: '/news' },
    { title: 'Акции', link: '/stocks' },
    { title: 'Отзывы и благодарности', link: '/reviews' },
    { title: 'Партнёры', link: '/partners' },
    { title: 'Контакты', link: '/contacts' },
  ];

  const menu = [
    { title: 'О компании', link: '/about', blank: false },
    { title: 'Индивидуальный заказ', link: '/individual-order', blank: false },
    { title: 'Ремонт изделий', link: '/remont-izdeliy', blank: false },
    { title: 'Ломбард', link: 'https://lombardgran.ru', blank: true },
  ];

  //
  return {
    topMenu,
    menu,
  };
};
