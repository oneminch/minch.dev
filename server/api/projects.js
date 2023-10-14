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
    const { origin: reqUrl } = useRequestURL();

    const response = await axios.post(
      endpointUrl,
      ghGraphqlQuery,
      axiosReqConfig
    );

    const allProjects = response.data.data.search.repos.map((item) => {
      const projectName = item.repo.name.split("-").join(" ");

      return {
        name: projectName,
        description: item.repo.description,
        homepageUrl: item.repo.homepageUrl,
        openGraphImageUrl: item.repo.openGraphImageUrl,
        // each gh pages url to the format: reqUrl/r/repo-url
        url: item.repo.url,
        repositoryTopics: item.repo.repositoryTopics.nodes
          .reduce((acc, curr) => {
            if (curr.topic.name.localeCompare("showcase") !== 0) {
              acc.push(curr.topic.name);
            }
            return acc;
          }, [])
          .sort((a, b) => a.localeCompare(b))
      };
    });

    // Filter projects by tag & remove non-technical tags
    const unfeatured = allProjects.filter(
      (project) => project.repositoryTopics.indexOf("featured") === -1
    );

    const nonVisual = unfeatured.filter(
      (project) => project.repositoryTopics.indexOf("visual") === -1
    );

    const visual = unfeatured.filter(
      (project) => project.repositoryTopics.indexOf("visual") > -1
    );

    visual.forEach((project) => {
      const visualTopicIndex = project.repositoryTopics.indexOf("visual");
      project.repositoryTopics.splice(visualTopicIndex, 1);
    });

    const featured = allProjects
      .filter((project) => project.repositoryTopics.indexOf("featured") > -1)
      .slice(0, 4);

    featured.forEach((project) => {
      const featuredTopicIndex = project.repositoryTopics.indexOf("featured");
      project.repositoryTopics.splice(featuredTopicIndex, 1);
    });

    return {
      featured,
      visual,
      nonVisual
    };
  } catch (error) {
    console.error(error);
    return error;
  }
});
