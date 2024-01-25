import { gql } from "apollo-boost";

export default gql`
	query ($userName: String!) {
		getProfilePosts (userName: $userName) {
			message
			code
			data {
				id
				userID
                content
                image
                isDeleted
                createdAt
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
				likes
			}
		}
	}
`;
