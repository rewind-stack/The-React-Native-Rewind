import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

interface ListItem {
  id: string;
  title: string;
  description: string;
  route: string;
  icon: string;
}

const libraryList: ListItem[] = [
  {
    id: '1',
    title: 'Expo Liquid Glass View',
    description: 'Beautiful liquid glass effect component for React Native',
    route: '/expo-liquid-glass-view',
    icon: 'sparkles',
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }: { item: ListItem }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => router.push(item.route as any)}
      activeOpacity={0.7}
    >
      <ThemedView style={styles.itemContent}>
        <ThemedView style={styles.iconContainer}>
          <IconSymbol size={24} name={item.icon as any} color="#007AFF" />
        </ThemedView>
        <ThemedView style={styles.textContainer}>
          <ThemedText type="defaultSemiBold" style={styles.itemTitle}>
            {item.title}
          </ThemedText>
          <ThemedText style={styles.itemDescription}>
            {item.description}
          </ThemedText>
        </ThemedView>
        <IconSymbol size={16} name="chevron.right" color="#8E8E93" />
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          React Native Rewind
        </ThemedText>
        <ThemedText style={styles.headerSubtitle}>
          Explore amazing React Native libraries
        </ThemedText>
      </ThemedView>
      
      <FlatList
        data={libraryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  headerTitle: {
    marginBottom: 8,
  },
  headerSubtitle: {
    opacity: 0.7,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    opacity: 0.7,
  },
});