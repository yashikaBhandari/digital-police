const API_BASE_URL = "http://localhost:3002";

// Function to create a new zone
export const createZone = async (zoneData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/zone/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zoneData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Parse JSON from the response
    return data; // Return the data part of the response
  } catch (error) {
    console.error("Error creating zone:", error);
    throw error; // Propagate the error for further handling
  }
};

// Function to get zone data based on latitude and longitude
export const getZone = async (reqData) => {
  try {
    // console.log("dkjsfff");
    const response = await fetch(`${API_BASE_URL}/api/zone/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Parse JSON from the response
    // console.log(data); // Log the data part of the response for debugging
    return data; // Return the data part of the response
  } catch (error) {
    console.error("Error fetching zone data:", error);
    throw error; // Propagate the error for further handling
  }
};
