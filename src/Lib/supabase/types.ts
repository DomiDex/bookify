export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          email: string;
          image_url: string | null;
          is_seller: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          email: string;
          image_url?: string | null;
          is_seller?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          email?: string;
          image_url?: string | null;
          is_seller?: boolean;
          updated_at?: string;
        };
      };
      books: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          author: string;
          cover: string | null;
          genre: string | null;
          pages: number | null;
          stock: number;
          rent_price: number | null;
          sell_price: number | null;
          sold: number;
          isbn: string | null;
          seller_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          author: string;
          cover?: string | null;
          genre?: string | null;
          pages?: number | null;
          stock?: number;
          rent_price?: number | null;
          sell_price?: number | null;
          sold?: number;
          isbn?: string | null;
          seller_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          description?: string | null;
          author?: string;
          cover?: string | null;
          genre?: string | null;
          pages?: number | null;
          stock?: number;
          rent_price?: number | null;
          sell_price?: number | null;
          sold?: number;
          isbn?: string | null;
          seller_id?: string | null;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          total_amount: number;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          total_amount: number;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string | null;
          total_amount?: number;
          status?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string | null;
          book_id: string | null;
          quantity: number;
          price: number;
          type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id?: string | null;
          book_id?: string | null;
          quantity: number;
          price: number;
          type: string;
          created_at?: string;
        };
        Update: {
          order_id?: string | null;
          book_id?: string | null;
          quantity?: number;
          price?: number;
          type?: string;
        };
      };
      rentals: {
        Row: {
          id: string;
          book_id: string | null;
          user_id: string | null;
          start_date: string;
          end_date: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          book_id?: string | null;
          user_id?: string | null;
          start_date: string;
          end_date: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          book_id?: string | null;
          user_id?: string | null;
          start_date?: string;
          end_date?: string;
          status?: string;
          updated_at?: string;
        };
      };
    };
  };
}
