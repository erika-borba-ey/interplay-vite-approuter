// Import React e useEffect, useState hooks se ainda não foi feito
import React, { useEffect, useState } from 'react';

// Função componente React
const UserInfo = () => {
  // State para armazenar as informações do usuário
  const [userInfo, setUserInfo] = useState(null);
  
  // Função para buscar informações do usuário
  const fetchUserInfoUAA = async () => {
    try {
      const response = await fetch('/user-api/currentUser');
      
      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }
      
      const data = await response.json();
      setUserInfo(data);
    
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
    }
  };

  // useEffect para chamar fetchUserInfoUAA quando o componente é montado.
  useEffect(() => {
    fetchUserInfoUAA();
  }, []); // Array de dependências vazio significa que isso só é executado uma vez (como componentDidMount)

  // Renderização condicional com base nas informações do usuário
  if (!userInfo) {
    return <div>Carregando informações do usuário...</div>;
  }

  return (
    <div>
      <h1>Informações do Usuário</h1>
      <p>Nombre: {userInfo.firstname}</p>
      <p>Apellido: {userInfo.lastname}</p>
      <p>Email: {userInfo.email}</p>
      <p>User: {userInfo.name}</p>
      {/* Renderize outras informações conforme necessário */}
    </div>
  );
};

export default UserInfo;