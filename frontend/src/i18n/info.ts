export interface Info {
  startedProgramming: Date;
  programmingLanguages: string[];
  commercialExperience: number;
  englishLevel: string;
  location?: string;
  email: string;
}

export const info = {
  startedProgramming: new Date("2022-07"),
  programmingLanguages: ["typescript", "java"],
  commercialExperience: 1.5,
  englishLevel: "B2 (upper int.)",
  // location: "Ukraine - EU",
  email: "me@m1xture.xyz",
} satisfies Info;
