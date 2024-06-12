import { gql } from "apollo-boost";

export default gql`
	mutation (
		$oldPassword: String!
		$newPassword: String!
		$newPasswordRe: String!
	) {
		changePassword(
			oldPassword: $oldPassword
			newPassword: $newPassword
			newPasswordRe: $newPasswordRe
		) {
			message
			code
		}
	}
`;
