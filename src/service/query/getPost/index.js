import { gql } from "apollo-boost";

export default gql`
	query ($postID: String!) {
		getPost (postID: $postID) {
			message
			code
			data {
				id
				userID
				content
				image
				isDeleted
				createdAt
				userName
				profilePhoto
				comments {
					id
					userID
					userName
					profilePhoto
					postID
					comment
					isDeleted
					createdAt
				}
				likes {
					id
					userID
					postID
					createdAt
					userName
					profilePhoto
				}
				commentCount
				likeCount
			}
		}
	}
`;
