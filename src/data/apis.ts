// const baseUrl = "http://localhost:4000/api/v1";
const baseUrl = "https://adesina-revemp-be.onrender.com/api/v1";
const adminloginApi = `${baseUrl}/admin/login`;
const userloginApi = `${baseUrl}/user/login`;
const usersignupApi = `${baseUrl}/user/signUp`;
const verifyOTPApi = `${baseUrl}/user/verify_otp`;
const resendOTPApi = `${baseUrl}/user/resendOTP`;
const roundtableApi = `${baseUrl}/user/join_round_table`;


const allVideosApi = `${baseUrl}/vlogs/videos`;
const addvlogApi = `${baseUrl}/vlogs/add`;
const allvlogsApi = `${baseUrl}/vlogs/all`;
const deletevlogApi = `${baseUrl}/vlogs/delete`;
const searchApi = `${baseUrl}/vlogs/search`;
const updateApi = `${baseUrl}/vlogs/update`;


export {
  adminloginApi,
  userloginApi,
  usersignupApi,
  verifyOTPApi,
  resendOTPApi,
  roundtableApi,
// all videos Api;
  addvlogApi,
  allvlogsApi,
  deletevlogApi,
  searchApi,
  updateApi,
  allVideosApi,
};
