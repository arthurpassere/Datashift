import { useState } from "react";

interface ApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const useApi = () => {
  const [response, setResponse] = useState<ApiResponse>({
    data: null,
    error: null,
    loading: false,
  });

  const makeRequest = async (endpoint: string, options: RequestInit = {}) => {
    setResponse({ data: null, error: null, loading: true });

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponse({ data, error: null, loading: false });
      return data;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      setResponse({ data: null, error: errorMessage, loading: false });
      throw error;
    }
  };

  const get = (endpoint: string) => makeRequest(endpoint, { method: "GET" });
  const post = (endpoint: string, body?: Record<string, unknown>) =>
    makeRequest(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });

  return {
    ...response,
    get,
    post,
    makeRequest,
  };
};

export const buildApiUrl = (endpoint: string) => `${API_URL}${endpoint}`;

export const API_ENDPOINTS = {
  CONVERT: "/api/convert",
  HEALTH: "/api/health",
} as const;
