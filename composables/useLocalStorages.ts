// Это файл для хранения локальных данных. Своя Pinia

// Открытие / Скрытие меню
export const useIsOpenMenu = () => useState<boolean>('isOpenMenu', () => false);

// Закрытие модального окна
export const useIsCloseModal = () => useState<boolean>('isCloseModal', () => false);

// Цвет темы
export const useTheme = () => useState<'light' | 'dark'>('theme', () => 'light');

// Для показа сообщения (пример при копировании почты)
export const useMessage = () => useState<string | null>('message', () => null);
