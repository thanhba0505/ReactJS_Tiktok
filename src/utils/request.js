import axios from 'axios';

const req = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (path, options = {}) => {
  const res = await req.get(path, options);
  return res.data;
};

export default req;
