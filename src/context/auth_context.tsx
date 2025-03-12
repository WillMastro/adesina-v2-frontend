/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, ReactNode, useEffect, useState } from "react";
import { makeRequest } from "../hook/useApi";
import { allBlogsApi, allPosts } from "../data/apis";

export const UserContext = createContext<any>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem('willmaestroit_blog_manager_token')
  const [allBlogs, setAllBlogs] = useState<any>(null);
  const [filteredBlogs, setFilteredBlogs] = useState<any>(null);
  const [filteredPosts, setFilteredPosts] = useState<any>(null);
  const [post, setPosts] = useState<any>(null);
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
    setAllBlogs(data.blogs || []);
    setFilteredBlogs(data.blogs || []);
    setParams({
      ...Params,
      totalPages: data.totalPages || 0,
      limit: data.limit || 50
    })
  };

  const updatePostData = (data: any) => {
    setPosts(data.blogs || []);
    setFilteredPosts(data.blogs || []);
    setPostParams({
      ...Params,
      totalPages: data.totalPages || 0,
      limit: data.limit || 50
    })
  };

  const getAllBlogs = async (params: any) => {
    setAllBlogs(null);
    const localData = localStorage.getItem("blog_response");
    if (localData) {
      const res = JSON.parse(localData);
      updateCustomerData(res?.data);
    } else {
      const res = await makeRequest("POST", allBlogsApi, params, null, token);
      if (res) {
        updateCustomerData(res?.data);
        localStorage.setItem('blog_response', JSON.stringify(res))
      }
    }
  };

  const getAllPosts = async (params: any) => {
    setPosts(null);
    const res = await makeRequest("POST", allPosts, params, null, null);
    if (res) {
      updatePostData(res?.data);
      // localStorage.setItem('blog_response', JSON.stringify(res))
    }
  };


  useEffect(() => {
    getAllPosts(postParams)
  }, [])


  const ibadan = [
    { img: "/img4.jpg" },
    { img: "/img5.jpg" },
    { img: "/city.svg" },
  ]

  const abuja = [
    { img: "/img6.jpg" },
    { img: "/abuja.svg" },
    { img: "/img4.jpg" },
    { img: "/img5.jpg" },
  ]



  return (
    <UserContext.Provider
      value={{
        getAllBlogs,
        allBlogs,
        setAllBlogs,
        filteredBlogs,
        setFilteredBlogs,
        Params,
        setParams,
        token,
        filteredPosts, setFilteredPosts,
        post, setPosts,
        getAllPosts,
        postParams, setPostParams,
        ibadan,
        abuja
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
