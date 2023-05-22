import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://192.168.1.6:3333', // to work in mobile devices, but it's broken in the browser, it must change axios baseURL to http:// to IPv4 address
  // to get the IPv4 address, run ipconfig in the terminal
})
