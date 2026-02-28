export const personal = {
  name: "Kahan Shah",
  email: "kahanshah7@gmail.com",
  linkedin: "https://www.linkedin.com/in/shah-kahan/",
  github: "https://github.com/nahak26",
  tagline: "MS Computer Engineering @ USC | VLSI / ASIC / Embedded",
} as const;

export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  dates: string;
}

export const education: EducationEntry[] = [
  {
    school: "University of Southern California",
    location: "Los Angeles, CA",
    degree: "Master of Science in Computer Engineering",
    dates: "August 2025 — Present",
  },
  {
    school: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    degree: "Bachelor of Science in Computer Engineering",
    dates: "September 2021 — June 2025",
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "The Difference",
    role: "Full Stack Intern",
    location: "Remote",
    dates: "May 2024 — June 2025",
    bullets: [
      "Architected and executed migration from legacy system to Laravel API, reducing response times by 40% and improving reliability",
      "Developed RESTful Laravel endpoints with Nutritionix integration, enabling real-time nutritional processing for 1000+ daily users",
      "Optimized Flutter frontend with debounced search, reducing server load by 60% and improving UX responsiveness",
      "Implemented Riverpod state management, eliminating redundant API calls and reducing backend traffic by 50%",
    ],
  },
  {
    company: "University of California",
    role: "Grader/Reader for Software Development Course",
    location: "Santa Cruz, CA",
    dates: "Sep 2024 — June 2025",
    bullets: [
      "Evaluated programming assignments and delivered actionable feedback to 100+ students, reinforcing software development best practices",
    ],
  },
];

export interface ProjectGroup {
  title: string;
  tech: string;
  bullets: string[];
}

export const projects: ProjectGroup[] = [
  {
    title: "Embedded/IoT Projects",
    tech: "ESP32, C, FreeRTOS, BLE, HTTP",
    bullets: [
      "Built Bluetooth HID mouse controller on ESP32-C3 (ESP-IDF, BLE); integrated ICM-42670-P IMU and tilt-to-cursor mapping; achieved <10ms latency",
      "Developed ESP32 weather monitor (C, HTTP): parsed wttr.in API + local sensors and posted readings at 1 Hz",
      "Designed ultrasonic range finder (HC-SR04) with temperature compensation, improving accuracy by 95% in 10–20 cm range",
      "Implemented Morse-code optical link: Raspberry Pi LED transmitter + ESP32 ADC receiver; optimized sampling to increase throughput by 300%",
    ],
  },
  {
    title: "ASIC/FPGA and Hardware Projects",
    tech: "Verilog, SystemVerilog, FPGA, RISC-V, Cadence Virtuoso",
    bullets: [
      'Built RISC-V assembly graphics routines and an interactive "Paint" app (lines/circles/polygons, input handling), improving frame time by 40%',
      "Created gate-level schematics and physical layouts in Cadence Virtuoso for a 16-bit MAC and key blocks (Booth encoder, 6-2 compressor, CSA/CLA adders, DFFs); ran DRC/LVS and iterative optimization for power, delay, and area",
      "Designed pixel ball game logic in Verilog for Basys FPGA; implemented collision detection and physics simulation; achieved 60 FPS",
      "Engineered frequency detection system in Verilog for musical note recognition on Icebreaker FPGA; implemented FFT-based pipeline, achieving 99.2% accuracy",
    ],
  },
];

export interface SkillCategory {
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["C", "C++", "Python", "SystemVerilog", "Verilog", "VHDL", "RISC-V Assembly", "Java"],
  },
  {
    label: "Developer Tools",
    items: [
      "Vivado", "Yosys", "Quartus", "Synopsys VCS", "Cadence Virtuoso",
      "Git", "STM32CubeIDE", "PlatformIO", "Arduino IDE", "Flutter",
    ],
  },
  {
    label: "Technologies / Frameworks",
    items: ["RTL", "Synthesis", "Static Timing Analysis (STA)", "Constrained-Random Verification", "UVM (basics)", "RISC-V"],
  },
  {
    label: "Digital Design",
    items: [
      "RTL Design", "Testbench Development", "Hardware Verification Methodologies",
      "Timing Closure", "Design Constraints (SDC)", "Verification Planning",
    ],
  },
  {
    label: "Embedded / Microcontrollers",
    items: ["ESP32", "STM32", "AVR", "FreeRTOS", "ESP-IDF", "I2C", "SPI", "UART", "Board Bring-up", "Sensor Integration"],
  },
];
