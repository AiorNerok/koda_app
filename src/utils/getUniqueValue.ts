// @ts-ignore
export const GetUniqueValues = (data: [], key: string = 'department'): [] => [...new Set(data.map(i => i[key]))]