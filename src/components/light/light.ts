
export interface Light {
  toggle(): Promise<void>;
  on(): Promise<void>;
  off(): Promise<void>;
  update(value: boolean): Promise<void>;
}
