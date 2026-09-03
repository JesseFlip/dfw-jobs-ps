export type JobType = 'Remote' | 'Hybrid';

export interface Job {
  id: number;
  company: string;
  title: string;
  type: JobType;
  location: string;
  pay: string;
  /** Application deadline as an ISO `YYYY-MM-DD` date. */
  deadline: string;
  link: string;
  description: string;
}

export const jobsData: Job[] = [
  {
    id: 1,
    company: 'Myriad 360',
    title: 'White Glove Field Technician',
    type: 'Remote',
    location: 'Dallas, TX',
    pay: '$50,000 - $70,000 / yr + bonus/commission',
    deadline: '2026-09-25',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056kjYAA/myriad-360white-glove-field-technician',
    description: 'Entry-level field technician position providing white-glove IT support and service.',
  },
  {
    id: 2,
    company: 'TEKsystems',
    title: 'Application Packaging Engineer (App Vol)',
    type: 'Remote',
    location: 'Dallas, TX',
    pay: '$50 - $70 / hr',
    deadline: '2026-09-15',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056eZYAQ/teksystemsapplication-packaging-engineer-app-vol',
    description: 'Entry-level engineering role focused on application packaging using App Volumes.',
  },
  {
    id: 3,
    company: 'TEKsystems',
    title: 'Epic Optime/Radiant Analyst',
    type: 'Remote',
    location: 'Dallas, TX',
    pay: '$80 - $90 / hr',
    deadline: '2026-09-04',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056J3YAI/teksystemsepic-optimeradiant-analyst',
    description:
      'Entry-level analyst specializing in Epic Optime and Radiant systems for healthcare IT environments.',
  },
  {
    id: 4,
    company: 'TEKsystems',
    title: 'SailPoint App Onboarding Team Lead',
    type: 'Remote',
    location: 'Dallas, TX',
    pay: '$60 - $75 / hr',
    deadline: '2026-09-04',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000053xSYAQ/teksystemssailpoint-application-onboarding-team-l',
    description:
      'Entry-level team lead position overseeing the onboarding of applications into SailPoint Identity Governance.',
  },
  {
    id: 5,
    company: 'TEKsystems',
    title: 'Systems Engineer',
    type: 'Remote',
    location: 'Richardson, TX',
    pay: '$60 - $65 / hr',
    deadline: '2026-09-02',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000053uHYAQ/teksystemssystems-engineer',
    description:
      'Entry-level systems engineer responsible for maintaining and optimizing IT infrastructure.',
  },
  {
    id: 6,
    company: 'TEKsystems',
    title: 'Sr. Network Engineer',
    type: 'Remote',
    location: 'Richardson, TX',
    pay: '$70 - $75 / hr',
    deadline: '2026-09-03',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000053tHYAQ/teksystemssr-network-engineer',
    description:
      'Entry-level senior network engineer role focusing on network architecture, routing, and switching.',
  },
  {
    id: 7,
    company: 'TEKsystems',
    title: 'Entry Level Helpdesk Support',
    type: 'Hybrid',
    location: 'Irving, TX',
    pay: '$16.25 - $18 / hr',
    deadline: '2026-09-15',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000056ffYAA/teksystemsentry-level-helpdesk-support',
    description: 'Tier 1 helpdesk support role assisting users with hardware and software troubleshooting.',
  },
  {
    id: 8,
    company: 'TEKsystems',
    title: 'Entry Level Helpdesk Support',
    type: 'Hybrid',
    location: 'Irving, TX',
    pay: '$16.25 - $18 / hr',
    deadline: '2026-09-11',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000055kDYAQ/teksystemsentry-level-helpdesk-support',
    description: 'Tier 1 helpdesk support role assisting users with hardware and software troubleshooting.',
  },
  {
    id: 9,
    company: 'TEKsystems',
    title: 'Cloud Architect (AWS/Terraform)',
    type: 'Hybrid',
    location: 'Irving, TX',
    pay: '$89 / hr',
    deadline: '2026-09-03',
    link: 'https://perscholas.my.site.com/careerportal/s/job-opportunity/a8rPZ00000055jvYAA/teksystemscloud-architect-awsterraform-enterpri',
    description:
      'Cloud architecture role requiring expertise in AWS and Terraform Enterprise for infrastructure as code.',
  },
];
