export const useMenus = () => {
  const topMenu = [
    { title: 'Новости', link: '/news' },
    { title: 'Акции', link: '/stocks' },
    { title: 'Отзывы и благодарности', link: '/reviews' },
    { title: 'Партнёры', link: '/partners' },
    { title: 'Контакты', link: '/contacts' },
  ];

  const menu = [
    { title: 'О компании', link: '/about' },
    { title: 'Индивидуальный заказ', link: '/individual-order' },
    { title: 'Ремонт изделий', link: '/remont-izdeliy' },
    { title: 'Ломбард', link: '/lombard' },
  ];

  //
  return {
    topMenu,
    menu,
  };
};
