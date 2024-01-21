import { gql } from "apollo-boost";

export default gql`
	mutation ($postID: String!) {
		deletePost(postID: $postID) {
			message
			code
		}
	}
`;
