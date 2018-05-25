interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    rocket: Rocket;
    telemetry: Telemetry;
    reuse: Reuse;
    launch_site: Launchsite;
    launch_success?: any;
    links: Links;
    details?: any;
  }
  
  interface Links {
    mission_patch?: any;
    mission_patch_small?: any;
    reddit_campaign?: string;
    reddit_launch?: any;
    reddit_recovery?: any;
    reddit_media?: any;
    presskit?: any;
    article_link?: any;
    wikipedia?: any;
    video_link?: any;
  }
  
  interface Launchsite {
    site_id: string;
    site_name: string;
    site_name_long: string;
  }
  
  interface Reuse {
    core: boolean;
    side_core1: boolean;
    side_core2: boolean;
    fairings: boolean;
    capsule: boolean;
  }
  
  interface Telemetry {
    flight_club?: any;
  }
  
  interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: Firststage;
    second_stage: Secondstage;
  }
  
  interface Secondstage {
    payloads: Payload[];
  }
  
  interface Payload {
    payload_id: string;
    reused?: boolean;
    customers: string[];
    payload_type: string;
    payload_mass_kg?: number;
    payload_mass_lbs?: number;
    orbit: string;
    cap_serial?: any;
    mass_returned_kg?: any;
    mass_returned_lbs?: any;
    flight_time_sec?: any;
    cargo_manifest?: any;
  }
  
  interface Firststage {
    cores: Core[];
  }
  
  interface Core {
    core_serial?: string;
    flight?: number;
    block?: number;
    reused?: boolean;
    land_success?: any;
    landing_type?: any;
    landing_vehicle?: any;
  }