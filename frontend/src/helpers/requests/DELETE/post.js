import { easyFetch } from "../../fetch";

export const unLikePost = async (token, postId) => {
  const url = `http://localhost:3010/post/unlike/${postId}`;
  const response = await easyFetch(
    url,
    {
      authorization: token,
    },
    "DELETE"
  );
  const responseStatus = response.status;
  return responseStatus;
};

export const unSavePost = async (token, postId) => {
  const url = `http://localhost:3010/post/remove-saved/${postId}`;
  const response = await easyFetch(
    url,
    {
      authorization: token,
    },
    "DELETE"
  );
  const responseStatus = response.status;
  return responseStatus;
};
