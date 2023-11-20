import {
  faCircleCheck,
  faExclamationTriangle,
  faCircleXmark,
  faInfoCircle} from '@fortawesome/free-solid-svg-icons';

import {
  TbCloudUpload,
  TbDatabaseCog} from 'react-icons/tb'

export const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

export const bannerTypes = [
  { type: "success", icon: faCircleCheck, title: "Congratulations!"},
  { type: "warning", icon: faExclamationTriangle, title: "Attention"},
  { type: "error", icon: faCircleXmark, title: "There is a problem with your application"},
  { type: "neutral", icon: faInfoCircle, title: "Update available"},
];

export const cards = [
  { icon: TbCloudUpload,
    title: "Easy Deployment",
    content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." 
  },
  { 
    icon: TbDatabaseCog,
    title: "Efficient Data Management",
    content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
  }
]

export const testimonials = [
  { fullName: "May Andersons",
    company: "Workcation",
    position: "CTO",
    comment:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed urna nulla vitae laoreet augue. Amet feugiat est integer
      dolor auctor adipiscing nunc urna, sit. `
}
]