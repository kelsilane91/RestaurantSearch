import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer AHlP9xvbcDp7k9ObhA2TSf1gt6-6U6tpzXtK3wVafFGOJ0A0qLP7TYU6mnUDczjhOVaixJQ8qrbi4f6GJCOLiXn8mnbksAK_VWMAbW_BHbjKJAEQhBEIYr9jC1jaX3Yx",
  },
});

// Client ID
// 9ab-zK25N_p5a_eKt3Ls0w

// API Key
