interface AllFabrics {
  count: number;
  current_page: number;
  last_page: number;
  per_page: number;
  total_records: number;
  items?: Fabric[];
}

interface Fabric {
  relationships?: Relationships;
  id: number;
  name: string;
  image_url: string;
  pattern: string;
  comfort: number;
  ironing: number;
  fabric_composition_label_id: number;
  default_weave: string;
  default_weight: string;
  usage_type: string;
  default_finish: string;
  button_color_id: number;
  thread_color_id: number;
  embroidery_thread_color_id: number;
  white_fabric_id: number;
  sample_book: boolean;
  position_book: number;
  matching: boolean;
  interlining_color: string;
  interlining_softness: string;
  is_shirt_fabric: boolean;
  is_stretch_fabric: boolean;
  is_jersey_fabric: boolean;
  special_description_suffix: string;
  description: string;
  certificate: string;
  gender_suitable_for: string;
  type: string;
  introduced_date: string;
  discontinued_date: string;
  status: string;
  note: string;
  future: string;
  created_at: string;
  updated_at: string;
  delivery_date: string;
  out_of_stock_date: number;
  remaining_shirts: number;
  buttonColor?: any;
  threadColor?: any;
  embroideryThreadColor?: any;
  compositionLabel?: any;
  fabricImages: any[];
  shirtGalleries: any[];
}

interface Relationships {
  buttonColor: string;
  category: string;
  embroideryThreadColor: string;
  fabricCompositionLabel: string;
  rolls: string;
  threadColor: string;
  fabricImage: string;
  shirtGalleryItem: string;
}
