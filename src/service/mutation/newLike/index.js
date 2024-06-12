import { gql } from "apollo-boost";

export default gql`
	mutation (
		$postID: String!
	) {
		newLike(
			postID: $postID
		) {
			message
			code
			data {
				id
				userID
                postID
                createdAt
				userName
				profilePhoto
			}
		}
	}
`;
