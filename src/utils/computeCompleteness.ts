/**
 * @function computeCompleteness
 * @description find completeness of the application
 * @param user
 */
export const computeCompleteness = (user: any) => {
  let result = 0
  if (user.email) {
    result += 10
  }
  if (user.fullName) {
    result += 10
  }
  if (user.country) {
    result += 10
  }
  if (user.phone) {
    result += 20
  }
  if (user.avatar) {
    result += 20
  }
  return result
}
