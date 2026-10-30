export interface BodyCamDevice {
  id: string;
  officerName: string;
  badgeNumber: string;
  status: 'active' | 'standby' | 'offline';
  batteryLevel: number;
  location: string;
  lastSync: string;
  isStreaming: boolean;
}

export interface DetectionAlert {
  id: string;
  deviceId: string;
  officerName: string;
  type: 'weapon_detected' | 'license_plate' | 'person_of_interest' | 'unusual_motion';
  confidence: number;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
  thumbnailUrl?: string;
  resolved: boolean;
}

export interface SystemStats {
  activeCameras: number;
  totalAlertsToday: number;
  processedHours: number;
  aiLatencyMs: number;
}

