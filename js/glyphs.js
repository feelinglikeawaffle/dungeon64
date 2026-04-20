class Glyph {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect;
  }
}

function applyGlyphs(player, glyphs) {
  glyphs.forEach(g => g.effect(player));
}
