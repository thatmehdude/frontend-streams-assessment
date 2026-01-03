export type Section1Data = {
  id: string;
  title: string;
  heading: string;
  content: string;
  chip?: string;
}

export type Section2Data = {
  id: string;
  title: string;
  heading: string;
  content: string;
}

export type Section3Data = {
  id: string;
  title: string;
  heading: string;
  content: string;
}

export type DataSourceEntry = {
  id: string;
  author: string;
  date: string;
  preview: string;
  avatar?: string;
}

export type AskStreamData = {
  section1: Section1Data;
  section2: Section2Data[];
  section3: Section3Data;
  dataSources: DataSourceEntry[];
}