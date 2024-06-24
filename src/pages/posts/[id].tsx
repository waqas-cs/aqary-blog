import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  PostTitle,
  Wrapper,
  PostContainer,
  PostBody,
  CommentsContainer,
  CommentItem,
  CommentName,
  CommentBody,
  CommentEmail,
} from "@/components/UI-Components";

export interface PostProps {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostPage = ({
  post,
  comments,
}: {
  post: PostProps;
  comments: Comment[];
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostBody>{post.body}</PostBody>
      </PostContainer>
      <CommentsContainer>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              <CommentName>{comment.name}</CommentName>
              <CommentBody>{comment.body}</CommentBody>
              <CommentEmail>Email: {comment.email}</CommentEmail>
            </CommentItem>
          ))}
        </ul>
      </CommentsContainer>
    </Wrapper>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.id !== "string") {
    return {
      notFound: true,
    };
  }
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: PostProps = await res.json();

  const commentsRes = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const comments: Comment[] = await commentsRes.json();

  return {
    props: {
      post,
      comments,
    },
  };
};

export default PostPage;
