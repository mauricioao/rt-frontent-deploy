import useStore from "../../../store/store"

const baseUrl = "https://uploadsystem.onrender.com"

export async function login({ email, password }) {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })

        const data = await response.json();
        const res = await data
        return res
    } catch (error) {
        console.error(error)
        return error
    }
}

export const logout = async () => {
    return {
        ok: true,
        message: "Logout success"
    }
}