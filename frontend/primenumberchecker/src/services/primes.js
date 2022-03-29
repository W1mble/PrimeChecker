import axios from 'axios'
const oneUrl = '/api/singleprime/'
const multipleNumsUrl = '/api/multiplenumbers/'

const getOne = async (number) => {
    const request = axios.get(`${oneUrl}${number}`)
    const response = await request
    return response.data
  }

  const getMultipleNums = async (numbers) => {
    const request = axios.get(`${multipleNumsUrl}${numbers}`)
    const response = await request
    return response.data
  }

const exportObject = {
    getOne,
    getMultipleNums
  }

  export default exportObject