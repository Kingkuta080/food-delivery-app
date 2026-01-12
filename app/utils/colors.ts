/**
 * Color palette for the food delivery app
 * Based on the design system styles
 */

export const colors = {
  // Yellow colors
  yellowBase: "#F5CB58", // Primary yellow
  yellow2: "#FFF9E6", // Light cream yellow
  yellow3: "#FFF2CC", // Light cream yellow
  // Orange colors
  orangeBase: "#E95322", // Primary orange
  orange2: "#FFE5D9", // Light peach orange

  // Font colors
  font: "#3E2723", // Dark brown for primary text
  font2: "#F5F5F5", // White for text on dark backgrounds

  // Additional utility colors
  background: "#FFFFFF",
  backgroundDark: "#F5F5F5",
} as const;

export type Colors = typeof colors;
