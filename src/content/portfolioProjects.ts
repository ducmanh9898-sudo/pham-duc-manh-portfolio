export type ProjectMetric = {
  value: string;
  label: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  metrics?: ProjectMetric[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "environmental-data-platform",
    title: "Environmental Data Platform",
    category: "DATA ENGINEERING",
    year: "2026",
    role: "Personal Project",
    description:
      "A hybrid batch and streaming lakehouse platform for environmental data across multiple cities and countries.",
    highlights: [
      "Designed batch and real-time data pipelines",
      "Built Bronze, Silver and Gold data layers",
      "Handled event-time, late events, deduplication and data quality",
    ],
    stack: [
      "Python",
      "Airflow",
      "Kafka",
      "Spark",
      "Flink",
      "Iceberg",
      "MinIO",
      "dbt",
      "Trino",
    ],
    metrics: [
  {
    value: "12",
    label: "Cities",
  },
  {
    value: "6",
    label: "Countries",
  },
  {
    value: "Batch + Stream",
    label: "Processing",
  },
],
  },

  {
    id: "flight-delay-analytics",
    title: "Weather-Driven Flight Delay Analytics",
    category: "DATA SCIENCE / ANALYTICS",
    year: "2025",
    role: "Personal Project",
    description:
      "An end-to-end analysis of how weather conditions influence airline delays, combining aviation and weather data.",
    highlights: [
      "Integrated BTS aviation data with NOAA weather data",
      "Compared multiple machine learning models and selected XGBoost",
      "Used SHAP and competitor benchmarking to translate predictions into business insights",
    ],
    stack: [
      "Python",
      "Pandas",
      "XGBoost",
      "SHAP",
      "Machine Learning",
      "Data Visualization",
    ],
    metrics: [
  {
    value: "0.765",
    label: "R²",
  },
  {
    value: "564.66",
    label: "RMSE (min)",
  },
  {
    value: "198.88",
    label: "MAE (min)",
  },
],
  },

  {
    id: "rental-management-system",
    title: "Rental Property Management System",
    category: "PROJECT / SYSTEM MANAGEMENT",
    year: "2025",
    role: "Project Manager & Tester",
    description:
      "A rental property management system designed to support room, tenant, contract, payment, maintenance and reporting workflows.",
    highlights: [
      "Led a 5-member Agile/Scrum team",
      "Designed Use Case models and database structure",
      "Performed functional testing, defect tracking and retesting",
    ],
    stack: [
      "Agile",
      "Scrum",
      "System Analysis",
      "Use Case",
      "ERD",
      "Testing",
    ],
    metrics: [
  {
    value: "5",
    label: "Team Members",
  },
  {
    value: "600",
    label: "Planned Man-Hours",
  },
],
  },

  {
    id: "ai-crm",
    title: "AI-Enabled CRM for Cosmetic Retail",
    category: "SYSTEM ANALYSIS",
    year: "2026",
    role: "System Analyst",
    description:
      "A CRM system covering customer, order, lead, marketing, automation and reporting processes with an AI service integrated into the architecture.",
    highlights: [
      "Analyzed business processes and functional requirements",
      "Designed Use Case, DFD, ERD and system workflows",
      "Translated business requirements into system functions with the technical team",
    ],
    stack: [
      "System Analysis",
      "Business Process",
      "Use Case",
      "DFD",
      "ERD",
      "Requirements Analysis",
    ],
  },

  {
    id: "telco-churn",
    title: "Telco Customer Churn Analytics",
    category: "CUSTOMER ANALYTICS",
    year: "2025",
    role: "Personal Project",
    description:
      "Customer churn analysis combining exploratory analytics and segmentation to identify high-risk customer groups.",
    highlights: [
      "Analyzed churn across contracts, tenure, services and charges",
      "Applied K-Means clustering for customer segmentation",
      "Identified a high-risk segment with approximately 46% churn",
    ],
    stack: [
      "Python",
      "Pandas",
      "EDA",
      "K-Means",
      "Customer Segmentation",
      "Data Visualization",
    ],
    metrics: [
  {
    value: "7,032",
    label: "Valid Customers",
  },
  {
    value: "46.15%",
    label: "High-Risk Churn",
  },
  {
    value: "3",
    label: "Customer Segments",
  },
],
  },
];