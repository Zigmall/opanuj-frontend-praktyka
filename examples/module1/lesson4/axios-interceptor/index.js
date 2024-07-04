import axios from 'axios';

const requestTimeLogger = (config) => {
  config.metadata = { startTime: new Date() };
  return config;
};

const responseTimeReader = (response) => {
  const {
    config: { url, metadata },
  } = response;
  const elapsedTime = new Date() - metadata.startTime;
  console.log(`Request under ${url} took ${elapsedTime}ms`);
  return response;
};

axios.interceptors.request.use(requestTimeLogger);
axios.interceptors.response.use(responseTimeReader);

const {
  data: { articles },
} = await axios.get('localhost:3000/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
