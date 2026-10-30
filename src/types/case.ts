export interface CaseSummary {
  id: string;
  caseNumber: string;
  type: string;
  status: 'Criminal' | 'Traffic' | 'Civil' | 'Administrative';
  reportedBy: string;
  approvalStatus: string;
  formsNeedingApproval: number;
  nibrsErrors: number;
  lastUpdated: string;
}

export interface EvidenceArticle {
  id: string;
  itemNumber: string;
  category: string;
  status: 'Collected' | 'In Transit' | 'Archived' | 'Pending Lab';
  type: string;
  location: string;
  thumbnailUrl: string;
  description?: string;
  chainOfCustody?: {
    timestamp: string;
    officer: string;
    action: string;
  }[];
}

export interface BodyCamVideo {
  id: string;
  cameraNumber: string;
  officerName: string;
  date: string;
  preRecordTime: string;
  incidentClipTime: string;
  fullClipTime: string;
  thumbnailUrl: string;
  videoDuration: string;
  transcription: TranscriptionEntry[];
  aiDetections: AiDetection[];
}

export interface TranscriptionEntry {
  timestamp: string;
  speaker: string;
  text: string;
  isFlagged?: boolean;
}

export interface AiDetection {
  time: string;
  label: string;
  confidence: number;
  severity: 'high' | 'medium' | 'low';
}

