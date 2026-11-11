export type PlacementProgramme = 'Programming' | 'Artificial Intelligence';

export interface PlacementProgrammeRecommendation {
  programme: PlacementProgramme;
  levelRange: string;
  feeNgn: number;
}

export interface PlacementResult {
  childName: string;
  parentName: string;
  ageRange: '7-12' | '13-18';
  programmes: PlacementProgrammeRecommendation[];
  totalFeeNgn: number;
}
