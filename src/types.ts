export interface SmuItem {
  id: string;
  name: string;
  alias: string;
  category: 'Negeri' | 'Swasta';
  description: string;
  longDescription: string;
  achievements: string[];
  stats: {
    established?: string;
    accreditation?: string;
    studentCount?: string;
  };
}

export interface KampusItem {
  id: string;
  name: string;
  alias: string;
  category: 'PTN' | 'PTS' | 'PTN Keagamaan';
  description: string;
  longDescription: string;
  iconType: 'phinisi' | 'academic' | 'islamic' | 'traditional' | 'scale';
  keyFeature: string;
  established: string;
  accreditation: string;
  dominantFaculty: string;
}
