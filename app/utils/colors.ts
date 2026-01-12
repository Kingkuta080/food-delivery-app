/**
 * Color palette for the food delivery app
 * Based on the design system styles
 */

export const colors = {
  // Yellow colors
  yellowBase: "#FFC107", // Primary yellow
  yellow2: "#FFF9E6", // Light cream yellow

  // Orange colors
  orangeBase: "#FF6B35", // Primary orange
  orange2: "#FFE5D9", // Light peach orange

  // Font colors
  font: "#3E2723", // Dark brown for primary text
  font2: "#FFFFFF", // White for text on dark backgrounds

  // Additional utility colors
  background: "#FFFFFF",
  backgroundDark: "#F5F5F5",
} as const;

export type Colors = typeof colors;
