import { Image, Text, View } from 'react-native';
import { styles } from '../styles';
import type { Player } from '../types/player';

// Muestra la foto del jugador y su nombre debajo
export function PlayerItem({ img_src, name }: Player) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: img_src }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
