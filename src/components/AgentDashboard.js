import React, { useState, useEffect } from "react";
import { createAgent } from "../utils/api";

const AgentDashboard = () => {
  const [agents, setAgents] = useState([]);
  const [newAgent, setNewAgent] = useState({ name: "", framework: "" });

  const fetchAgents = async () => {
    const response = await fetch("/api/agents/list");
    const data = await response.json();
    setAgents(data);
  };

  const handleAgentCreation = async () => {
    try {
      const response = await createAgent(newAgent.framework, {
        agentName: newAgent.name,
        profile: {},
      });
      alert(response.message);
      fetchAgents();
    } catch (error) {
      console.error("Failed to create agent:", error);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div>
      <h2>Agent Dashboard</h2>
      <div>
        <h3>Create a New Agent</h3>
        <input
          type="text"
          placeholder="Agent Name"
          value={newAgent.name}
          onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
        />
        <select
          value={newAgent.framework}
          onChange={(e) => setNewAgent({ ...newAgent, framework: e.target.value })}
        >
          <option value="">Select Framework</option>
          <option value="Griffain">Griffain</option>
          <option value="Arc">Arc</option>
        </select>
        <button onClick={handleAgentCreation}>Create Agent</button>
      </div>
      <div>
        <h3>Your Agents</h3>
        <ul>
          {agents.map((agent, index) => (
            <li key={index}>
              {agent.name} - {agent.framework} ({agent.status})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgentDashboard;
