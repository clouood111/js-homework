
export function setBgColor( ele, colorA, colorB = '#000' ) {
  ele.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}