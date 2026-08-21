export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectCaseStudy = {
  problem: string;
  approach: string[];
  flow: string[];
  results: string[];
  github?: string;
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
  caseStudy: ProjectCaseStudy;
};

export const portfolioProjects: PortfolioProject[] = [
  // ===========================================================================
  // 01. ENVIRONMENTAL DATA PLATFORM
  // ===========================================================================
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

    caseStudy: {
  problem:
    "Environmental data arrives from different sources, formats and update frequencies, making it difficult to build one reliable analytical view across cities and countries.",

  approach: [
    "Designed a lakehouse architecture with Raw, Bronze, Silver and Gold data layers.",
    "Built batch pipelines with Airflow and Spark alongside streaming pipelines using Kafka and Flink.",
    "Applied data quality checks, deduplication, event-time processing, watermarks and late-event handling.",
    "Used Iceberg, MinIO and Trino to support structured storage and analytical querying.",
  ],

  flow: [
    "Environmental Sources",
    "Batch + Stream Ingestion",
    "Raw / Bronze / Silver / Gold",
    "Lakehouse Storage",
    "Analytics & Visualization",
  ],

  results: [
    "Created a unified environmental data platform covering 12 cities across 6 countries.",
    "Supported both batch and real-time processing within one architecture.",
    "Designed the pipeline to handle duplicates, late events and recovery scenarios.",
  ],

  github:
    "https://github.com/ducmanh9898-sudo/data---elt---paltform",
},
  },

  // ===========================================================================
  // 02. WEATHER-DRIVEN FLIGHT DELAY ANALYTICS
  // ===========================================================================
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

    caseStudy: {
      problem:
        "Flight delays are affected by operational and weather conditions, but raw aviation and weather datasets are stored separately and are difficult to interpret together.",

      approach: [
        "Collected and integrated airline delay data with NOAA weather observations.",
        "Mapped airport identifiers to weather stations to connect aviation and weather records.",
        "Compared Random Forest, XGBoost, LightGBM and CatBoost models.",
        "Used SHAP analysis and competitor benchmarking to interpret model outputs from a business perspective.",
      ],

      results: [
        "Selected XGBoost as the final model with an R² of 0.765.",
        "Achieved RMSE of 564.66 minutes and MAE of 198.88 minutes on the evaluation set.",
        "Translated model findings into airline comparisons, cost-impact analysis and operational recommendations.",
      ],flow: [
  "BTS Aviation Data + NOAA Weather",
  "Airport / Weather Station Mapping",
  "Cleaning & Feature Preparation",
  "Model Comparison",
  "SHAP & Business Insights",
],
    },
  },

  // ===========================================================================
  // 03. RENTAL PROPERTY MANAGEMENT SYSTEM
  // ===========================================================================
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

    caseStudy: {
      problem:
        "Rental-property operations require coordinated management of rooms, tenants, contracts, payments, maintenance and reporting, which can become fragmented when handled manually.",

      approach: [
        "Led project planning and milestone coordination for a 5-member Agile/Scrum team.",
        "Translated documented requirements into Use Case models and system workflows.",
        "Designed the database structure and ERD.",
        "Performed functional testing, tracked defects and retested fixes before delivery.",
      ],

      results: [
        "Structured a system covering the main rental-property management workflows.",
        "Coordinated a project plan estimated at 600 man-hours.",
        "Combined project management, system analysis and software testing responsibilities within the project.",
      ],

      github:
        "https://github.com/KwanFam26022005/House-Management-Software-with-AI",
        flow: [
  "Documented Requirements",
  "Use Cases & System Workflows",
  "ERD / Database Design",
  "Team Coordination",
  "Testing & Delivery",
],
    },
  },

  // ===========================================================================
  // 04. AI-ENABLED CRM FOR COSMETIC RETAIL
  // ===========================================================================
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

    caseStudy: {
      problem:
        "A cosmetic retail business needs a unified system to manage customers, orders, leads, marketing activities, automation and reporting across connected business processes.",

      approach: [
        "Analyzed business processes and functional requirements across CRM modules.",
        "Designed Use Case models, DFDs, ERDs and system workflows.",
        "Defined functional scenarios and exception flows.",
        "Worked with the technical team to translate analyzed requirements into system functions.",
      ],

      results: [
        "Produced a structured system-analysis foundation for the CRM solution.",
        "Connected customer, order, lead, marketing, automation and reporting processes within one system model.",
        "Defined an architecture that included a separate AI service alongside the main application components.",
      ],
      flow: [
  "Business Processes",
  "Requirements Analysis",
  "Use Case / DFD / ERD",
  "Functional Scenarios",
  "Technical Handoff",
],
    },
  },

  // ===========================================================================
  // 05. TELCO CUSTOMER CHURN ANALYTICS
  // ===========================================================================
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

    caseStudy: {
      problem:
        "Telecommunication companies need to understand which customer groups are most likely to churn and which behaviors are associated with that risk.",

      approach: [
        "Cleaned and analyzed the Telco Customer Churn dataset.",
        "Explored churn patterns across contracts, tenure, services and customer charges.",
        "Applied K-Means clustering to segment customers based on behavioral characteristics.",
        "Translated analytical findings into retention-oriented business recommendations.",
      ],

      results: [
        "Prepared 7,032 valid customer records for analysis.",
        "Identified three customer segments.",
        "Found a high-risk segment with approximately 46.15% churn.",
      ],flow: [
  "Customer Dataset",
  "Cleaning & EDA",
  "Behavior Analysis",
  "K-Means Segmentation",
  "Retention Insights",
],
    },
  },
];