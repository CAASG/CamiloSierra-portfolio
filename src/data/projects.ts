import type { ProjectType } from '../types/project';
import panel from '../data/panel.png'
import python from '../data/python.png'
import azure from '../data/azure.png'
import Afunctions from '../data/azureFunctions.png'
import aDB from '../data/Azure_Cosmos_DB.png'
import modeloRostros from '../data/modeloRostros.png'
import OpenCV from '../data/OpenCV.png'
import streamlit from '../data/streamlit.png'
import tensorflow from '../data/tensorflow.png'

export const projects: ProjectType[] = [
  {
    title: "Face Detection Model",
    description: "Functional model for detecting individual or group faces to automate attendance in a classroom, deployed in Streamlit.",
    fullDescription: "This project seeks to develop a system based on facial recognition to improve the attendance taking process in a classroom, replacing the manual method. Using computer vision and machine learning technologies, the system detects and validates faces in real time, recognizing both individual students and groups of people. The objective is to automate attendance registration, minimizing human errors, optimizing time and improving accuracy, without the need for direct intervention by the teacher. The implementation includes an algorithm that processes the images captured by cameras in the classroom, stores them and then consults and analyzes them.",
    image: modeloRostros,
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    ],
    github: "https://github.com/CAASG/ModeloDeteccionRostros.git",
    live: "https://modelodeteccionrostros-xjr8u8nhbamhwefkmheri4.streamlit.app",
    features: [
      "Recognition of individual and group faces: Detects faces both individually and in groups.",
      "Intuitive interface: Deployed on a web platform with Streamlit for ease of use.",
      "High Accuracy: Computer vision algorithms trained for accurate recognition.",
      "Educational application: Implemented as a tool for taking attendance in classrooms.",
      "Optimized processing speed: Performs detections quickly and efficiently.",
      "Scalability: Ability to adapt to different group sizes without losing accuracy."
    ],
    techStack: [
      { name: "Python", icon: python },
      { name: "Streamlit", icon: streamlit },
      { name: "OpenCV", icon: OpenCV },
      { name: "TensorFlow", icon: tensorflow },
    ]
  },
  {
    title: "Poultry Farm With Azure IoT HUB - An Ecosystem of 15 Sensors",
    description: "Implementation of an ecosystem of 15 sensors connected to the Azure IoT platform to monitor the farm's environmental conditions in real time.",
    fullDescription: `Implementation of a comprehensive monitoring system with 15 sensor templates, powered by Azure IoT Hub. This initiative aims to optimize egg production and ensure the well-being of hens in a poultry farm, through environmental monitoring and control and analysis of bird behavior
                      To achieve this goal, 15 carefully selected sensor templates will be deployed and distributed across multiple devices. This strategy responds to the need to avoid conflicts between sensors and ensure the accuracy of measurements. Each device, designed as a light and comfortable collar, will be placed on the hens upon their arrival at the nursery, thus initiating an unprecedented data collection process.`,
    image: panel,
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
    ],
    github: "https://parcial.azureiotcentral.com/dashboards/dtmi%3AhomepageView%3Ajozgjm6jr",
    live: "#",
    features: [
      "Real-time monitoring: Constant monitoring of environmental and poultry health data.",
      "Azure IoT Hub Integration: Centralized communication and management of connected devices.",
      "Advanced sensor ecosystem: 15 specialized sensors to measure temperature, humidity, air quality, water and food consumption, among others.",
      "Automated Alerts: Real-time notifications about critical or unusual conditions.",
      "Data Visualization: Interactive dashboards and charts for detailed analysis.",
      "Optimizing poultry welfare: Automatic adjustments based on predefined ideal conditions.",
      "Production Management: Analytical data to maximize production efficiency and quality.",
      "Scalability: Infrastructure designed to add sensors and functionalities in the future.",
      "Decision support: Recommendations based on data intelligence."
    ],
    techStack: [
      { name: "Microsoft Azure IoT Hub", icon: azure },
      { name: "Python", icon: python },
      { name: "Azure Cosmos SQL Database", icon: aDB },
      { name: "Azure Functions", icon: Afunctions }
    ]
  }
];