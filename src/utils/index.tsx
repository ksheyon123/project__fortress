function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export const rgbToHexConverter = (r: number, g: number, b: number) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const hexToRgbConverter = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16).toString(),
    g: parseInt(result[2], 16).toString(),
    b: parseInt(result[3], 16).toString()
  } : null;
}