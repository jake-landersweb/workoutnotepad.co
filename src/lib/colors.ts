/**
 * Lighten a hex color by reducing its saturation.
 * @param hex - The original hex color string (with or without a leading "#").
 * @param amount - A value between 0 and 1 indicating how much to lighten the color.
 * @returns The lightened hex color string.
 */
export function lightenHex(hex: string, amount: number): string {
    // Remove the hash if present
    hex = hex.replace(/^#/, "");

    // Parse r, g, b values
    let num = parseInt(hex, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;

    // Increase r, g, b each by amount toward 255
    r = Math.round(r + (255 - r) * amount);
    g = Math.round(g + (255 - g) * amount);
    b = Math.round(b + (255 - b) * amount);

    // Convert back to hex and pad with zeros if necessary
    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)}`;
}