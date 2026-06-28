export type YelpReview = {
  user_profile?: string;
  user_name: string;
  user_location?: string;
  user_review: string;
  user_rating: number;
  user_date: string;
  source: "Yelp";
};

export const YELP_REVIEWS: YelpReview[] = [
  {
    user_profile:
      "https://s3-media0.fl.yelpcdn.com/photo/pz1hJR5O2fPiMuMwgAYbBQ/120s.jpg",
    user_name: "Skai T.",
    user_location: "Redondo Beach, Los Angeles, CA",
    user_review:
      "You have not lived until you have tried these ribs !!!! Very tender and packed with flavor! If you're looking for authentic BBQ with excellent service look no further!",
    user_rating: 5,
    user_date: "2025-01-28",
    source: "Yelp",
  },
  {
    user_profile: "https://s3-media0.fl.yelpcdn.com/photo/GMrWi6KRHvw2xQRGGgYJoQ/120s.jpg",
    user_name: "Kapo K.",
    user_location: "San Diego, CA",
    user_review: `I only get to see them once a year when the Thomas the Train event happens in November
But I think these guys nailed it with their BBQ. The ribs have that snappy texture when you bite into it. Its so nice, it's something I look forward to when I go to that event. Hope to see them next year.

Oh yeah. And the sauce was outstanding as well. I liked the one here way more than some of the well known BBQ places in San Diego.`,
    user_rating: 5,
    user_date: "2023-11-23",
    source: "Yelp",
  },
  {
    user_profile: "https://s3-media0.fl.yelpcdn.com/photo/2dY5hlqXcpWkJXzcdBr_RA/120s.jpg",
    user_name: "Meg M.",
    user_location: "California",
    user_review: `HIGHLY RECOMMEND!! Seriously good BBQ, The tri tip is so tender and juicy packed with flavor and the BBQ pizzas are delicious. They also have the best bbq sauce. Also the service was great the staff were happy and helpful! The train bbq is such a fun addition!`,
    user_rating: 5,
    user_date: "2025-05-19",
    source: "Yelp",
  },
  {
    user_profile: "https://s3-media0.fl.yelpcdn.com/photo/D_dBJmD24ZpNVhx_mda3AA/120s.jpg",
    user_name: "Cheyenne P.",
    user_location: "Rancho Cucamonga, CA",
    user_review: "I have eaten a lot of bbq places in my life, but Ptrains is by far some of the tastiest food I've had! I saw them at rolling loud and asked if they catered. Found out they ALSO have bbq chicken pizza!! Soooo good! Highly recommend if you want great tasting food at your party!!",
    user_rating: 5,
    user_date: "2024-01-24",
    source: "Yelp",
  },
  {
    user_profile: "https://s3-media0.fl.yelpcdn.com/photo/VOIrwrVHEbaZWMkMJLXawQ/120s.jpg",
    user_name: "Darby G.",
    user_location: "Salt Lake City, UT",
    user_review: "PTrains bbq is the best bbq you can find in California! The flavors in the meat seem magical! Sides are great! Also they are very professional and have great service! I highly recommend the beef ribs and smoked Mac and cheese. If you haven't had PTrains BBQ, you're missing out!",
    user_rating: 5,
    user_date: "2024-01-27",
    source: "Yelp",
  },
  {
    user_profile: "https://s3-media0.fl.yelpcdn.com/photo/B9YocWYB3pyjMRzbZ1XuqQ/120s.jpg",
    user_name: "Chantel P.",
    user_location: "Los Angeles, CA",
    user_review: "Ptrains BBQ was the best catering decision I made for my event! Caira's customer service is superior. She was great at communicating up until and the day of my event. All of my guests were impressed and gave outstanding reviews of the food. I ordered the trip tip, ribs, chicken, macaroni and cheese, mashed potatoes and bbq beans and everything was so delicious. My guests are still raving about the bbq and there was plenty of food for all. I will definitely book Ptrains BBQ again.",
    user_rating: 5,
    user_date: "2023-11-12",
    source: "Yelp",
  },
];
