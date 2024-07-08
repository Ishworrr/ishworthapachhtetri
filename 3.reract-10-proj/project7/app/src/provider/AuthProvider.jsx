// import { createContext, useEffect, useState } from "react";
// // import jwt_decode from "jwt-decode"; // Correct import for jwt-decode
// import * as jwt_decode from "jwt-decode";
// // import jwt_decode from "jwt-decode";
// import { useCookies } from "react-cookie";
// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

//   const login = (tokenStr) => {
//     if (tokenStr) {
//       setToken(tokenStr);
//       try {
//         const decodedToken = jwt_decode(tokenStr); // Decode the token correctly
//         const { exp } = decodedToken;

//         if (exp) {
//           setCookie("jwt", tokenStr, {
//             path: "/",
//             maxAge: exp,
//             // expires: exp,
//             sameSite: true,
//           });
//         }
//         console.log("Decoded token:", decodedToken);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         logout();
//       }

//       return;
//     }

//     logout();
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     removeCookie("jwt", { path: "/" });
//   };

//   useEffect(() => {
//     if (cookie?.jwt) {
//       try {
//         setToken(cookie.jwt);
//         const decodedUser = jwt_decode(cookie.jwt); // Decode the token correctly
//         setUser(decodedUser);
//       } catch (error) {
//         console.error("Invalid token in cookie:", error);
//         logout();
//       }
//     }
//   }, [cookie]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         token,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// import { createContext, useEffect, useState } from "react";
// import * as jwt_decode from "jwt-decode";
// // import * as jwtDecode from "jwt-decode";
// import { useCookies } from "react-cookie";
// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

//   const login = (tokenStr) => {
//     if (tokenStr) {
//       setToken(tokenStr);
//       const { exp } = jwt_decode(tokenStr);

//       if (exp) {
//         setCookie("jwt", tokenStr, {
//           path: "/",
//           maxAge: exp,
//           sameSite: true,
//         });
//       }

//       console.log("token", token);
//       return;
//     }

//     logout();
//   };
//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     removeCookie("jwt", { path: "/" });
//   };

//   useEffect(() => {
//     if (cookie?.jwt) {
//       setToken(cookie.jwt);
//       const user = jwt_decode(cookie.jwt);
//       setUser(user);
//     }
//   }, [cookie]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         token,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

import { createContext, useEffect, useState } from "react";
import * as jwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

  const login = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const { exp } = jwtDecode(tokenStr);

      if (exp) {
        setCookie("jwt", tokenStr, {
          path: "/",
          maxAge: exp,
          sameSite: true,
        });
      }

      console.log("token", token);
      return;
    }

    logout();
  };
  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookie("jwt", { path: "/" });
  };

  useEffect(() => {
    if (cookie?.jwt) {
      setToken(cookie.jwt);
      const user = jwtDecode(cookie.jwt);
      setUser(user);
    }
  }, [cookie]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
