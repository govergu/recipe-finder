export const fetchRecipes = async (query) => {
    const APP_ID = import.meta.env.VITE_APP_ID;
    const APP_KEY = import.meta.env.VITE_APP_KEY;
    const USER_ID = "kritish"; // Replace this with the required user ID
  
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      {
        headers: {
          "Edamam-Account-User": USER_ID,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
  
    return response.json();
  };
  
