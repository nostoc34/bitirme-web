import { gql } from "apollo-boost";

export default gql`
	mutation (
		$comment: String!
		$postID: String!
	) {
		newComment(
			comment: $comment
			postID: $postID
		) {
			message
			code
			data {
				id
				userID
                userName
                profilePhoto
                postID
                comment
                isDeleted
                createdAt
			}
		}
	}
`;
