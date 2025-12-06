// src/env.d.ts

/// <reference types="astro/client" />

declare class PagefindUI {
  constructor(opts: { element: string; showSubResults?: boolean });
}
