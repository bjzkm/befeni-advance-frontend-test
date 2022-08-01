interface shirtGallery {
  items: Item[];
  count: number;
  current_page: number;
  last_page: number;
  per_page: number;
  total_records: number;
}

interface Item {
  relationships: Relationships;
  id: number;
  gallery_added_date: string;
  gender: string;
  thread_color_id: number;
  button_color_id: number;
  fabric_name: string;
  pattern: string;
  fabric_type: string;
  likes: number;
  wishlists: number;
  has_contrast: boolean;
  other_fabrics: Otherfabrics;
  shirt_title: string;
  fabric_composition_label: string;
  price: Price;
  is_sotw: boolean;
  is_current_sotw: boolean;
  sotw_dates: Sotwdates;
  threadColor: ThreadColor;
  buttonColor: ButtonColor;
  shirtImages: ShirtImage[];
}

interface ShirtImage {
  relationships: Relationships2;
  variant: number;
  size: string;
  image_url: string;
}

interface ButtonColor {
  relationships: Relationships2;
  id: number;
  title_en: string;
  title_th: string;
  title_de: string;
  title_translatable: string;
  hex_code: string;
  internal_number: number;
  order_color: number;
  created_at: string;
  updated_at: string;
}

interface ThreadColor {
  relationships: Relationships2;
  id: number;
  legacy_id: string;
  title_en: string;
  title_de: string;
  title_th: string;
  title_translatable: string;
  hex_code: string;
  internal_number: number;
  embroidery_only: boolean;
  chooseable: boolean;
  created_at: string;
  updated_at: string;
}

interface Relationships2 {
}

interface Sotwdates {
  start?: any;
  end?: any;
  start_hour?: any;
  end_hour?: any;
}

interface Price {
  reason: string;
  value: number;
}

interface Otherfabrics {
  contrast_collar_fabric: string;
  contrast_cuff_fabric: string;
}

interface Relationships {
  threadColor: string;
  buttonColor: string;
  shirtImage: string;
}