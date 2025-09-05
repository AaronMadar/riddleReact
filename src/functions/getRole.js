export default function defineRole(obj) {
  const role = obj.data.data.role || obj.data.data[0].role;
  return role;
}
