export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      defects: {
        Row: {
          app_version: number | null
          batch: string | null
          date: string | null
          dateEncoded: string | null
          defectDescription: string | null
          defPrebTp: number | null
          encodedBy: string | null
          id: number
          isDev: boolean | null
          packaging: number | null
          placeid: number | null
          product: number | null
          quantity: number | null
        }
        Insert: {
          app_version?: number | null
          batch?: string | null
          date?: string | null
          dateEncoded?: string | null
          defectDescription?: string | null
          defPrebTp?: number | null
          encodedBy?: string | null
          id?: number
          isDev?: boolean | null
          packaging?: number | null
          placeid?: number | null
          product?: number | null
          quantity?: number | null
        }
        Update: {
          app_version?: number | null
          batch?: string | null
          date?: string | null
          dateEncoded?: string | null
          defectDescription?: string | null
          defPrebTp?: number | null
          encodedBy?: string | null
          id?: number
          isDev?: boolean | null
          packaging?: number | null
          placeid?: number | null
          product?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "defects_defPrebTp_fkey"
            columns: ["defPrebTp"]
            isOneToOne: false
            referencedRelation: "defects_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defects_packaging_fkey"
            columns: ["packaging"]
            isOneToOne: false
            referencedRelation: "packaging_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defects_placeid_fkey"
            columns: ["placeid"]
            isOneToOne: false
            referencedRelation: "places"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defects_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      defects_type: {
        Row: {
          id: number
          name: string | null
          value: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          value?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          value?: string | null
        }
        Relationships: []
      }
      email_whitelist: {
        Row: {
          email: string | null
          id: number
          rights: number | null
        }
        Insert: {
          email?: string | null
          id?: number
          rights?: number | null
        }
        Update: {
          email?: string | null
          id?: number
          rights?: number | null
        }
        Relationships: []
      }
      packaging_type: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      places: {
        Row: {
          areaName: string | null
          id: number
        }
        Insert: {
          areaName?: string | null
          id?: number
        }
        Update: {
          areaName?: string | null
          id?: number
        }
        Relationships: []
      }
      products: {
        Row: {
          id: number
          productName: string | null
        }
        Insert: {
          id?: number
          productName?: string | null
        }
        Update: {
          id?: number
          productName?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
          user_privileges: number | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
          user_privileges?: number | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
          user_privileges?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      updates: {
        Row: {
          id: number
          update_log: string | null
          update_version: number | null
        }
        Insert: {
          id?: number
          update_log?: string | null
          update_version?: number | null
        }
        Update: {
          id?: number
          update_log?: string | null
          update_version?: number | null
        }
        Relationships: []
      }
      user: {
        Row: {
          email: string | null
          firstName: string | null
          id: number
          lastName: string | null
          profilePictureUrl: string | null
        }
        Insert: {
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          profilePictureUrl?: string | null
        }
        Update: {
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          profilePictureUrl?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      dmetaphone: {
        Args: {
          "": string
        }
        Returns: string
      }
      dmetaphone_alt: {
        Args: {
          "": string
        }
        Returns: string
      }
      soundex: {
        Args: {
          "": string
        }
        Returns: string
      }
      text_soundex: {
        Args: {
          "": string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
