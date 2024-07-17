import { $authHost,$host } from "./index";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createEvent = async (event) => {
    const {data} = await $authHost.post('api/events', event)
    return data
}

export const fetchEvent = async (categoryCategoryId, page, limit = 5) => {
    const {data} = await $host.get('api/events', {params: {
        categoryCategoryId, page, limit
    }})
    return data
}

export const fetchOneEvent = async (id) => {
    const {data} = await $host.get('api/events/' + id)
    return data
}
