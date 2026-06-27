import axios from 'axios';
import type { Player } from '../types/player';

// URL del endpoint de jugadores NBA
const API_URL = 'https://devsapihub.com/api-players';

// Cliente axios usando fetch nativo (compatible con React Native)
const api = axios.create({ adapter: 'fetch' });

// Obtiene la lista completa de jugadores desde la API
export async function fetchPlayers(): Promise<Player[]> {
  const { data } = await api.get<Player[]>(API_URL);
  return data;
}
