import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const params = useParams();

  const data = useLazyLoadQuery(
    graphql`
      query SinglePostQuery($id: ID!) {
        post(id: $id) {
          id
          title
          body
        }
      }
    `,
    { id: atob(params.gid) }
  )

  console.log('data', data);

  console.log('params', ); // gid is base64 encoded to work with react router

  return (
    <div>
      <h1> A single post route </h1>
      <h3> {data?.post?.title} </h3>
      <p>
        {data?.post?.body}
      </p>
    </div>
  )
}
