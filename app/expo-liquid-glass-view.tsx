import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CornerStyle, ExpoLiquidGlassView, LiquidGlassType } from "expo-liquid-glass-view";
import { StyleSheet, Text, View } from 'react-native';

export default function ExpoLiquidGlassViewPage() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Expo Liquid Glass View
        </ThemedText>
        <ThemedText style={styles.description}>
          A beautiful liquid glass effect component that creates stunning visual effects with customizable corner styles, tints, and transparency.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.showcase}>
        <ExpoLiquidGlassView
          cornerStyle={CornerStyle.Circular}
          type={LiquidGlassType.Regular}
          tint="#E84B3C"
          cornerRadius={24}
          style={styles.liquidGlass}
        >
          <View style={styles.textContainer}>
            <Text style={styles.liquidGlassText}>
              Liquid Glass ✨
            </Text>
          </View>
        </ExpoLiquidGlassView>
      </ThemedView>


      <ThemedView style={styles.info}>
        <ThemedText type="subtitle" style={styles.infoTitle}>
          Features:
        </ThemedText>
        <ThemedText style={styles.feature}>
          • Customizable corner styles (Circular, Rounded)
        </ThemedText>
        <ThemedText style={styles.feature}>
          • Multiple glass types (Tint, Blur, etc.)
        </ThemedText>
        <ThemedText style={styles.feature}>
          • Adjustable corner radius
        </ThemedText>
        <ThemedText style={styles.feature}>
          • Custom tint colors
        </ThemedText>
        <ThemedText style={styles.feature}>
          • Cross-platform support
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 22,
  },
  showcase: {
    alignItems: 'center',
    marginBottom: 50,
  },
  liquidGlass: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  liquidGlassText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: '600',
  },
  info: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoTitle: {
    marginBottom: 16,
  },
  feature: {
    marginBottom: 8,
    opacity: 0.8,
  },
});