export const filterData = (data: [], value: string, key: string = 'departament') => value === '' ? data : data.filter((i) => i[key] === value)
