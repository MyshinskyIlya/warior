export interface CharacterData {
    ownerId?: string;
    name: string;
    characterClass?: "warrior" | "mage" | "rogue" | "" | string;
    level?: number;
    strength?: number;
    intelligence?: number;
    agility?: number;
    endurance?: number;
    spirit?: number;
}
