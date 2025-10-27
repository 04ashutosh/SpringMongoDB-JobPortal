import axios from "axios";

const API_URL = "http://localhost:8080";  // Your Spring Boot backend

export const getAllPosts = () => axios.get(`${API_URL}/allPosts`);
export const searchPosts = (text) => axios.get(`${API_URL}/posts/${text}`);
export const addPost = (post) => axios.post(`${API_URL}/post`, post);
