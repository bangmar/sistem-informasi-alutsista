import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api/", // Ganti dengan URL backend Anda
	headers: {
		"Content-Type": "application/json",
	},
});

// Interceptor untuk menangkap respons dan menyimpan token ke sessionStorage
api.interceptors.request.use(
	async (config) => {
		const token = sessionStorage.getItem("token-lautsista");

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default api;
