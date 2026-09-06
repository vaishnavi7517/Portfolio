export type Project = {
  slug: string
  number: string
  title: string
  type: string
  description: string
  technology: string[]
  problem: string
  solution: string
  features: string[]
  learned: string
  status: string
  color: string
}

export const projects: Project[] = [
  { slug: 'ai-risk-manager', number: '01', title: 'AI Risk Manager', type: 'AI / risk assessment', description: 'An AI-powered risk assessment and management project designed to analyze risk information and present actionable insights.', technology: ['Python', 'AI/ML', 'FastAPI', 'React', 'Data'], problem: 'Risk information can be difficult to interpret quickly.', solution: 'A project direction focused on analyzing risk information and presenting actionable insights.', features: ['Risk information analysis', 'Actionable insight presentation'], learned: 'Connecting machine learning ideas to a product-facing interface.', status: 'Project showcase', color: '#77d8ff' },
  { slug: 'algotrace', number: '02', title: 'AlgoTrace', type: 'Algorithm visualization', description: 'An interactive algorithm visualization platform for understanding sorting and data-structure algorithms visually.', technology: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'], problem: 'Algorithm execution is often hard to follow as static code.', solution: 'A visual learning surface that makes each step and changing value observable.', features: ['Merge Sort visualization', 'Step-by-step execution', 'Merge tree', 'Array visualization', 'Live variables'], learned: 'Designing motion as a teaching tool rather than decoration.', status: 'Featured project', color: '#b49cff' },
  { slug: 'cross-platform-file-tracking', number: '03', title: 'AI-Based Cross-Platform File Tracking System', type: 'Desktop system', description: 'A desktop-oriented file tracking system using Python agents and MySQL.', technology: ['Python', 'Tkinter', 'MySQL', 'PIL'], problem: 'Files moving across a system can be difficult to track from one place.', solution: 'A desktop-oriented system that connects Python agents with a MySQL-backed record of file activity.', features: ['Python agents', 'MySQL storage', 'Desktop interface'], learned: 'Working across application, agent, database, and interface layers.', status: 'Project showcase', color: '#e7c57a' },
  { slug: 'face-detection-system', number: '04', title: 'Face Detection System', type: 'Computer vision', description: 'A computer vision based project for detecting faces.', technology: ['Python', 'Computer Vision'], problem: 'Reliable face detection is a foundational computer vision task.', solution: 'A focused system built to detect faces from visual input.', features: ['Face detection', 'Computer vision pipeline'], learned: 'Exploring how visual data becomes a machine-readable signal.', status: 'Project showcase', color: '#79f2c0' },
  { slug: 'departmental-format-portal', number: '05', title: 'Departmental Format Portal', type: 'Web portal', description: 'A web-based portal project focused on organizing and managing departmental formats and content.', technology: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], problem: 'Departmental formats and content benefit from a shared organizing surface.', solution: 'A web portal direction for managing departmental material in one place.', features: ['Web portal', 'Content organization', 'MySQL-backed data'], learned: 'Building practical web software across front end and back end.', status: 'Project showcase', color: '#ff9e7b' },
  { slug: 'college-magazine', number: '06', title: 'College Magazine', type: 'Interactive publication', description: 'A digital college magazine project with an interactive presentation experience.', technology: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Turn.js', 'jsPDF', 'html2canvas'], problem: 'A digital publication should feel more engaging than a static document.', solution: 'An interactive magazine presentation with browser-based document tools.', features: ['Interactive presentation', 'Turn.js page experience', 'PDF and canvas tools'], learned: 'Combining editorial storytelling with front-end interaction.', status: 'Project showcase', color: '#f2a7dc' },
  { slug: 'homemade-food-delivery', number: '07', title: 'Homemade Food Delivery System', type: 'Console application', description: 'A console-based food delivery system developed in C.', technology: ['C'], problem: 'A delivery workflow can be modeled through clear input, state, and output.', solution: 'A console application that explores a homemade food delivery flow in C.', features: ['Console interface', 'Food delivery flow'], learned: 'Strengthening programming fundamentals through a complete small system.', status: 'Project showcase', color: '#ffd166' },
]

export type Experience = { company: string; role: string; type: string; date: string; location?: string }

export const experience: Experience[] = [
  { company: 'GeeksforGeeks', role: 'Campus Mantri — Official Representative', type: 'Part-time', date: 'Jun 2026 – Present' },
  { company: 'Computer Science & Business Systems Student Association', role: 'Volunteer', type: 'Student association', date: 'Feb 2026 – Present' },
  { company: 'Corizo Edutech Private Limited', role: 'Marketing Intern', type: 'Internship', date: 'Dec 2025 – Present', location: 'India' },
  { company: 'Softron', role: 'React.js Developer', type: 'Internship', date: 'Dec 2023 – Jan 2024' },
  { company: 'Softron', role: 'Python Machine Learning & Artificial Intelligence Developer', type: 'Internship', date: 'Jun 2023 – Jul 2023', location: 'Kolhapur' },
]

export const skillGroups = [
  { label: 'Programming', items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'PHP', 'SQL'] },
  { label: 'AI / ML / Data', items: ['Machine Learning', 'Artificial Intelligence', 'Generative AI', 'Pandas', 'Matplotlib', 'Data Analytics', 'Data Visualization'] },
  { label: 'Development', items: ['React.js', 'Full-Stack Development', 'Web Development', 'Mobile Application Development', 'TypeScript', 'Vite', 'Tailwind CSS'] },
  { label: 'Database', items: ['MySQL', 'SQL Server'] },
  { label: 'Systems / Security', items: ['Linux', 'Cybersecurity', 'TASM'] },
  { label: 'Tools / Technologies', items: ['Tkinter', 'PIL', 'jQuery', 'Turn.js', 'jsPDF', 'html2canvas', 'LaTeX'] },
  { label: 'Professional', items: ['Communication', 'Soft Skills', 'Interview Preparation', 'Technical Documentation'] },
]

