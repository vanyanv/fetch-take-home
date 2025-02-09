'use client';
import { createContext, useState } from 'react';
import { Dog, FavoritesContextType } from '../types';

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Dog[]>([]);

  //adding favorites
  const addFavorite = (item: Dog) => {
    setFavorites((prev) => {
      if (!prev.some((fav) => fav.id === item.id)) {
        return [...prev, { ...item, isFavorite: true }];
      }
      return prev;
    });
  };

  //removing from favorites
  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
