import { gql } from "apollo-boost";

export default gql`
	mutation ($email: String!, $password: String!) {
		changeEmail(email: $title, password: $thumbnailImage) {
			message
			code
		}
	}
`;
