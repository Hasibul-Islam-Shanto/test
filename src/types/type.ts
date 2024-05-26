// user type
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// posts type
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// posts with user type
export type PostWithUserType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  user: UserType | undefined;
};
