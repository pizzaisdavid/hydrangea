
export interface Motor {
  start(): Promise<void>;
  stop(): Promise<void>;
}
