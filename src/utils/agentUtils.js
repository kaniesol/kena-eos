export const validateAgentDetails = (details) => {
  if (!details.agentName || !details.framework) {
    throw new Error("Agent name and framework are required");
  }
};

export const formatAgentData = (data) => {
  return {
    name: data.agentName,
    framework: data.framework,
    createdAt: new Date().toISOString(),
  };
};

export const getAgentStatus = (status) => {
  const statusMap = {
    active: "Active",
    idle: "Idle",
    pending: "Pending",
  };
  return statusMap[status.toLowerCase()] || "Unknown";
};
