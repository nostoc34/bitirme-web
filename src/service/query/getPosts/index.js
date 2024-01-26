import { gql } from "apollo-boost";

export default gql`
	query {
		getPosts {
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
                    postID
                    createdAt
                    userName
                    profilePhoto
                    comment
                    isDeleted
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
