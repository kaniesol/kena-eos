export default async function handler(req, res) {
  if (req.method === "POST") {
    const { agentName, profile } = req.body;
    res.status(200).json({ message: `Agent ${agentName} created on Arc.` });
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
