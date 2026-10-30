import { CaseSummary, EvidenceArticle, BodyCamVideo } from '../types/case';

export const CURRENT_CASE: CaseSummary = {
  id: 'case-01',
  caseNumber: '#P21_0001234',
  type: 'Reporting Case',
  status: 'Criminal',
  reportedBy: 'Officer Shane Kelly',
  approvalStatus: 'Not yet submitted',
  formsNeedingApproval: 4,
  nibrsErrors: 0,
  lastUpdated: 'April 12, 21:25',
};

export const MOCK_ARTICLES: EvidenceArticle[] = [
  {
    id: 'art-01',
    itemNumber: 'P3247277282',
    category: 'Evidence',
    status: 'Collected',
    type: 'Firearm',
    location: 'Locker 12',
    thumbnailUrl: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=300&q=80',
    description: 'Semi-automatic 9mm handgun found during stop.',
    chainOfCustody: [
      { timestamp: '2021-04-12 14:45', officer: 'Officer Shane Kelly', action: 'Secured at scene' },
      { timestamp: '2021-04-12 16:30', officer: 'Sgt. Miller', action: 'Logged into Locker 12' },
    ],
  },
];

export const MOCK_VIDEOS: BodyCamVideo[] = [
  {
    id: 'vid-01',
    cameraNumber: '#5650A',
    officerName: 'Shane Kelly',
    date: '04/12/2021',
    preRecordTime: '4:15',
    incidentClipTime: '14:12',
    fullClipTime: '19:27',
    thumbnailUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=640&q=80',
    videoDuration: '19:27',
    transcription: [
      { timestamp: '00:04:15', speaker: 'Officer Shane Kelly', text: 'Central, Unit 412 is 10-23 at 450 Commerce Blvd, contacting subject by the silver pickup.' },
      { timestamp: '00:04:22', speaker: 'Dispatch', text: 'Copy 412, backup Unit 418 en route, ETA 3 minutes.' },
      { timestamp: '00:04:35', speaker: 'Officer Shane Kelly', text: 'Sir, keep your hands where I can see them. Step back toward the rear bumper.' },
      { timestamp: '00:04:48', speaker: 'Subject', text: 'Is there a problem officer? I am just getting into my truck.' },
      { timestamp: '00:05:02', speaker: 'Officer Shane Kelly', text: 'Keep your hands on the vehicle. Do not reach into your waistband.', isFlagged: true },
      { timestamp: '00:05:14', speaker: 'Officer Shane Kelly', text: 'Central, subject has a concealed firearm in front right waistband. Code 4 for now, subject complying.', isFlagged: true },
    ],
    aiDetections: [
      { time: '04:58', label: 'Concealed Firearm Detected', confidence: 0.96, severity: 'high' },
      { time: '05:01', label: 'License Plate 7XYZ890 Verified', confidence: 0.99, severity: 'low' },
      { time: '05:10', label: 'Hand Movement Toward Waistband', confidence: 0.89, severity: 'medium' },
    ],
  },
];

