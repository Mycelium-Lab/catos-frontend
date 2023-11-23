import { jwtDecode } from "jwt-decode";
import { authStorage } from "@/utils/localStorage";

export const getUserId = (): number | undefined => {
  const authData = authStorage.get();
  if (authData !== undefined) {
    const { user_id } = jwtDecode(authData.access);
    return user_id;
  }
};
export const isExpired = (token: string) => {
  try {
    const { exp: toDate } = jwtDecode(token);
    const now = Date.now();
    if (!toDate) return true;
    return now > toDate * 1000;
  } catch (e) {
    console.error(e);
    return true;
  }
};
