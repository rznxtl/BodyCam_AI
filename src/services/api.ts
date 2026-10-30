import { BodyCamDevice, DetectionAlert, SystemStats } from '../types';

const MOCK_CAMERAS: BodyCamDevice[] = [
  {
    id: 'CAM-01',
    officerName: 'Sgt. Silva',
    badgeNumber: 'BDG-4081',
    status: 'active',
    batteryLevel: 88,
    location: 'Setor Sul - Patrulha Alpha',
    lastSync: 'Há 1 min',
    isStreaming: true,
  },
  {
    id: 'CAM-02',
    officerName: 'Ten. Castro',
    badgeNumber: 'BDG-3092',
    status: 'active',
    batteryLevel: 72,
    location: 'Centro - Unidade Móvel 04',
    lastSync: 'Há 3 min',
    isStreaming: true,
  },
  {
    id: 'CAM-03',
    officerName: 'Cb. Oliveira',
    badgeNumber: 'BDG-5512',
    status: 'standby',
    batteryLevel: 94,
    location: 'Base Operacional',
    lastSync: 'Há 15 min',
    isStreaming: false,
  },
  {
    id: 'CAM-04',
    officerName: 'Sd. Rocha',
    badgeNumber: 'BDG-7721',
    status: 'offline',
    batteryLevel: 12,
    location: 'Setor Norte',
    lastSync: 'Há 2 horas',
    isStreaming: false,
  },
];

const MOCK_ALERTS: DetectionAlert[] = [
  {
    id: 'ALT-101',
    deviceId: 'CAM-01',
    officerName: 'Sgt. Silva',
    type: 'weapon_detected',
    confidence: 0.94,
    timestamp: '17:42:10',
    severity: 'high',
    resolved: false,
  },
  {
    id: 'ALT-102',
    deviceId: 'CAM-02',
    officerName: 'Ten. Castro',
    type: 'license_plate',
    confidence: 0.98,
    timestamp: '17:35:45',
    severity: 'medium',
    resolved: false,
  },
  {
    id: 'ALT-103',
    deviceId: 'CAM-01',
    officerName: 'Sgt. Silva',
    type: 'unusual_motion',
    confidence: 0.82,
    timestamp: '17:15:02',
    severity: 'low',
    resolved: true,
  },
];

const MOCK_STATS: SystemStats = {
  activeCameras: 12,
  totalAlertsToday: 38,
  processedHours: 142.5,
  aiLatencyMs: 42,
};

// Simulador de API assíncrona
export const apiService = {
  async getDevices(): Promise<BodyCamDevice[]> {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_CAMERAS), 300));
  },

  async getAlerts(): Promise<DetectionAlert[]> {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_ALERTS), 300));
  },

  async getStats(): Promise<SystemStats> {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_STATS), 300));
  },
};

