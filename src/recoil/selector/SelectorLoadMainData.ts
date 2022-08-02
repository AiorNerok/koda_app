import axios from 'axios';
import { selector } from 'recoil';


const url = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';
const SelectorLoadMainData = selector({
  key: "SelectorLoadMainData",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
});

export { SelectorLoadMainData }