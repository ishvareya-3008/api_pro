// components/Helper.js
export const convertTemperature = (temp, unit) => {
  if (unit === "f") {
    return Math.round((temp * 9) / 5 + 32);
  }
  return Math.round(temp);
};

export const getHumidityValue = (level) => {
  if (level < 30) return "Dry";
  if (level < 60) return "Comfortable";
  return "High humidity";
};

export const getWindDirection = (angle) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(angle / 45) % 8];
};

export const getVisibilityValue = (distance) => {
  if (distance >= 10000) return "Excellent";
  if (distance >= 5000) return "Good";
  if (distance >= 2000) return "Moderate";
  return "Poor";
};