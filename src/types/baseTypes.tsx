export type Locale = 'ua' | 'en' | 'ru' | 'de' | 'nl';
export type Locales = Locale[];

export interface Car {
  id: string; // Унікальний ідентифікатор, згенерований MongoDB
  condition: string; // Стан авто (наприклад, "нове", "вживане", "після ДТП" тощо)
  drive_unit: string; // Тип приводу (наприклад, "передній", "задній", "повний")
  engine_capacity: string; // Обʼєм двигуна
  fuel_type: string; // Тип пального (наприклад, "бензин", "дизель", "електро", "гібрид")
  gearbox: string; // Тип коробки передач (наприклад, "механіка", "автомат", "робот")
  location: string; // Місцезнаходження авто (наприклад, "Київ", "Львів", "Дніпро")
  make: string; // Бренд або марка авто (наприклад, "Toyota", "BMW", "Ford")
  mileage?: number; // Пробіг у кілометрах (може бути відсутній, якщо не вказаний)
  model: string; // Модель авто (наприклад, "Camry", "X5", "Focus")
  photo_urls: string[]; // Масив URL-адрес фотографій авто
  price: number; // Ціна авто у вказаній валюті (зазвичай у гривнях)
  primary_photo_url: string; // Головна фотографія авто (відображається на картці чи в списку)
  year?: number; // Рік випуску авто (може бути відсутній, якщо не вказаний)
  createdAt: string; // Дата та час створення запису (ISO-формат)
  updatedAt: string; // Дата та час останнього оновлення запису (ISO-формат)
  custom_id?: number; // Додатковий ID (можливо для внутрішнього використання або імпорту з іншої бази)
}

export type Filters = {
  yearRanges: string[];
  mileageRanges: string[];
  brand?: string;
  transmission?: string;
  fuelType?: string;
};
