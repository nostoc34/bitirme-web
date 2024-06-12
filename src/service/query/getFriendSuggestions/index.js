import { gql } from "apollo-boost";

export default gql`
	query {
		getFriendSuggestions {
			message
			code
			data {
				id,
                userName,
                fullName,
                email,
                profilePhoto,
                about,
                type,
                isPrivate,
                isActive,
                createdAt
			}
		}
	}
`;
