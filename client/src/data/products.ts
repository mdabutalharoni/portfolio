export interface Product {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  price?: string;
  status: "available" | "coming-soon" | "sold-out";
  links: {
    purchase?: string;
    demo?: string;
    documentation?: string;
  };
  tags: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "arduino-starter-kit",
    title: "Arduino Robotics Starter Kit",
    description: "Complete educational kit for beginners to learn robotics and embedded programming with step-by-step tutorials.",
    fullDescription: "A comprehensive educational kit designed to teach robotics fundamentals. Includes Arduino Uno, sensors, actuators, and a detailed guidebook with 20+ projects. Perfect for students, hobbyists, and educators looking to get started with robotics and embedded systems programming.",
    image: "robotics-project.jpg",
    price: "$89.99",
    status: "available",
    links: {
      purchase: "https://store.example.com/arduino-kit",
      documentation: "https://docs.example.com/arduino-kit"
    },
    tags: ["Education", "Arduino", "Robotics", "DIY"],
    featured: true
  },
  {
    id: "smart-sensor-module",
    title: "Multi-Sensor IoT Module",
    description: "Compact IoT sensor module with temperature, humidity, motion detection, and wireless connectivity for smart applications.",
    fullDescription: "Advanced multi-sensor module designed for IoT applications. Features high-precision temperature and humidity sensors, PIR motion detection, ambient light sensor, and WiFi/Bluetooth connectivity. Compatible with popular platforms like Arduino, Raspberry Pi, and ESP32. Includes companion mobile app for data visualization.",
    image: "embedded-systems.jpg",
    price: "$45.00",
    status: "available",
    links: {
      purchase: "https://store.example.com/sensor-module",
      demo: "https://sensor-demo.example.com"
    },
    tags: ["IoT", "Sensors", "WiFi", "Mobile App"],
    featured: true
  },
  {
    id: "robot-control-app",
    title: "Universal Robot Controller",
    description: "Mobile app for controlling various robot platforms with customizable interface and real-time telemetry.",
    fullDescription: "Universal mobile application for robot control and monitoring. Features customizable control interfaces, real-time telemetry display, video streaming capabilities, and support for multiple robot platforms. Built with React Native for cross-platform compatibility and includes advanced features like gesture control and voice commands.",
    image: "web-development.jpg",
    price: "$19.99",
    status: "coming-soon",
    links: {
      demo: "https://robot-controller-demo.vercel.app"
    },
    tags: ["Mobile App", "Robot Control", "React Native", "Real-time"],
    featured: true
  }
];

export const featuredProducts = products.filter(product => product.featured);