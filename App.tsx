import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { fetchPlayers } from "./api/players";
import { PlayerItem } from "./components/PlayerItem";
import { styles } from "./styles";
import type { Player } from "./types/player";

// Cantidad de jugadores que se muestran por cada carga al hacer scroll
const PAGE_SIZE = 6;

// Pantalla principal: carga la API y renderiza el grid con scroll infinito
export default function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Pide los jugadores a la API al montar el componente
  useEffect(() => {
    // Función interna que ejecuta la petición y actualiza el estado
    async function loadPlayers() {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch {
        setError("No se pudieron cargar los jugadores");
      } finally {
        setLoading(false);
      }
    }

    loadPlayers();
  }, []);

  // Agrega más jugadores a la lista cuando el usuario llega al final
  function loadMore() {
    setVisibleCount((count) => Math.min(count + PAGE_SIZE, players.length));
  }

  // Pantalla de carga mientras se espera la respuesta de la API
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <StatusBar style="auto" />
      </View>
    );
  }

  // Pantalla de error si la petición a la API falla
  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  // Solo muestra los jugadores visibles según el scroll infinito
  const visiblePlayers = players.slice(0, visibleCount);

  // Grid de 2 columnas con scroll infinito
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scroll infinite con React Native</Text>

      <FlatList
        data={visiblePlayers}
        keyExtractor={(item, index) => String(item.id ?? index)}
        renderItem={({ item }) => <PlayerItem {...item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
      <StatusBar style="auto" />
    </View>
  );
}
