import envData from '../../.env.json'

const data = {
  API_KEY: ''
};

export function getData() {
  return data
}

export function loadEnv() {
  Object.assign(data, envData)
}
