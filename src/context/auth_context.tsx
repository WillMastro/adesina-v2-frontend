/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, ReactNode, useEffect, useState } from "react";
import { makeRequest } from "../hook/useApi";
import { allVideosApi, allvlogsApi } from "../data/apis";

export const UserContext = createContext<any>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem('adesina_admin_token')
  const [allvlogs, setAllvlogs] = useState<any>(null);
  const [post, setPosts] = useState<any>(null);
  const [filteredvlogs, setFilteredvlogs] = useState<any>(null);
  const [filteredPosts, setFilteredPosts] = useState<any>(null);
  const [Params, setParams] = useState({
    page: 1,
    limit: 50,
    totalPages: 0,
    filter: {}
  });
  const [postParams, setPostParams] = useState({
    page: 1,
    limit: 50,
    totalPages: 0,
    filter: {}
  });


  const updateCustomerData = (data: any) => {
    setAllvlogs(data.vlogs || []);
    setFilteredvlogs(data.vlogs || []);
    setParams({
      ...Params,
      totalPages: data.totalPages || 0,
      limit: data.limit || 50
    })
  };

  const updatePostData = (data: any) => {
    setPosts(data.vlogs || []);
    setFilteredPosts(data.vlogs || []);
    setPostParams({
      ...Params,
      totalPages: data.totalPages || 0,
      limit: data.limit || 50
    })
  };

  const getAllvlogs = async (params: any) => {
    setAllvlogs(null);
      const res = await makeRequest("POST", allvlogsApi, params, null, token);
      if (res) {
        updateCustomerData(res?.data);
      }
  };

  const getAllVideos = async (params: any) => {
    setPosts(null);
    const res = await makeRequest("POST", allVideosApi, params, null, null);
    if (res) {
      updatePostData(res?.data);
    }
  };


  // useEffect(() => {
  //   getAllPosts(postParams)
  // }, [])



  return (
    <UserContext.Provider
      value={{
        getAllvlogs,
        allvlogs,
        setAllvlogs,
        filteredvlogs,
        setFilteredvlogs,
        Params,
        setParams,
        token,
        filteredPosts, setFilteredPosts,
        post, setPosts,
        getAllVideos,
        postParams, setPostParams,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
