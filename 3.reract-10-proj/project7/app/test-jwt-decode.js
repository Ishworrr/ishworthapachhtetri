import jwt_decode from "jwt-decode";

const token = "your-jwt-token-here";
try {
  const decoded = jwt_decode(token);
  console.log("Decoded Token:", decoded);
} catch (error) {
  console.error("Error decoding token:", error);
}
