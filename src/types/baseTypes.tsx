export type Locale = 'ua' | 'en' | 'ru' | 'de' | 'nl';
export type Locales = Locale[];

export interface Car {
  _id: string; // від MongoDB
  condition: string;
  drive_unit: string;
  engine_capacity: string;
  fuel_type: string;
  gearbox: string;
  location: string;
  make: string;
  mileage?: number;
  model: string;
  photo_urls: string[];
  price: number;
  primary_photo_url: string;
  year?: number;
  createdAt: string;
  updatedAt: string;
  custom_id?: number; // якщо будеш додавати красивий ID
}

// export type Cars = Car[];
