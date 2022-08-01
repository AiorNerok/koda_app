export const searchData = (data: [], value: string, key: string | string[] = 'firstName') => {

    if (value === '') return data

    if (Array.isArray(key)) {

    } else {
        return data.filter(d => String(d[key]).toLowerCase().startsWith(value.toLowerCase()))
    }
}