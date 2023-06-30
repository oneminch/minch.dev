import axios from "axios";

const config = useRuntimeConfig();

const { raindropTestToken, raindropCollectionId } = config;

const axiosConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${raindropTestToken}`
  }
};

const url = `https://api.raindrop.io/rest/v1/raindrops/${raindropCollectionId}`;

export default defineEventHandler(async () => {
  try {
    const response = await axios.get(url, axiosConfig);

    const picks = response.data.items.map((item) => {
      return {
        cover: item.cover || "https://fakeimg.pl/100",
        title: item.title,
        url: item.link
      };
      // date: item.created
    });

    return picks;
  } catch (error) {
    return error;
  }
});
