/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MutableRefObject } from 'react';
import { notifyError } from '../utils/useutils';
import { useNavigate } from 'react-router-dom';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Params = Record<string, any> | null;
// type Callback<T = any> = (response: T) => void | null;
type Token = string | null;
type AbortControllerRef = MutableRefObject<AbortController | null>;


const logout =()=> {
  localStorage.removeItem('adesina_token');
  window.location.reload();
}

const makeRequest = async <T = any>(
    method: RequestMethod,
    api: string,
    params?: Params,
    cb?:any,
    token?: Token,
    abortController?: AbortControllerRef
  ): Promise<T | undefined> => {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const details: AxiosRequestConfig = {
      method,
      url:api,
      headers,
      data: params,
      signal: abortController?.current?.signal,
    };

    try {
      const response: AxiosResponse<T> = await axios(details);
      if (cb) {
        cb();
      }
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (cb) {cb()}
        if(error.message == 'Network Error'){
          notifyError("Could not connect to the Server. Could be your network. Check and try again")
        }
        const errorRes = error.response?.data;
        if (errorRes?.error === 'jwt expired') {
          logout()
          notifyError("session expired: please re-login");
        }
        if (errorRes?.error === 'page not found') {
          window.location.href = '/page-not-found'      
        }
        if (errorRes) {notifyError(errorRes.error)}
      } else {
        notifyError(`Unexpected error: ${error}`);
      }
      return undefined;
    }
  };

  export {
    makeRequest,
  };

