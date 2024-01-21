import { gql } from "apollo-boost";

export default gql`
	mutation (
		$postID: String!
	) {
		newComment(
			postID: $postID
		) {
			message
			code
			data {
				id
				userID
                postID
                createdAt
			}
		}
	}
`;