export type Certification = { title: string; provider: string; category: string; id?: string; verification?: 'certificate' | 'credential' | 'unavailable'; verifyLabel?: string; verifyUrl?: string }

export const certifications: Certification[] = [
  { title: 'Deloitte Australia – Cyber Job Simulation', provider: 'Forage', id: 'qwNui4WXzqGzJ58H9', category: 'CYBERSECURITY', verification: 'certificate', verifyLabel: 'View Deloitte Credential', verifyUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_gYZDJkHBRcfyZr2Gj_1777644695768_completion_certificate.pdf' },
  { title: 'Build an AI Agent', provider: 'IBM', category: 'AI/ML', verification: 'credential', verifyLabel: 'View IBM AI Agent Credential', verifyUrl: 'https://www.credly.com/badges/18adb8d1-f628-4394-a4be-0c983c4ce6cd/linked_in_profile' },
  { title: 'Certificate of Completion – Mongo DB', provider: 'Unstop', id: 'c87437ce-7ca2-420f-a465-25ec898dc3b5', category: 'DEVELOPMENT', verification: 'certificate', verifyLabel: 'Verify MongoDB Credential', verifyUrl: 'https://unstop.com/certificate-preview/c87437ce-7ca2-420f-a465-25ec898dc3b5' },
  { title: 'Certificate of Completion – Node JS', provider: 'Unstop', id: '6420d0aa-8a09-4a6b-b74d-b73041ec81cf', category: 'DEVELOPMENT', verification: 'certificate', verifyLabel: 'Verify Node.js Credential', verifyUrl: 'https://unstop.com/certificate-preview/6420d0aa-8a09-4a6b-b74d-b73041ec81cf' },
  { title: 'Certificate of Completion – Resume Builder', provider: 'Unstop', id: '45841948-4a90-4cdf-9410-74d9e9b56288', category: 'PROFESSIONAL', verification: 'certificate', verifyLabel: 'Verify Resume Builder Credential', verifyUrl: 'https://unstop.com/certificate-preview/45841948-4a90-4cdf-9410-74d9e9b56288' },
  { title: 'Certificate of Completion – HR Preparation', provider: 'Unstop', id: '6b9eb0f4-753e-4c05-8202-09650867977a', category: 'PROFESSIONAL', verification: 'certificate', verifyLabel: 'Verify HR Preparation Credential', verifyUrl: 'https://unstop.com/certificate-preview/6b9eb0f4-753e-4c05-8202-09650867977a' },
  { title: 'Certificate of Completion – Group Discussion', provider: 'Unstop', id: '1c0280b4-2528-4ad5-9515-621cb76a8d8c', category: 'PROFESSIONAL', verification: 'certificate', verifyLabel: 'Verify Group Discussion Credential', verifyUrl: 'https://unstop.com/certificate-preview/1c0280b4-2528-4ad5-9515-621cb76a8d8c' },
  { title: 'Learning – Resume Writing with AI Support Job Simulation', provider: 'Forage', id: 'qpGSpS6EkBQQzvWZC', category: 'PROFESSIONAL', verification: 'certificate', verifyLabel: 'View Resume Writing Credential', verifyUrl: 'https://www.theforage.com/completion-certificates/rm6of58ywoJoNuiBt/ohm6nvufSdZc2aQAA_rm6of58ywoJoNuiBt_gYZDJkHBRcfyZr2Gj_1776266220031_completion_certificate.pdf' },
  { title: 'EY – Technology Risk Job Simulation', provider: 'Forage', id: 'NQBfX9AcDbWe9wXN7', category: 'PROFESSIONAL', verification: 'certificate', verifyLabel: 'View EY Credential', verifyUrl: 'https://www.theforage.com/completion-certificates/Z3pPDqCPapFTSGBgi/25RAqjzJnD3b8YPZv_Z3pPDqCPapFTSGBgi_gYZDJkHBRcfyZr2Gj_1776262654468_completion_certificate.pdf' },
  { title: 'Tata – ESG Job Simulation', provider: 'Forage', id: 'DPgqbdsTcqWraXnk8', category: 'PROFESSIONAL', verification: 'certificate', verifyLabel: 'View Tata ESG Credential', verifyUrl: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/N8Muuhk6XsXgMTeu2_ifobHAoMjQs9s6bKS_gYZDJkHBRcfyZr2Gj_1776184380341_completion_certificate.pdf' },
  { title: 'Tata – Cybersecurity Analyst Job Simulation', provider: 'Forage', id: 'oQw6N76kiypCjemJ7', category: 'CYBERSECURITY' },
  { title: "Beyond Resume '26", provider: 'ACADS KITCOEK', id: 'acads0KlTNZnNPp6CuIZcO8kN', category: 'PROFESSIONAL', verifyLabel: 'View Beyond Resume Credential' },
  { title: 'Machine Learning Pipelines with Azure ML Studio', provider: 'Coursera', id: '3AIQG9J3K3T4', category: 'AI/ML', verification: 'credential', verifyLabel: 'Verify Azure ML Credential', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/3AIQG9J3K3T4' },
  { title: 'Object Localization with TensorFlow', provider: 'Coursera', id: 'FA1C571VP0T1', category: 'AI/ML', verification: 'credential', verifyLabel: 'Verify TensorFlow Credential', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/FA1C571VP0T1' },
  { title: 'Siemens Mobility – Commercial Project Manager Job Simulation', provider: 'Forage', id: 'M5haZkdSy47EiafnE', category: 'PROFESSIONAL' },
  { title: 'Walmart USA – Advanced Software Engineering Job Simulation', provider: 'Forage', id: 'N5KW22kSfSxQZ4axp', category: 'DEVELOPMENT' },
  { title: 'Use Canva to Create Desktop and Mobile-friendly Web Pages', provider: 'Coursera Project Network', id: 'F4K7NQP9LHOQ', category: 'DEVELOPMENT', verification: 'credential', verifyLabel: 'Verify Canva Credential', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/F4K7NQP9LHOQ' },
  { title: 'Create Your First Python Program From UST', provider: 'Coursera Project Network', id: 'KTY281F14D5I', category: 'DEVELOPMENT', verification: 'credential', verifyLabel: 'Verify Python Credential', verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/KTY281F14D5I' },
  { title: 'Deloitte Australia – Data Analytics Job Simulation', provider: 'Forage', id: 'CYgYxS64Y96xLDYP5', category: 'DATA' },
  { title: 'Analyzing and Visualizing Data with Python', provider: 'Udemy', category: 'DATA' },
  { title: 'McKinsey.org Forward Program', provider: 'McKinsey & Company', category: 'PROFESSIONAL', verifyLabel: 'View McKinsey Forward Credential' },
  { title: 'Soft Skill Training', provider: 'NPTEL', category: 'PROFESSIONAL' },
  { title: 'LinkedIn – Generative AI', provider: 'LinkedIn', category: 'AI/ML' },
  { title: 'DevTown', provider: 'DevTown', category: 'DEVELOPMENT' },
  { title: 'be10x', provider: 'be10x', category: 'PROFESSIONAL' },
  { title: 'Microsoft', provider: 'Microsoft / DevTown', category: 'DEVELOPMENT' },
  { title: 'Introduction to Cybersecurity', provider: 'Cisco', category: 'CYBERSECURITY', verifyLabel: 'View Cisco Cybersecurity Credential' },
]

export const learningAreas = ['AI & Machine Learning', 'Cloud Computing', 'Data Engineering', 'Full-Stack Development', 'Generative AI', 'Cybersecurity', 'Software Engineering']
