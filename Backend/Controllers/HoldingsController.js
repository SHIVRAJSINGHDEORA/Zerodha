import { Holding } from "../Models/holdings.js";

export const getHoldings = async (req, res) => {
  try {
    let holdingData = await Holding.find({});
    res.json(holdingData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holdings", error });
  }
};

export const buyHoldings = async (req, res) => {
  try {
    let newOrder = {
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
    };

    let holding = await Holding.findOne({ name: newOrder.name });

    if (!holding) {
      return res.json("No such holding exist !!");
    }

    let oldQty = Number(holding.qty);
    let oldAvg = Number(holding.avg);
    let buyQty = Number(newOrder.qty);
    let buyPrice = Number(newOrder.price);

    let newQty = oldQty + buyQty;

    let newAvg = (oldQty * oldAvg + buyQty * buyPrice) / newQty;

    await Holding.updateOne(
      { name: newOrder.name },
      {
        $set: {
          qty: newQty,
          avg: Number(newAvg.toFixed(2)),
        },
      },
    );

    res.josn("holdings updated");
  } catch (error) {
    res.status(500).json({ message: "Error updating holdings", error });
  }
};

export const sellHoldings = async (req, res, next) => {
  try {
    const { qty, name, price } = req.body;


    const holding = await Holding.findOne({ name: name });

    if (!holding) {
      return res.json({ message: "No such a Holding exist !!" });
    }


    let oldQty = Number(holding.qty);
    let oldAvg = Number(holding.avg);
    let sellQty = Number(qty);
    let sellPrice = Number(price);

    if(oldQty <= sellQty){
        return res.json({message : "Trade can't be posible !!"});
    }

    const newQty = oldQty - sellQty;
    const newAvg = oldAvg;

    await Holding.updateOne(
      { name: name },
      {
        $set: {
          qty: newQty,
          avg: Number(newAvg.toFixed(2)),
        },
      },
    );
    res.json("Holdings Updated !");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating holdings", error });
  }
};
