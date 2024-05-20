type Freelancer = {
  id: string;
  name: string;
  country: string;
  rating: number;
  description: string;
  skills: string[];
  imageURL: string;
  projects: Project[]?;
  reviews: Review[]?;
};

type Project = {
  title: string;
  description: string;
};

type Review = {
  name: string;
  comment: string;
  rating: number;
};
