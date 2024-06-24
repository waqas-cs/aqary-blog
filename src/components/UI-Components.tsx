import styled from "styled-components";

export const PostTitle = styled.h3`
  color: #333;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const HeaderAllPost = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

export const PostBody = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const PostContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const CommentsContainer = styled.div`
  margin-top: 20px;
`;

export const CommentItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  list-style-type: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CommentName = styled.h3`
  color: #333;
  font-size: 18px;
  margin: 10px 0px;
`;

export const CommentBody = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.4;
`;

export const CommentEmail = styled.p`
  color: #888;
  font-size: 12px;
  margin-top: 5px;
`;

export const PostList = styled.li`
  margin: 15px;
  padding: 15px;
  cursor: pointer;
  list-style-type: none;
  border-bottom: 1px solid gray;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: blue;
  }
`;

export const PostHeader = styled.h2`
  margin: 0 auto;
`;
