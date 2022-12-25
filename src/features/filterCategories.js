import { Categories } from "../config/Categories"

export const filterCategoriesName = (query) => {
    const sort = Categories.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    const result = sort.filter(category => category.toLowerCase().includes(query))
    return result[0] ? result[0] : 'All Categories'
}