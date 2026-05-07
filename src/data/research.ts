export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  tags: string[];
  doi?: string;
  pdfFile?: string;
  status: 'published' | 'accepted' | 'under-review' | 'preprint';
  linkedModelId?: string; // model built from this paper
}

export interface Patent {
  id: string;
  title: string;
  inventors: string[];
  filingNumber: string;
  jurisdiction: string;
  filingDate: string;
  status: 'filed' | 'granted' | 'pending';
  description: string;
  category: string;
}

export interface PredictiveModel {
  id: string;
  name: string;
  type: string;
  accuracy: number;
  auc: number;
  dataset: string;
  datasetSize: number;
  description: string;
  features: string[];
  tags: string[];
  githubUrl?: string;
  year: number;
  linkedPaperId?: string; // paper this model was published in
}

export const researchPapers: ResearchPaper[] = [
  {
    id: 'p1',
    title: 'Automated Detection of Gastric Cancer from Histological Tissue Images Using a Hybrid CNN-Transformer Model',
    authors: ['Badal Gupta', 'Nandini Tak'],
    journal: 'Journal of Cancer Research and Clinical Oncology',
    year: 2025,
    tags: ['CNN', 'Transformer', 'Histopathology', 'Deep Learning', 'Hybrid Model'],
    doi: '',
    status: 'accepted',
    linkedModelId: 'm1',
  },
  {
    id: 'p2',
    title: 'Lesion-Level Gastric Cancer Detection in Endoscopic Imaging Using Enhanced YOLOv11 Model',
    authors: ['Nandini Tak', 'Badal Gupta'],
    journal: 'Frontiers in Oncology',
    year: 2025,
    tags: ['YOLOv11', 'Endoscopy', 'Object Detection', 'Real-Time', 'Lesion Detection'],
    doi: '',
    status: 'accepted',
    linkedModelId: 'm2',
  },
];

export const patents: Patent[] = [
  {
    id: 'pat1',
    title: 'AI-Powered Gastric Cancer Detection System Using Endoscopic Image Analysis',
    inventors: ['Badal Gupta', 'Nandini Tak'],
    filingNumber: 'IN202411045892',
    jurisdiction: 'India',
    filingDate: '2024-08-15',
    status: 'filed',
    description: 'A patent covering an AI system that processes endoscopic images in real-time, highlighting suspicious lesions with color-coded overlays and providing a probability score for malignancy. The system uses an enhanced YOLOv11 architecture trained on thousands of labeled endoscopic images.',
    category: 'Medical Device / AI',
  },
  {
    id: 'pat2',
    title: 'Hybrid CNN-Transformer Framework for Automated Gastric Histopathology Classification',
    inventors: ['Nandini Tak', 'Badal Gupta'],
    filingNumber: 'IN202411078234',
    jurisdiction: 'India',
    filingDate: '2024-11-22',
    status: 'pending',
    description: 'A patent covering a hybrid neural architecture combining convolutional feature extraction with transformer-based attention for automated classification of gastric cancer from histological slide images. Enables digital pathology labs to perform rapid, high-accuracy diagnosis.',
    category: 'Medical AI / Diagnostics',
  },
];

export const predictiveModels: PredictiveModel[] = [
  {
    id: 'm1',
    name: 'Hybrid CNN-Transformer (GC-HCT)',
    type: 'Hybrid CNN + Vision Transformer (ViT)',
    accuracy: 92.0,
    auc: 0.95,
    dataset: 'Gastric Histopathology Dataset (GasHisSDB)',
    datasetSize: 245196,
    description: 'A hybrid deep learning model combining a CNN backbone for local feature extraction with a Vision Transformer for global context modeling. Classifies gastric tissue images into normal and cancerous categories from histological slides. Developed as part of the published research paper on histological tissue image analysis.',
    features: ['Histological Images', 'CNN Feature Maps', 'Transformer Attention', 'Multi-Scale Patches'],
    tags: ['PyTorch', 'ViT', 'CNN', 'Histopathology', 'Binary Classification'],
    year: 2025,
    linkedPaperId: 'p1',
  },
  {
    id: 'm2',
    name: 'Enhanced YOLOv11-GC',
    type: 'Enhanced YOLOv11 Object Detection',
    accuracy: 82.0,
    auc: 0.88,
    dataset: 'Kvasir-SEG + Custom Endoscopy Dataset',
    datasetSize: 18340,
    description: 'An enhanced YOLOv11 architecture with custom neck and attention modules for real-time lesion-level detection in endoscopic images. Detects and localizes suspicious gastric lesions with bounding box precision. Developed as part of the published research on endoscopic imaging.',
    features: ['Endoscopic Images', 'Bounding Box Regression', 'Lesion Localization', 'Attention Neck'],
    tags: ['YOLOv11', 'YOLO', 'Real-Time', 'Endoscopy', 'Object Detection'],
    year: 2025,
    linkedPaperId: 'p2',
  },
];
