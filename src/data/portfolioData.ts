/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Verified Student Profile Data for Dipanshu Thakur
 * Strict adherence: No fabricated metrics, ratings, or achievements.
 */

export interface StudentProfile {
  name: string;
  role: string;
  shortBio: string;
  email: string;
  college: {
    name: string;
    shortName: string;
    location: string;
    degree: string;
    specialization: string;
    currentYear: string;
    academicPeriod: string;
  };
  socialLinks: {
    github: {
      url: string;
      isPlaceholder: boolean;
      placeholderLabel: string;
    };
    linkedin: {
      url: string;
      isPlaceholder: boolean;
      placeholderLabel: string;
    };
    email: string;
  };
  skills: {
    id: string;
    name: string;
    category: string;
    summary: string;
    coreTopics: string[];
    labFocus: string[];
  }[];
  educationDetails: {
    institution: string;
    degree: string;
    specialization: string;
    academicYear: string;
    status: string;
    coursework: string[];
  };
}

export const PORTFOLIO_DATA: StudentProfile = {
  name: "Dipanshu Thakur",
  role: "Cybersecurity & IoT Student",
  shortBio:
    "Second-year undergraduate engineering student with a strong drive for cybersecurity, internet of things architectures, and Python development. Actively building a solid technical foundation in network security and automation.",
  email: "thakurdipanshu2006@gmail.com",
  college: {
    name: "Baderia Global Institute of Engineering and Management",
    shortName: "BGIEM",
    location: "Jabalpur, Madhya Pradesh, India",
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Cybersecurity & Internet of Things (IoT)",
    currentYear: "2nd Year",
    academicPeriod: "Current Undergraduate",
  },
  socialLinks: {
    github: {
      url: "https://github.com",
      isPlaceholder: true,
      placeholderLabel: "GitHub Profile (Add your URL in portfolioData.ts)",
    },
    linkedin: {
      url: "https://linkedin.com",
      isPlaceholder: true,
      placeholderLabel: "LinkedIn Profile (Add your URL in portfolioData.ts)",
    },
    email: "mailto:thakurdipanshu2006@gmail.com",
  },
  skills: [
    {
      id: "python",
      name: "Python",
      category: "Programming & Automation",
      summary:
        "Building foundational programming strength with clean Python scripts, algorithmic problem solving, and automation workflows.",
      coreTopics: [
        "Core Python Syntax & Object-Oriented Programming (OOP)",
        "Scripting for Automation & File Processing (JSON/CSV)",
        "Socket Programming & Network Communication Fundamentals",
        "Data Structures, Algorithms & Logic Building",
        "Virtual Environments, Pip & Modular Code Organization",
      ],
      labFocus: [
        "Custom network ping and port utility scripts",
        "Automated log parsing and string analysis",
        "Modular CLI tools for basic system diagnostics",
      ],
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      category: "Information & Network Security",
      summary:
        "Gaining in-depth conceptual and practical knowledge in network protocols, system defense, and defensive security measures.",
      coreTopics: [
        "Network Fundamentals (TCP/IP Suite, OSI Model, Subnetting)",
        "Principles of Information Security (CIA Triad: Confidentiality, Integrity, Availability)",
        "Vulnerability Concepts & Common Web Security Threats (OWASP Top 10)",
        "Basic Cryptography (Symmetric vs Asymmetric, Hashing, SSL/TLS)",
        "System Hardening, Access Controls & Threat Modeling",
      ],
      labFocus: [
        "Packet capture and protocol inspection via Wireshark",
        "Linux CLI navigation and permission auditing",
        "Local testbed network scanning and security hygiene",
      ],
    },
    {
      id: "iot",
      name: "Internet of Things (IoT) Foundations",
      category: "Embedded & Connected Systems",
      summary:
        "Exploring the intersection of hardware sensors, microcontrollers, and wireless protocols with a focus on device security.",
      coreTopics: [
        "Microcontroller Fundamentals & GPIO Architecture",
        "Sensors, Actuators & Analog/Digital Signal Acquisition",
        "IoT Communication Protocols (MQTT, HTTP, CoAP)",
        "Edge Device Security & Firmware Integrity Considerations",
        "Hardware-to-Cloud Data Pipeline Basics",
      ],
      labFocus: [
        "Sensor data collection on microcontroller boards",
        "Lightweight telemetry transmission via MQTT brokers",
        "Basic device authentication and secure credential handling",
      ],
    },
  ],
  educationDetails: {
    institution: "Baderia Global Institute of Engineering and Management",
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Cybersecurity & Internet of Things (IoT)",
    academicYear: "2nd Year",
    status: "Currently Enrolled (Undergraduate)",
    coursework: [
      "Computer Networks & Data Communications",
      "Object-Oriented Programming with Python",
      "Data Structures & Algorithms",
      "Internet of Things (IoT) Architecture & Sensors",
      "Fundamentals of Information Security",
      "Operating Systems & Linux Administration Basics",
      "Discrete Mathematics & Engineering Logic",
    ],
  },
};
