import { type AuthResponse } from "@/api/token.api";
import { Profile } from "@/types/profile.types";
import { type Role, type Wallet } from "@/types/user.types";
const storagePrefix = "__catos_app__";

class StorageFactory<T> {
  private readonly key: string;
  constructor(key: string) {
    this.key = key;
  }
  get() {
    try {
      const serializedData = window.localStorage.getItem(
        `${storagePrefix}${this.key}`
      );
      if (serializedData === null) {
        return undefined;
      }

      return JSON.parse(serializedData) as T;
    } catch (_) {
      console.log(_);
      return undefined;
    }
  }
  set(value: T): void {
    try {
      const serializedData = JSON.stringify(value);
      window.localStorage.setItem(
        `${storagePrefix}${this.key}`,
        serializedData
      );
    } catch (err) {
      console.warn(err);
    }
  }
  clear() {
    try {
      window.localStorage.removeItem(`${storagePrefix}${this.key}`);
    } catch (err) {
      console.warn(err);
    }
  }
}

export const authStorage = new StorageFactory<AuthResponse>("auth");
export const profileStorage = new StorageFactory<Profile>("profile")
export const roleStorage = new StorageFactory<Role>("role");
export const walletStorage = new StorageFactory<Wallet>("wallet");
