// Это файл для хранения локальных данных. Своя Pinia

// Открытие / Скрытие меню
export const useIsOpenMenu = () => useState<boolean>('isOpenMenu', () => false);

// Закрытие модального окна
export const useIsCloseModal = () => useState<boolean>('isCloseModal', () => false);
