export type ColumnConfig  = {
  field: string;
  header: string;
  sortable?: boolean;
  width?: string;
  type?: 'text' | 'badge' | 'button' | 'icon' | 'custom' | 'select';
  template?: string;
  styleClass?: string;
  isImage?: boolean;
  dataType?: 'string' | 'number' | 'date' | 'boolean';
}
