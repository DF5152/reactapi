import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID jzS12v5SswaK8CR2UiR9IKNr-QmvO_49eclNAplr7LQ',
      }
});