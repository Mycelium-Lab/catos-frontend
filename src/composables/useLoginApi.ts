import { login, LoginCredentials } from "@/api/auth.api";
import { authStorage } from "@/utils/localStorage";
import { ref } from "vue";

export const useLoginApi = () => {
  const isLoginLoading = ref(false);
  const userLoginCredentials = ref<LoginCredentials>({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    isLoginLoading.value = true;
    return login(userLoginCredentials.value)
      .then(res => {
        authStorage.set(res.data);
        return res.data;
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        isLoginLoading.value = false;
      });
  };
  return {
    userLoginCredentials,
    isLoginLoading,
    handleLogin,
  };
};
