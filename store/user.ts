import { atom } from 'recoil';
import { User } from '@supabase/supabase-js';

const userState = atom<User | null>({
  key: 'userState',
  default: process.env.NODE_ENV === "development" ? {
    "id": "65f2942a-71fd-4040-b2dd-c44f720015cf",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "ckdtj1012@gmail.com",
    "email_confirmed_at": "2022-08-20T07:03:33.500736Z",
    "phone": "",
    "confirmed_at": "2022-08-20T07:03:33.500736Z",
    "last_sign_in_at": "2022-08-20T12:10:19.980514Z",
    "app_metadata": {
      "provider": "google",
      "providers": [
        "google"
      ]
    },
    "user_metadata": {
      "avatar_url": "https://lh3.googleusercontent.com/a-/AFdZucoj78l33SUwPpWPNcX8M8je7ks1bFgmz3tA7fF_6Q=s96-c",
      "email": "ckdtj1012@gmail.com",
      "email_verified": true,
      "full_name": "장창서",
      "iss": "https://www.googleapis.com/userinfo/v2/me",
      "name": "장창서",
      "picture": "https://lh3.googleusercontent.com/a-/AFdZucoj78l33SUwPpWPNcX8M8je7ks1bFgmz3tA7fF_6Q=s96-c",
      "provider_id": "100222688695642589159",
      "sub": "100222688695642589159"
    },
    "identities": [
      {
        "id": "100222688695642589159",
        "user_id": "65f2942a-71fd-4040-b2dd-c44f720015cf",
        "identity_data": {
          "avatar_url": "https://lh3.googleusercontent.com/a-/AFdZucoj78l33SUwPpWPNcX8M8je7ks1bFgmz3tA7fF_6Q=s96-c",
          "email": "ckdtj1012@gmail.com",
          "email_verified": true,
          "full_name": "장창서",
          "iss": "https://www.googleapis.com/userinfo/v2/me",
          "name": "장창서",
          "picture": "https://lh3.googleusercontent.com/a-/AFdZucoj78l33SUwPpWPNcX8M8je7ks1bFgmz3tA7fF_6Q=s96-c",
          "provider_id": "100222688695642589159",
          "sub": "100222688695642589159"
        },
        "provider": "google",
        "last_sign_in_at": "2022-08-20T07:03:33.497468Z",
        "created_at": "2022-08-20T07:03:33.497507Z",
        "updated_at": "2022-08-20T12:10:19.975485Z"
      }
    ],
    "created_at": "2022-08-20T07:03:33.49284Z",
    "updated_at": "2022-08-20T14:23:14.941049Z"
  }: null,
});

export default userState;
