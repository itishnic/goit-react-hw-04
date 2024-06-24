import axios from "axios";
const accessKey = "fe_pcHGdUTZOdpcatkxEC_fH2bN2MT-GSaKSaQSsvOY";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const getPicturesApi = async () => {
  const { data } = await axios.get("https://api.unsplash.com/photos", {
    params: {
      client_id: accessKey,
      query: "nature",
    },
  });
  return data;
};
