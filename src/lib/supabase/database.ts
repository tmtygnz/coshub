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
            referencedRelation: "defects_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defects_packaging_fkey"
            columns: ["packaging"]
            referencedRelation: "packaging_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defects_placeid_fkey"
            columns: ["placeid"]
            referencedRelation: "places"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defects_product_fkey"
            columns: ["product"]
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
