import http from "@/utils/http";

export default {
  // 用户相关接口
  user: {
    login: (data) => http.post("/user/login", data),
    getProfile: () => http.get("/user/profile"),
  },
  // 其他模块...
};
