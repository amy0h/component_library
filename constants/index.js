import {
  faCircleCheck,
  faExclamationTriangle,
  faCircleXmark,
  faInfoCircle} from '@fortawesome/free-solid-svg-icons';

import {
  TbCloudUpload,
  TbReportAnalytics,
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
    },
    { 
      icon: TbReportAnalytics,
      title: "Analytics Insights",
      content: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
    },
  ]