import { Position } from "../Models/positions.js";

export const getPositions = async (req, res) => {
  try {
    let positionData = await Position.find({});
    res.json(positionData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions", error });
  }
};
