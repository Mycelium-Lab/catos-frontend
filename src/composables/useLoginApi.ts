import { login, type LoginCredentials, verify, LoginCredentialsByPhone, loginByPhone } from "@/api/token.api";
import { authStorage, walletStorage } from "@/utils/localStorage";
import { type Role } from "@/types/user.types";
import { roleStorage, profileStorage } from "@/utils/localStorage";
import { ref } from "vue";
import { Profile } from "@/types/profile.types";
import { useErrorDataStore } from "@/stores/errorData";

export const useLoginApi = () => {
  const isLoginLoading = ref(false);
  const errorData = useErrorDataStore()
  const userLoginCredentials = ref<LoginCredentials>({
    email: "",
    password: "",
  });
  const userLoginCredentialsByPhone = ref<LoginCredentialsByPhone>({
    phone: '',
    password: ''
  })
  const handleLogin = async () => {
    isLoginLoading.value = true;
    return login(userLoginCredentials.value)
      .then(res => {
        authStorage.set(res.data);
        return res.data;
      })
      .catch(e => {
        const {setErrorText} = errorData
        setErrorText(e.response.data.detail)
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

 const handleLoginByPhone = async  () => {
  isLoginLoading.value = true;
  return loginByPhone(userLoginCredentialsByPhone.value)
    .then(res => {
        authStorage.set(res.data);
        return res.data;
      })
    .catch(e => {
      const {setErrorText} = errorData
      setErrorText(e.response.data.detail)
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
  }


  const handleVerify = async (token: string) => {
    const setRole = (role: Role) => {
      roleStorage.set(role);
    };
    const setProfile = (profile: Profile) => {
      profileStorage.set(profile);
    };
    const setWallet = (address: string) => {
      walletStorage.set({address});
    }
   return verify({token})
   .then(res => {
    setRole(res.data.role)
    setProfile({
      email: res.data?.email ? res.data?.email : '', 
      phone: res.data?.phone ? res.data?.phone : '', 
      name: res.data?.passport?.name ? res.data?.passport?.name : '',
      surname: res.data?.passport?.surname ? res.data?.passport?.surname : '',
      middlename: res.data?.passport?.middlename ? res.data?.passport?.middlename : '',
      hasVerified: res.data?.wl_status === 'in'
    })
    setWallet(res.data?.address ? res.data?.address : '');
  
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
    handleVerify, 
    userLoginCredentialsByPhone,
    handleLoginByPhone
  };
};
