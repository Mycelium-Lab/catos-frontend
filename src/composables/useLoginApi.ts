import { login, LoginCredentials, verify } from "@/api/token.api";
import { authStorage } from "@/utils/localStorage";
import { Role } from "@/types/user.types";
import { roleStorage } from "@/utils/localStorage";
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
        return {
          email: '',
          refresh: '',
          access: ''
        }
      })
      .finally(() => {
        isLoginLoading.value = false;
        return {
          email: '',
          refresh: '',
          access: ''
        }
      });
  };
  const handleVerify = async (token: string) => {
    const setRole = (role: Role) => {
      roleStorage.set(role);
    };
   return verify({token})
   .then(res => {
    localStorage.setItem('role', JSON.stringify(res.data.role))
    setRole(res.data.role)
    return {
      role: res.data.role
     }
   })
   .catch(e => {
    console.error(e);
  })
  }
  return {
    userLoginCredentials,
    isLoginLoading,
    handleLogin,
    handleVerify
  };
};
