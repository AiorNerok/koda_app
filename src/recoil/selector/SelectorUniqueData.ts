import { selector } from 'recoil'
import { AtomUniqueData } from '../atoms';

export const SelectorUniqueData = selector({
    key: 'SelectotUniqueData',
    get: ({ get }) => {
        return get(AtomUniqueData)
    }
})