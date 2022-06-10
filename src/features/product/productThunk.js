import axios from 'axios'
import { products_url } from '../../utils/constants'

export const getAllProductThunk = async (_, thunkAPI) => {
  try {
    const response = await axios.get(products_url)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
