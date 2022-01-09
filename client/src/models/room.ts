export interface Room {
  id?: string;
  name: string;
  description: string;
  type:
    | 'Living Room'
    | 'Bedroom'
    | 'Kitchen'
    | 'Dining Room'
    | 'Family Room'
    | 'Guest Room'
    | 'Bathroom';
}
