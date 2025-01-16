export default async function handler(req, res) {
  if (req.method === "GET") {
    const mockAgents = [
      { name: "Agent Alpha", framework: "Griffain", status: "Active" },
      { name: "Agent Beta", framework: "Arc", status: "Idle" },
    ];
    res.status(200).json(mockAgents);
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
