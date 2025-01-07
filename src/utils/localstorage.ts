export const setStorageItem = <T>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
};

export const getStorageItem = <T>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key);
        if (!item) return null;

        return JSON.parse(item) as T;
    } catch (error) {
        console.error("Error reading from localStorage:", error);
        return null;
    }
};

export const removeStorageItem = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing from localStorage:", error);
    }
};
