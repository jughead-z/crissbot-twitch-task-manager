import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ApiResponse } from "../types";

export class ApiService {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        console.log(
          `🌐 API Request: ${config.method?.toUpperCase()} ${config.url}`
        );
        return config;
      },
      (error) => {
        console.error("❌ API Request Error:", error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        console.log(
          `✅ API Response: ${response.status} ${response.config.url}`
        );
        return response;
      },
      (error) => {
        console.error(
          "❌ API Response Error:",
          error.response?.status,
          error.response?.data
        );
        return Promise.reject(error);
      }
    );
  }

  async get<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.client.get(
        endpoint
      );
      return response.data;
    } catch (error) {
      console.error(`❌ GET ${endpoint} failed:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async post<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.client.post(
        endpoint,
        data
      );
      return response.data;
    } catch (error) {
      console.error(`❌ POST ${endpoint} failed:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async put<T = any>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.client.put(
        endpoint,
        data
      );
      return response.data;
    } catch (error) {
      console.error(`❌ PUT ${endpoint} failed:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async delete<T = any>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.client.delete(
        endpoint
      );
      return response.data;
    } catch (error) {
      console.error(`❌ DELETE ${endpoint} failed:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async deleteWithBody<T = any>(
    endpoint: string,
    data?: any
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<ApiResponse<T>> = await this.client.delete(
        endpoint,
        { data }
      );
      return response.data;
    } catch (error) {
      console.error(`❌ DELETE ${endpoint} failed:`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.get("/tasks");
      return response.success;
    } catch (error) {
      console.error("❌ Health check failed:", error);
      return false;
    }
  }
}
