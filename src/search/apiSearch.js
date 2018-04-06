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

export const showPoint = async (query) => {
  try {
    const url = 'http://wsteste.devedp.com.br/Master/CidadeServico.svc/rest/BuscaPontos/';
    const configRequest = {
      method: 'POST',
      keepalive: true,
      body: {
        ...query,
      }
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
