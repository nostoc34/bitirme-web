import { gql } from "apollo-boost";

export default gql`
	mutation (
		$userName: String
		$fullName: String
		$about: String
		$isPrivate: Boolean
		$profilePhoto: Upload
	) {
		editProfile(
			userName: $userName
			fullName: $fullName
			about: $about
			isPrivate: $isPrivate
			profilePhoto: $profilePhoto
		) {
			message
			code
			data {
				id
				userName
				fullName
				email
				profilePhoto
				about
				type
				isPrivate
				isActive
				createdAt
			}
		}
	}
`;
