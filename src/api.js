import axios from "axios";

const request = axios.create({
  baseURL: " https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyD0we_kE81YrFBAc7cumPd9rgNDluhkBYk",
  },
});

export default request;
