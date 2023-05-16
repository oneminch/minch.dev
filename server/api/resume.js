import axios from "axios";

const axiosConfig = {
  headers: {
    Accept: "application/json"
  }
};

const resumeApiUrl =
  "https://rxresu.me/api/printer/oneminch/swe-resume-current?lastUpdated=1682141847";

// fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(urla)}`)
//   .then((response) => {
//     if (response.ok) return response.json();
//     throw new Error("Network response was not ok.");
//   })
//   .then((data) => console.log(data.contents));

export default defineEventHandler(async () => {
  try {
    const response = await axios.get(resumeApiUrl, axiosConfig);

    console.log(response);

    return response.json();
  } catch (error) {
    return error;
  }
});
