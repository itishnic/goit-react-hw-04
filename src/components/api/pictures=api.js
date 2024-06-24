import axios from "axios";
const accessKey = "fe_pcHGdUTZOdpcatkxEC_fH2bN2MT-GSaKSaQSsvOY";

export const getPicturesApi = async () => {
  const { data } = await axios.get("https://api.unsplash.com/api/v1/photos/random", {
    params: {
      client_id: accessKey,
    },
  });
  return data;
};
