import axios from "axios";

const { raindropToken, raindropCollectionId } = useRuntimeConfig();

const axiosConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${raindropToken}`
  }
};

const PER_PAGE = 10;

export default defineEventHandler(async (event) => {
  const { page } = getQuery(event);

  const currentPage = parseInt(page) < 0 ? 0 : parseInt(page) - 1;

  const url = `https://api.raindrop.io/rest/v1/raindrops/${raindropCollectionId}?perpage=${PER_PAGE}&page=${currentPage}`;

  try {
    const response = await axios.get(url, axiosConfig);

    const totalCount = response.data.count;

    const bookmarks = response.data.items.map((item) => {
      return {
        cover: item.cover ?? "https://fakeimg.pl/100",
        title: item.title,
        url: item.link
      };
    });

    return { bookmarks, totalCount };
  } catch (error) {
    return error;
  }
});
