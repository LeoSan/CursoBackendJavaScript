import React, {useState, useContext, createContext} from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '../services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};



function useProvideAuth() {
  const [user, setUser] = useState(null);

  //Conectamos con el sercicio web de tercero
  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

      const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
      
      //Validamos y creamos nuestra cokies 
      if (access_token) {
        Cookie.set('token', access_token.access_token, { expires: 5 });
        
        //Creamos un encabezado para asignar token 
        axios.defaults.headers.Authorization = ` Bearer ${access_token.access_token}`;
        
        //Usamos el servicio para traer el perfil de datos 
        const { data: user } = await axios.get(endPoints.auth.profile);
        setUser(user);
        console.log("user->",user);
      }    
        

  };

  return {
    user,
    signIn,
  };
}
