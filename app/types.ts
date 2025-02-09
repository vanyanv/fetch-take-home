export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
  isFavorite?: boolean;
}

export interface Location {
  zip_code: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  county: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface Match {
  match: string;
}

export type Breed = string;

export interface FavoritesContextType {
  favorites: Dog[];
  addFavorite: (item: Dog) => void;
  removeFavorite: (id: string) => void;
}
