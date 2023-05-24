import axios from "axios";

const options = {
  method: "GET",
  url: "https://leetcode.com/graphql",
  headers: {
    Cookie: "csrftoken=abc123; LEETCODE_SESSION=abc123;",
    "Content-Type": "application/json"
  },
  data: '{"query":"query {\n\tmatchedUser(username: "oneminch") {\n\t\tusername\n\t\tsubmitStats: submitStatsGlobal {\n\t\t\ttotalSubmissionNum {\n\t\t\t\tdifficulty\n\t\t\t\tsubmissions\n\t\t\t}\n\t\t}\n\t}\n}\n"}'
};

axios
  .request(options)
  .then(function (response) {
    // console.log(response.data);
    // console.log(response.data.matchedUser.submitStats.totalSubmissionNum);
  })
  .catch(function (error) {
    // console.error(error);
  });

export default defineEventHandler(async () => {
  try {
    const options = {
      method: "GET",
      url: "https://leetcode.com/api/submissions/",
      params: { offset: "0", limit: "20" },
      headers: {
        Cookie: "csrftoken=abc123; LEETCODE_SESSION=abc123;"
      }
    };

    const res = await axios.get(options.url, options);

    return res.data;
  } catch (error) {
    return error;
  }
});
