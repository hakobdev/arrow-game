export const INTERVAL_TIME = 3000;

export interface ARROWS_MAP_INTERFACE {
  ArrowLeft: string;
  ArrowRight: string;
  ArrowUp: string;
  ArrowDown: string;
}

export const ARROWS_MAP: ARROWS_MAP_INTERFACE = {
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
};

export const ARROWS_MAP_ARRAY = Object.keys(ARROWS_MAP);

export const END_GAME_COUNT = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
};
