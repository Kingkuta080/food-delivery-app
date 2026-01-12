import { StyleSheet, TextStyle } from "react-native";
import { colors } from "./colors";

/**
 * Global text styles based on the design system
 */

export const textStyles = StyleSheet.create({
  // Screen Title: 28/Auto
  screenTitle: {
    fontSize: 28,
    // lineHeight: Auto (not set, uses default)
    fontWeight: "700" as TextStyle["fontWeight"],
    color: colors.font,
  },

  // Title: 24/26
  title: {
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "600" as TextStyle["fontWeight"],
    color: colors.font,
  },

  // Subtitle: 20/Auto
  subtitle: {
    fontSize: 20,
    // lineHeight: Auto (not set, uses default)
    fontWeight: "500" as TextStyle["fontWeight"],
    color: colors.font,
  },

  // Paragraph: 14/14
  paragraph: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "400" as TextStyle["fontWeight"],
    color: colors.font,
  },
});

/**
 * Global styles for common components
 */
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});

/**
 * Export colors for direct use
 */
export { colors };
