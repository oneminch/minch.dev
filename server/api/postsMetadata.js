import axios from "axios";
import Markdoc from "@markdoc/markdoc";
import yaml from "js-yaml";

const config = useRuntimeConfig();

const accessToken = config.githubApiKey;
const owner = "oneminch";
const repo = "garden";
const path = "/Posts/Published"; // specify the folder path here
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents${path}`;

const axiosConfig = {
  headers: {
    Accept: "application/json",
    Authorization: `token ${accessToken}`
  }
};

// const query = `
//   query getPosts {
//     repository(owner: "oneminch", name: "garden") {
//       object(expression: "HEAD:Posts/Published") {
//         ... on Tree {
//           entries {
//             name
//             object {
//               ... on Blob {
//                 text
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

const query = `
  query getPosts {
    repository(name: "${repo}", owner: "${owner}") {
      object(expression: "HEAD:Posts/Published") {
        ... on Tree {
          entries {
            name
          }
        }
      }
    }
  }
`;

const postsMetadata = {};

export default defineEventHandler(async () => {
  const response = await axios.post(
    "https://api.github.com/graphql",
    {
      operationName: "getPosts",
      query,
      variables: {}
    },
    { ...axiosConfig }
  );

  const {
    data: {
      repository: { object: list }
    }
  } = response.data;

  console.log(list);
  return list;

  // // mappings of a post's name to its download url
  // const postList = posts.map((post) => {
  //   return {
  //     title: post.name.split(".")[0],
  //     downloadUrl: post.download_url
  //   };
  // });

  // // get metadata/frontmatter for each post
  // postList.forEach(async (post) => {
  //   const { data: markdownString } = await axios.get(post.downloadUrl);

  //   const ast = Markdoc.parse(markdownString);
  //   const frontmatter = ast.attributes.frontmatter
  //     ? yaml.load(ast.attributes.frontmatter)
  //     : {};

  //   postsMetadata[post.title] = frontmatter;
  // });

  // return postsMetadata;
});
