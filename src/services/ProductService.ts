import api from "../api/axios";

export const ProductServices = {
    async getProducts() {
        const res = await api.get('/products/');
        return res.data;
    },
    async getProductById(id: number) {
        const res = await api.get(`/products/${id}/`);
        return res.data;
    },
    async createProduct(data: any) {
        const res = await api.post('/products/', data);
        return res.data;
    },
    async updateProduct(id: number, data: any) {
        const res = await api.put(`/products/${id}/`, data);
        return res.data;
    },
    async deleteProduct(id: number) {
        const res = await api.delete(`/products/${id}/`);
        return res.data;
    },
};