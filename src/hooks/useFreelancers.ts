import { useState } from "react";
import { httpGET } from "../infra/httpClient";

function useFreelancers() {
  const [unfilteredFreelancers, setUnfilteredFreelancer] = useState<
    Freelancer[]
  >([]);
  const [freelancer, setFreelancer] = useState<Freelancer>();
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loadFreelancers(): Promise<void> {
    setIsLoading(true);

    const result = await httpGET(
      `https://api.github.com/gists/5b9cedd84fa16f1fac38622f6aa43ca3`
    );
    if (result == undefined) {
      setUnfilteredFreelancer([]);
      setFreelancers([]);
      setIsLoading(false);
      return;
    }

    const parsedJson = JSON.parse(
      result["files"]["freelancers.json"]["content"]
    );
    const list = parsedJson.list.map((json: any) => formatFreelancer(json));
    setUnfilteredFreelancer(list);
    setFreelancers(list);
    setIsLoading(false);
  }

  async function getFreelancerById(id: string): Promise<void> {
    setIsLoading(true);

    const result = await httpGET(
      `https://api.github.com/gists/76da2c52f50fa816d190c16046131a55`
    );
    if (result == undefined) {
      setFreelancer(undefined);
      setIsLoading(false);
      return;
    }

    const parsedJson = JSON.parse(
      result["files"]["freelancers-details.json"]["content"]
    );
    const list = parsedJson.list.map((json: any) => formatFreelancer(json));
    const freelancer = list.find((item: Freelancer) => item.id === id);
    if (freelancer != null) {
      setFreelancer(freelancer);
    }
    setIsLoading(false);
  }

  function search(term: string): void {
    const _term = normalize(term);
    const filtered = unfilteredFreelancers.filter(
      (freelancer) =>
        freelancer.skills.some((skill) => normalize(skill).includes(_term)) ||
        normalize(freelancer.name).includes(_term) ||
        normalize(freelancer.country).includes(_term)
    );
    setFreelancers(filtered);
  }

  return {
    isLoading,
    freelancer,
    freelancers,
    loadFreelancers,
    getFreelancerById,
    search,
  };
}

function formatFreelancer(json: any): Freelancer {
  return {
    id: json["id"],
    name: json["name"],
    rating: json["rating"],
    skills: json["skills"],
    country: json["country"],
    description: json["description"],
    projects: json["projects"],
    reviews: json["reviews"],
    imageURL: json["imageURL"],
  };
}

function normalize(input: string): string {
  return input.trim().toLowerCase();
}

export { useFreelancers };
