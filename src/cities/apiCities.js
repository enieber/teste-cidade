const getAllCity = async () => {
  try {
    const url = 'https://server-city-point-zakyitbfbb.now.sh/';
    const configRequest = {
      method: 'GET',
      keepalive: true,
    };
    const response = await fetch(url, configRequest);    
    const jsonResponse = await response.json();
    return {
      data: jsonResponse.data,
      error: '',
    }

  } catch (err) {
    return {
      data: [],
      error: 'Não foi possivel carregar as cidades',
    }
  }  
}

export default getAllCity;
