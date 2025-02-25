export interface ActiveMemory {
    utilities: Record<string, unknown>;
}

export interface StorageMemory {
    utilities: Record<string, unknown>;
    data: unknown[];
}

export interface Memory {
    active: ActiveMemory;
    storage: StorageMemory;
}

export interface DeckData {
    display_name: string;
    deck_rating: number;
    hardening: number;
    active_memory: number;
    storage_memory: number;
    io_speed: number;
    response_increase: number;
    cost: number;
    source: string;
    memory: Memory;
}

export type DeckCollection = Record<string, DeckData>;