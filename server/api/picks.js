import axios from "axios";

const config = useRuntimeConfig();

const { raindropTestApiKey } = config;

const axiosConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${raindropTestApiKey}`
  }
};

const url = "https://api.raindrop.io/rest/v1/raindrops/32242796";

export default defineEventHandler(async () => {
  try {
    const response = await axios.get(url, axiosConfig);

    const picks = response.data.items.map((item) => {
      return {
        cover: item.cover || "https://fakeimg.pl/100",
        title: item.title,
        link: item.link,
        date: item.created
      };
    });

    return picks;
  } catch (error) {
    return error;
  }
});
