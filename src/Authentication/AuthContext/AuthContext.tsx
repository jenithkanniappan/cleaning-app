import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState, ReactNode } from 'react';
import * as Keychain from 'react-native-keychain';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import Login from '../../Login/Components/Login';


type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type navigationProps = {
  navigation: LoginScreenNavigationProp;
};


type UserData = {
  Token: string | null;
  text: string;
  Role:string ,
  login:  (tokens: LoginPayload, userData:UserData) => void;
  logout: () => void;
  isloding: boolean;
  id:number,
  role:string,
  userName: string
};
type LoginPayload = {
  accessToken: string;
  refreshToken: string;
};

// type userData ={
//   id:number,
//   role:string,
//   userName: string
// }
type Propss = {
  children: ReactNode;
 
};


export const AuthContext = createContext<UserData | null>(null);

export const AuthProvider = ({children} : Propss) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string |null>(null);
  const [role,setRole]= useState<string>('')
  
  const login = async(tokens: LoginPayload ,userData :UserData) => {
    console.log(userData,"User Data Role")
    console.log(tokens,"asdfasdfasdf")
    await Keychain.setGenericPassword('access', tokens.accessToken, { service: 'accessToken' });
    await Keychain.setGenericPassword('refresh', tokens.refreshToken, { service: 'refreshToken' });
     setUserToken(tokens.accessToken);
     setRole(userData.role)
    
     return "Token Set Successfully"
  };
  const logout = async() => {
     await Keychain.resetGenericPassword();
    setUserToken(null);
    setIsLoading(false);

  };
  const value: UserData  = {
    Token: userToken,
    isloding: isLoading,
    text: 'Welcome!',
    Role: role,
    login,
    logout,
   
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
