import axios from "axios";
const accessKey = "fe_pcHGdUTZOdpcatkxEC_fH2bN2MT-GSaKSaQSsvOY";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const getPicturesApi = async (searchQuery, page) => {
  const { data } = await axios.get("?", {
    params: {
      client_id: accessKey,
      query: searchQuery,
      per_page: 12,
      page,
      
    },
  });
  return data.results;
};
