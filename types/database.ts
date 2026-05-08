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
          username: string;
          email: string;
          avatar_url: string | null;
          bio: string | null;
          location: string | null;
          role: Database["public"]["Enums"]["user_role"];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          username: string;
          email: string;
          avatar_url?: string | null;
          bio?: string | null;
          location?: string | null;
          role?: Database["public"]["Enums"]["user_role"];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          username?: string;
          email?: string;
          avatar_url?: string | null;
          bio?: string | null;
          location?: string | null;
          role?: Database["public"]["Enums"]["user_role"];
          updated_at?: string;
        };
        Relationships: [];
      };
      cafes: {
        Row: {
          id: string;
          name: string;
          slug: string;
          handle: string | null;
          description: string | null;
          address: string | null;
          city: string | null;
          latitude: number | null;
          longitude: number | null;
          image_url: string | null;
          logo_url: string | null;
          is_verified: boolean;
          status: Database["public"]["Enums"]["record_status"];
          owner_user_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          handle?: string | null;
          description?: string | null;
          address?: string | null;
          city?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          image_url?: string | null;
          logo_url?: string | null;
          is_verified?: boolean;
          status?: Database["public"]["Enums"]["record_status"];
          owner_user_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["cafes"]["Insert"]>;
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          cafe_id: string;
          name: string;
          slug: string;
          category: Database["public"]["Enums"]["product_category"];
          description: string | null;
          price: number | null;
          image_url: string | null;
          status: Database["public"]["Enums"]["record_status"];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          cafe_id: string;
          name: string;
          slug: string;
          category?: Database["public"]["Enums"]["product_category"];
          description?: string | null;
          price?: number | null;
          image_url?: string | null;
          status?: Database["public"]["Enums"]["record_status"];
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
        Relationships: [];
      };
      posts: {
        Row: {
          id: string;
          user_id: string;
          cafe_id: string;
          product_id: string;
          image_url: string;
          caption: string | null;
          rating: number | null;
          is_hidden: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          cafe_id: string;
          product_id: string;
          image_url: string;
          caption?: string | null;
          rating?: number | null;
          is_hidden?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["posts"]["Insert"]>;
        Relationships: [];
      };
      upranks: {
        Row: {
          id: string;
          user_id: string;
          post_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          post_id: string;
          created_at?: string;
        };
        Update: never;
        Relationships: [];
      };
      comments: {
        Row: {
          id: string;
          user_id: string;
          post_id: string;
          content: string;
          is_hidden: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          post_id: string;
          content: string;
          is_hidden?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          content?: string;
          is_hidden?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };
      suggestions: {
        Row: {
          id: string;
          user_id: string;
          type: Database["public"]["Enums"]["suggestion_type"];
          name: string;
          cafe_id: string | null;
          notes: string | null;
          status: Database["public"]["Enums"]["suggestion_status"];
          created_at: string;
          reviewed_at: string | null;
          reviewed_by: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          type: Database["public"]["Enums"]["suggestion_type"];
          name: string;
          cafe_id?: string | null;
          notes?: string | null;
          status?: Database["public"]["Enums"]["suggestion_status"];
          created_at?: string;
          reviewed_at?: string | null;
          reviewed_by?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["suggestions"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: {
      product_rankings: {
        Row: {
          product_id: string;
          cafe_id: string;
          product_name: string;
          product_slug: string;
          category: Database["public"]["Enums"]["product_category"];
          cafe_name: string;
          cafe_slug: string;
          post_count: number;
          average_rating: number;
          uprank_count: number;
          comment_count: number;
          score: number;
        };
        Relationships: [];
      };
      weekly_product_rankings: {
        Row: {
          product_id: string;
          cafe_id: string;
          product_name: string;
          product_slug: string;
          category: Database["public"]["Enums"]["product_category"];
          cafe_name: string;
          cafe_slug: string;
          recent_post_count: number;
          recent_uprank_count: number;
          recent_comment_count: number;
          weekly_score: number;
        };
        Relationships: [];
      };
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      user_role: "user" | "admin" | "cafe_owner";
      record_status: "active" | "pending" | "rejected";
      product_category:
        | "coffee"
        | "non_coffee"
        | "matcha"
        | "pastry"
        | "dessert"
        | "meal"
        | "other";
      suggestion_type: "cafe" | "product";
      suggestion_status: "pending" | "approved" | "rejected";
      report_target_type: "post" | "comment" | "cafe" | "product";
      report_status: "pending" | "reviewed" | "dismissed";
    };
    CompositeTypes: Record<PropertyKey, never>;
  };
}
