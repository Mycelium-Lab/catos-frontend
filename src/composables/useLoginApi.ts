import { login, type LoginCredentials, verify } from "@/api/token.api";
import { authStorage } from "@/utils/localStorage";
import { type Role } from "@/types/user.types";
import { roleStorage, profileStorage } from "@/utils/localStorage";
import { ref } from "vue";
import { Profile } from "@/types/profile.types";

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
    const setProfile = (profile: Profile) => {
      profileStorage.set(profile);
    };
   return verify({token})
   .then(res => {
    localStorage.setItem('role', JSON.stringify(res.data.role))
    setRole(res.data.role)
    setProfile({
      email: res.data.email ? res.data.email : '', 
      phone: res.data.phone ? res.data.phone : '', 
      name: res.data.passport.name ? res.data.passport.name : '',
      surname: res.data.passport.surname ? res.data.passport.surname : '',
      middlename: res.data.passport.middlename ? res.data.passport.middlename : ''
    })
  
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
