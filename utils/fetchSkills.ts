import { groq } from "next-sanity";
import { sanityClient } from "../adarsh-portfolio-backend";
import { Skill } from "../typings";

const query = groq`
*[_type == "skill" ]
`;

export const fetchSkills = async () => {
  const skills: Skill[] = await sanityClient.fetch(query);

  return skills;
};
