import { HeaderAllPost, PostList, Wrapper } from "@/components/UI-Components";
import Link from "next/link";

export interface PostProps {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function Home({ posts }: { posts: PostProps[] }) {
  return (
    <Wrapper>
      <div>
        <HeaderAllPost>All Posts</HeaderAllPost>
        <ul>
          {posts.map((post) => (
            <PostList key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Link>
            </PostList>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
