import { gql } from "apollo-boost";

export default gql`
	mutation (
		$content: String
        $image: Upload!
	) {
		newPost(
			content: $content
            image: $image
		) {
			message
			code
			data {
				id
				userID
                content
                image
                isDeleted
                createdAt
			}
		}
	}
`;
