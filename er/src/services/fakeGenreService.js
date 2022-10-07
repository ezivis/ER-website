export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Audio Interfaces" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Cables" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Gimbal" }
];

export function getGenres() {
  return genres.filter(g => g);
}
