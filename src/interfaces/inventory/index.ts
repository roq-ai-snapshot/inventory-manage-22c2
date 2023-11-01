import { ProductInterface } from 'interfaces/product';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  quantity?: number;
  reorder_level?: number;
  product_id: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  business?: BusinessInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  business_id?: string;
}
