export type ServiceType = 'lunch' | 'dinner' | 'unknown';
export type HowKnowUs = 'social' | 'friend' | 'client';
export type YearPostcards = Record<number, MonthPostcards>;
export type MonthPostcards = Record<number, DayPostcards>;
export type DayPostcards = Record<number, ServiceTypePostcards>;
export type ServiceTypePostcards = Partial<
  Record<
    ServiceType,
    Array<{
      food: Rating;
      service: Rating;
      location: Rating;
      hospitality: Rating;
      howKnowUs: HowKnowUs;
      email?: string;
      phone?: string;
    }>
  >
>;

export type Postcard = {
  year: number;
  month: number;
  day: number;
  serviceType: ServiceType;
  food: Rating;
  service: Rating;
  location: Rating;
  hospitality: Rating;
  howKnowUs: HowKnowUs;
  email?: string;
  phone?: string;
};

export type Rating = 1 | 2 | 3 | 4 | 5;
