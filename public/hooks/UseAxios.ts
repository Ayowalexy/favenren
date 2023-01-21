import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
let token = "";
// console.log(typeof window, "window");
export const getToken = () => {
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token") || "{}";
  }
  return token;
};

const useAxios = async function apiRequest(
  request: AxiosRequestConfig
): Promise<AxiosResponse> {
  // console.log(getToken(), "window");

  const resp = await axios.request({
    ...request,
    headers: {
      ...request.headers,
      authorization: `Bearer ${getToken()}`,
      // mode: "cors",
    },
   
  });
  if (resp.status === 401) {
    console.log("clear");
    localStorage.clear();
  }
  return resp;
};
export default useAxios;
