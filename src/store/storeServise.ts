import { WebStorage } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

type StoredValue = string | number | boolean | object | null;

class StorageService {
  private static instance: StorageService;
  private storage: WebStorage;

  private constructor() {
    this.storage = storage;
  }

  public static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  public getPersistConfig(key: string) {
    return {
      key,
      storage: this.storage,
    };
  }

  public async getItem<T = StoredValue>(key: string): Promise<T | null> {
    const item = await this.storage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  public async setItem(key: string, value: StoredValue): Promise<void> {
    const serializedValue = JSON.stringify(value);
    return this.storage.setItem(key, serializedValue);
  }

  public async removeItem(key: string): Promise<void> {
    return this.storage.removeItem(key);
  }
}

export default StorageService.getInstance();