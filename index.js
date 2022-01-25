require("dotenv").config();
const { Sequelize, DataTypes, Op } = require("sequelize");

// const connection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: process.env.DB_DIALECT
// });

const connection = new Sequelize(process.env.DB_URI);

const Card = connection.define(
  "Card",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    types: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    manaCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexed: [{ unique: true, fields: ["name"] }],
  }
);

const main = async () => {
  try {
    await connection.authenticate();
    await Card.sync({ alter: true });


    // Create and save in 2 steps.

    // const stuffy_doll = Card.build({
    //   name: "Stuffy Doll",
    //   cost: 5,
    //   description:
    //     "Indestructible\n blallbkl alkfpsap spadpasldlpsa sapdllspadlsad",
    // });

    // await stuffy_doll.save();

    // Create and save in 1 step.

    // await Card.create({
    //     name: "Gaseous Form",
    //     manaCost: 3,
    //     types: "Enchantment — Aura",
    //     description: "Prevent all combat damage that would be dealt to and dealt by enchanted creature.",
    //     rarity: "Common"
    // })

    for(let card of await Card.findAll()) {
        // console.log(`Card: ${card.name} -> ${card.description}`);
        const cards = await Card.findAll({});
        console.log(cards.every(user => user instanceof Card));
        console.log("All Cards: ", JSON.stringify(cards, null, 2));
    };

    // for(let card of await Card.findAll({where: {name:"Stuffy Doll"}})) {
    //     console.log(`Card: ${card.name} -> ${card.description}`);
    // };

    // const results = await Card.findAll({
    //     attributes: ["name", "description"],
    //     where: {
    //         [Op.or]: [
    //             {name: "Stuffy Doll"},
    //             {cost: 7}
    //         ]
    //     }
    // });

    // for(let card of results) {
    //     console.log(`Card: ${card.name} -> ${card.description}`);
    // }

    // await Card.update({name: "Precursor Golem"}, {
    //     where: {
    //         name: "Meteor Golem"
    //     }
    // });

    // for(let card of await Card.findAll()) {
    //     console.log(`Card: ${card.name} -> ${card.description}`);
    // }

    // await Card.destroy({
    //     where: {
    //         [Op.or]: [
    //             {name: "Stuffy Doll"},
    //             {name: "Precursor Golem"}
    //         ]
    //     }
    // });

    // for(let card of await Card.findAll()) {
    //     console.log(`Card: ${card.name} -> ${card.description}`);
    // }

    // Deletes the Card details but keeps the Card.
    // await Card.truncate(); 


    console.log("Connection has been successfully estabilished.");
  } catch (error) {
    console.log("Unable to connect to the databsase: ", error);
  }

  await connection.close();
  process.exit();
};

main();
