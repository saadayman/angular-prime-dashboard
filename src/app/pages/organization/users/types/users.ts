export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  active_rfid: boolean;
  rfid_number: string;
  role: string;
  department: string;
  fleet: string;
}
export interface UserResponse {
  success: boolean;
  data: User;
}
