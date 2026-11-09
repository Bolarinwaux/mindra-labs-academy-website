export interface EnquiryFormData {
  parentName: string;
  email: string;
  phone: string;
  country: string;
  ageGroup: string;
  programme: string;
  format: string;
  message?: string;
  consent: boolean;
}

export interface EnquirySubmissionResponse {
  success: boolean;
  message: string;
}

