
import { auth } from "../firebase";

export const getCurrentUser = () => {
  const user = auth.currentUser;

  if (user) {
    console.log("Current user:", user);
    return user;
  } else {
    // No user is signed in
    console.log("No user is currently signed in.");
    return null;
  }
};
