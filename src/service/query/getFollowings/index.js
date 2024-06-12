import { gql } from "apollo-boost";

export default gql`
	query {
		getFollowings {
			message
			code
			data {
				userID,
                userName,
                fullName,
                profilePhoto
			}
		}
	}
`;
