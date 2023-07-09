export type LevelStatus = "locked" | "unlocked" | "completed";

export interface LevelItem {
  level: number;
  status: LevelStatus;
}
