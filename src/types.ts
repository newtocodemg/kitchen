export interface KitchenStyle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  fallbackSrc?: string;
  features: string[];
  materials: string[];
  hardware: string;
}

export interface ConsultationLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  preferredStyleId: string;
  layoutShape: string;
  timeline: string;
  notes?: string;
  submittedAt: string;
  dateSlot?: string;
  timeSlot?: string;
}

export interface DesignGalleryItem {
  id: string;
  title: string;
  description: string;
  style: string;
  image: string;
  specs: {
    material: string;
    hardware: string;
    lighting: string;
    finishes: string;
  };
}
