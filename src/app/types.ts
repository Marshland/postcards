export type ServiceType = 'lunch' | 'dinner' | 'unknown';
export type HowKnowUs = 'social' | 'friend' | 'client';
export type postCards = {
  [key: number]: {
    [key: number]: {
      [key: number]: Partial<
        Record<
          ServiceType,
          Array<{
            food: Rating;
            service: Rating;
            location: Rating;
            hospitality: Rating;
            howKnowUs: HowKnowUs;
          }>
        >
      >;
    };
  };
};

export type postCard = {
  year: number;
  month: number;
  day: number;
  serviceType: ServiceType;
  food: number;
  service: number;
  location: number;
  hospitality: number;
  howKnowUs: HowKnowUs;
};

export type Rating = 1 | 2 | 3 | 4 | 5;
