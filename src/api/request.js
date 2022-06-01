import axios from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create({
    baseURL: '',
    timeout: 1 * 60 * 1000,
})

instance.interceptors.request.use(
    (config) => {
        const token = 'Token'
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {
        const { data } = response
        if (data.code !== 200) {
            ElMessage({
                message: data.message || 'Error',
                type: 'error',
                duration: '1000',
            })
            return Promise.reject(new Error(data.message || 'Error'))
        }
        return data
    },
    (error) => {
        ElMessage({
            message: error.message || 'Error',
            type: 'error',
            duration: '2000',
        })
        return Promise.reject(error)
    }
)

export default instance
