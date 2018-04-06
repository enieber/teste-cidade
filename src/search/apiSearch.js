export const getAllState = async () => {
  try {
    const url = 'https://state-list-qoiofyaaar.now.sh/';
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
      error: 'Não foi possivel carregar os estados',
    }
  }  
}

