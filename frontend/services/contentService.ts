import {
  Content,
  DashboardSummary,
  PaginatedResponse,
  User as UserType,
} from "../types";
import API from "./api";

export const contentService = {
  getContents: async (page = 1, limit = 10, status?: string) => {
    let url = `/content?page=${page}&limit=${limit}`;
    if (status && status !== "ALL") {
      url += `&status=${status}`;
    }
    const { data } = await API.get<PaginatedResponse<Content>>(url);
    return data;
  },
  getContentById: async (id: string) => {
    const { data } = await API.get<Content>(`/content/${id}`);
    return data;
  },
  createContent: async (payload: { title: string; description: string }) => {
    const { data } = await API.post<Content>("/content", payload);
    return data;
  },
  updateContent: async (
    id: string,
    payload: { title?: string; description?: string },
  ) => {
    const { data } = await API.put<Content>(`/content/${id}`, payload);
    return data;
  },
  submitContent: async (id: string) => {
    const { data } = await API.post<Content>(`/content/${id}/submit`);
    return data;
  },
  approveContent: async (id: string, comment?: string) => {
    const { data } = await API.post<Content>(`/content/${id}/approve`, {
      comment,
    });
    return data;
  },
  rejectContent: async (id: string, comment: string) => {
    const { data } = await API.post<Content>(`/content/${id}/reject`, {
      comment,
    });
    return data;
  },
  publishContent: async (id: string) => {
    const { data } = await API.post<Content>(`/content/${id}/publish`);
    return data;
  },
  unpublishContent: async (id: string) => {
    const { data } = await API.post<Content>(`/content/${id}/unpublish`);
    return data;
  },
  getDashboardSummary: async () => {
    const { data } = await API.get<DashboardSummary>("/dashboard/summary");
    return data;
  },
};

export const userService = {
  getUsers: async (page = 1, limit = 10) => {
    const { data } = await API.get<PaginatedResponse<UserType>>(
      `/users?page=${page}&limit=${limit}`,
    );
    return data;
  },
  createUser: async (payload: {
    username: string;
    password?: string;
    role: string;
  }) => {
    const { data } = await API.post("/users", payload);
    return data;
  },
  deleteUser: async (id: string) => {
    const { data } = await API.delete(`/users/${id}`);
    return data;
  },
};
