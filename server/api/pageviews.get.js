import axios from "axios";

const { umamiApiToken, umamiWebsiteId } = useRuntimeConfig();

const axiosConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${umamiApiToken}`
  }
};

export default defineEventHandler(async (event) => {
  const { url } = getQuery(event);

  const startDate = 1683777600000;
  const endDate = Date.now();
  const apiUrl = `https://measure.minch.dev/api/websites/${umamiWebsiteId}/stats?startAt=${startDate}&endAt=${endDate}&url=${url}`;

  try {
    const response = await axios.get(apiUrl, axiosConfig);

    const data = response.data;

    return { pageviews: data.pageviews.value };
  } catch (error) {
    return { pageviews: 0 };
  }
});
