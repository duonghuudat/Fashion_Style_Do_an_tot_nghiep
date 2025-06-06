import axios from "axios"


export const axiosJWT = axios.create()

export const LoginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data);
    return res.data
}

export const SignUpUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
    return res.data
}

export const getDetailsUser = async (id, access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`
        }
    });
    return res.data
}


export const getAllUser = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/getAll`, {
        headers: {
            token: `Bearer ${access_token}`
        }
    });
    return res.data
}

export const refreshToken = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
        withCredentials: true //tu dong lay cookie va truyen xuong be
    });
    return res.data
}


export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`)
    return res.data
}

export const updateUser = async (id, data, access_token) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`
        }
    })
    return res.data
}

export const deleteUser = async (id, data, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/user/delete-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`
        }
    })
    return res.data
}

export const deleteManyUser = async (data, access_token) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/product/delete-user`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}