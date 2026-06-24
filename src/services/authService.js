// import apiClient from "@/services/apiClient";

// export const loginUser = async (
//   credentials
// ) => {
//   const response =
//     await apiClient.post(
//       "/auth/login",
//       credentials
//     );

//   return response.data;
// };

// export const signupUser =
//   async (data) => {
//     const response =
//       await apiClient.post(
//         "/auth/signup",
//         data
//       );

//     return response.data;
//   };

// export const getCurrentUser =
//   async () => {
//     const response =
//       await apiClient.get(
//         "/auth/me"
//       );

//     return response.data;
//   };

// export const updateProfile =
//   async (data) => {
//     const response =
//       await apiClient.put(
//         "/auth/profile",
//         data
//       );

//     return response.data;
//   };

// export const changePassword =
//   async (data) => {
//     const response =
//       await apiClient.put(
//         "/auth/password",
//         data
//       );

//     return response.data;
//   };

// export const logoutUser =
//   async () => {
//     const response =
//       await apiClient.post(
//         "/auth/logout"
//       );

//     return response.data;
//   };












import apiClient from "@/services/apiClient";

/*
=========================================================
Authentication Service
=========================================================

Purpose:
- Handle all authentication-related API calls.
- Centralize auth logic.
- Keep components clean.

Current:
- Login.
- Signup.
- Get current user.
- Update profile.
- Change password.
- Logout.

TODO (Later):
- Store JWT in HttpOnly cookies.
- Add refresh token mechanism.
- Add forgot/reset password.
- Add email verification.
- Add Google/GitHub OAuth login.
- Add automatic token refresh interceptor.
=========================================================
*/

/*
---------------------------------------------------------
Login User
POST /api/auth/login
---------------------------------------------------------
*/

export const login = async (
  credentials
) => {
  const response =
    await apiClient.post(
      "/auth/login",
      credentials
    );

  return response.data;
};

export const loginUser = login;

/*
---------------------------------------------------------
Signup User
POST /api/auth/signup
---------------------------------------------------------
*/

export const signup = async (
  userData
) => {
  const response =
    await apiClient.post(
      "/auth/signup",
      userData
    );

  return response.data;
};

export const signupUser = signup;

/*
---------------------------------------------------------
Get Logged-in User
GET /api/auth/me
---------------------------------------------------------
*/

export const getCurrentUser =
  async () => {
    const response =
      await apiClient.get(
        "/auth/me"
      );

    return response.data;
  };

/*
---------------------------------------------------------
Update Profile
PUT /api/auth/profile
---------------------------------------------------------
*/

export const updateProfile =
  async (data) => {
    const response =
      await apiClient.put(
        "/auth/profile",
        data
      );

    return response.data;
  };

/*
---------------------------------------------------------
Change Password
PUT /api/auth/password
---------------------------------------------------------
*/

export const changePassword =
  async (data) => {
    const response =
      await apiClient.put(
        "/auth/password",
        data
      );

    return response.data;
  };

/*
---------------------------------------------------------
Logout User
POST /api/auth/logout

Current:
- Remove localStorage token.

TODO (Later):
- Clear HttpOnly cookie.
- Invalidate refresh token.
- Destroy server session.
---------------------------------------------------------
*/

export const logout = async () => {
  try {
    await apiClient.post(
      "/auth/logout"
    );
  } catch (error) {
    console.warn(
      "Logout API failed:",
      error
    );
  } finally {
    // Remove local data even if API fails
    localStorage.removeItem(
      "accessToken"
    );

    localStorage.removeItem(
      "user"
    );
  }
};

export const logoutUser = logout;

/*
---------------------------------------------------------
Helper Functions
---------------------------------------------------------
*/

/**
 * Get stored JWT token.
 */
export const getToken = () => {
  if (typeof window === "undefined")
    return null;

  return localStorage.getItem(
    "accessToken"
  );
};

/**
 * Save JWT token.
 */
export const saveToken = (
  token
) => {
  if (typeof window === "undefined")
    return;

  localStorage.setItem(
    "accessToken",
    token
  );
};

/**
 * Check whether user is authenticated.
 */
export const isAuthenticated =
  () => {
    return !!getToken();
  };