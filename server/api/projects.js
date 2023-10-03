import axios from "axios";

const { githubToken } = useRuntimeConfig();

const endpointUrl = "https://api.github.com/graphql";

const ghGraphqlQueryString = `
  query Projects {
    search(type: REPOSITORY, query: "user:oneminch topic:showcase", last: 50) {
      repos: edges {
        repo: node {
          ... on Repository {
            name
            description
            homepageUrl
            openGraphImageUrl
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            url
          }
        }
      }
    }
  }
`;

const ghGraphqlQuery = {
  operationName: "Projects",
  query: ghGraphqlQueryString,
  variables: {}
};

const axiosReqConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `bearer ${githubToken}`
  }
};

export default defineEventHandler(async () => {
  try {
    const response = await axios.post(
      endpointUrl,
      ghGraphqlQuery,
      axiosReqConfig
    );

    const projectsList = response.data.data.search.repos.map(
      (item) => item.repo
    );

    return projectsList;
  } catch (error) {
    console.error(error);
    return error;
  }
});
