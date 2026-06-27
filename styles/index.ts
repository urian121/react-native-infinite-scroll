import { Dimensions, StyleSheet } from 'react-native';

const GAP = 8;
const PADDING = 16;
const COLUMNS = 2;
const IMAGE_SIZE =
  (Dimensions.get('window').width - PADDING * 2 - GAP * (COLUMNS - 1)) / COLUMNS;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
    color: '#333'
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  list: {
    padding: PADDING,
    paddingTop: 60,
  },
  row: {
    gap: GAP,
  },
  item: {
    width: IMAGE_SIZE,
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
