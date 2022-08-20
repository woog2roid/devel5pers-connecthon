/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          level?: parameters["rowFilter.profiles.level"];
          name?: parameters["rowFilter.profiles.name"];
          profile_image?: parameters["rowFilter.profiles.profile_image"];
          description?: parameters["rowFilter.profiles.description"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          level?: parameters["rowFilter.profiles.level"];
          name?: parameters["rowFilter.profiles.name"];
          profile_image?: parameters["rowFilter.profiles.profile_image"];
          description?: parameters["rowFilter.profiles.description"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          created_at?: parameters["rowFilter.profiles.created_at"];
          level?: parameters["rowFilter.profiles.level"];
          name?: parameters["rowFilter.profiles.name"];
          profile_image?: parameters["rowFilter.profiles.profile_image"];
          description?: parameters["rowFilter.profiles.description"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profile_badge_mappings": {
    get: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.profile_badge_mappings.created_at"];
          profile_id?: parameters["rowFilter.profile_badge_mappings.profile_id"];
          badge_id?: parameters["rowFilter.profile_badge_mappings.badge_id"];
          count?: parameters["rowFilter.profile_badge_mappings.count"];
          is_representative?: parameters["rowFilter.profile_badge_mappings.is_representative"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profile_badge_mappings"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profile_badge_mappings */
          profile_badge_mappings?: definitions["profile_badge_mappings"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.profile_badge_mappings.created_at"];
          profile_id?: parameters["rowFilter.profile_badge_mappings.profile_id"];
          badge_id?: parameters["rowFilter.profile_badge_mappings.badge_id"];
          count?: parameters["rowFilter.profile_badge_mappings.count"];
          is_representative?: parameters["rowFilter.profile_badge_mappings.is_representative"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          created_at?: parameters["rowFilter.profile_badge_mappings.created_at"];
          profile_id?: parameters["rowFilter.profile_badge_mappings.profile_id"];
          badge_id?: parameters["rowFilter.profile_badge_mappings.badge_id"];
          count?: parameters["rowFilter.profile_badge_mappings.count"];
          is_representative?: parameters["rowFilter.profile_badge_mappings.is_representative"];
        };
        body: {
          /** profile_badge_mappings */
          profile_badge_mappings?: definitions["profile_badge_mappings"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/posts": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.posts.id"];
          created_at?: parameters["rowFilter.posts.created_at"];
          category?: parameters["rowFilter.posts.category"];
          description?: parameters["rowFilter.posts.description"];
          image?: parameters["rowFilter.posts.image"];
          author_id?: parameters["rowFilter.posts.author_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["posts"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** posts */
          posts?: definitions["posts"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.posts.id"];
          created_at?: parameters["rowFilter.posts.created_at"];
          category?: parameters["rowFilter.posts.category"];
          description?: parameters["rowFilter.posts.description"];
          image?: parameters["rowFilter.posts.image"];
          author_id?: parameters["rowFilter.posts.author_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.posts.id"];
          created_at?: parameters["rowFilter.posts.created_at"];
          category?: parameters["rowFilter.posts.category"];
          description?: parameters["rowFilter.posts.description"];
          image?: parameters["rowFilter.posts.image"];
          author_id?: parameters["rowFilter.posts.author_id"];
        };
        body: {
          /** posts */
          posts?: definitions["posts"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/badges": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.badges.id"];
          name?: parameters["rowFilter.badges.name"];
          iconUrl?: parameters["rowFilter.badges.iconUrl"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["badges"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** badges */
          badges?: definitions["badges"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.badges.id"];
          name?: parameters["rowFilter.badges.name"];
          iconUrl?: parameters["rowFilter.badges.iconUrl"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.badges.id"];
          name?: parameters["rowFilter.badges.name"];
          iconUrl?: parameters["rowFilter.badges.iconUrl"];
        };
        body: {
          /** badges */
          badges?: definitions["badges"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: integer
     * @default 0
     */
    level: number;
    /**
     * Format: text
     * @default NewBie
     */
    name: string;
    /** Format: text */
    profile_image?: string;
    /** Format: text */
    description?: string;
  };
  profile_badge_mappings: {
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    profile_id: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `badges.id`.<fk table='badges' column='id'/>
     */
    badge_id: number;
    /** Format: bigint */
    count: number;
    /**
     * Format: boolean
     * @default false
     */
    is_representative: boolean;
  };
  posts: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: text
     * @default NULL
     */
    category?: string;
    /** Format: text */
    description?: string;
    /** Format: ARRAY */
    image: unknown[];
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    author_id: string;
  };
  badges: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name?: string;
    /** Format: text */
    iconUrl?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.created_at": string;
  /** Format: integer */
  "rowFilter.profiles.level": string;
  /** Format: text */
  "rowFilter.profiles.name": string;
  /** Format: text */
  "rowFilter.profiles.profile_image": string;
  /** Format: text */
  "rowFilter.profiles.description": string;
  /** @description profile_badge_mappings */
  "body.profile_badge_mappings": definitions["profile_badge_mappings"];
  /** Format: timestamp with time zone */
  "rowFilter.profile_badge_mappings.created_at": string;
  /** Format: uuid */
  "rowFilter.profile_badge_mappings.profile_id": string;
  /** Format: bigint */
  "rowFilter.profile_badge_mappings.badge_id": string;
  /** Format: bigint */
  "rowFilter.profile_badge_mappings.count": string;
  /** Format: boolean */
  "rowFilter.profile_badge_mappings.is_representative": string;
  /** @description posts */
  "body.posts": definitions["posts"];
  /** Format: bigint */
  "rowFilter.posts.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.posts.created_at": string;
  /** Format: text */
  "rowFilter.posts.category": string;
  /** Format: text */
  "rowFilter.posts.description": string;
  /** Format: ARRAY */
  "rowFilter.posts.image": string;
  /** Format: uuid */
  "rowFilter.posts.author_id": string;
  /** @description badges */
  "body.badges": definitions["badges"];
  /** Format: bigint */
  "rowFilter.badges.id": string;
  /** Format: text */
  "rowFilter.badges.name": string;
  /** Format: text */
  "rowFilter.badges.iconUrl": string;
}

export interface operations {}

export interface external {}
