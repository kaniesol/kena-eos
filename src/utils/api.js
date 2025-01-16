export const createAgent = async (framework, agentDetails) => {
  try {
    const response = await fetch(`/api/${framework}/createAgent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(agentDetails),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};
