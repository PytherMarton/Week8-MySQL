const { Sequelize, DataTypes, Op } = require("sequelize");

const connection = new Sequelize("master32", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const Card = connection.define(
  "Card",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cost: {
      type: DataTypes.INTEGER,
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
    //     name: "Meteor Golem",
    //     cost: 7,
    //     description: "When this enters the battelfield...."
    // })

    // for(let card of await Card.findAll()) {
    //     console.log(`Card: ${card.name} -> ${card.description}`);
    // };

    // for(let card of await Card.findAll({where: {name:"Stuffy Doll"}})) {
    //     console.log(`Card: ${card.name} -> ${card.description}`);
    // };

    const results = await Card.findAll({
        attributes: ["name", "description"],
        where: {
            [Op.or]: [
                {name: "Stuffy Doll"},
                {cost: 7}
            ]
        }
    });

    for(let card of results) {
        console.log(`Card: ${card.name} -> ${card.description}`);
    }

    await Card.update({name: "Precursor Golem"}, {
        where: {
            name: "Meteor Golem"
        }
    });

    for(let card of await Card.findAll()) {
        console.log(`Card: ${card.name} -> ${card.description}`);
    }

    await Card.destroy({
        where: {
            [Op.or]: [
                {name: "Stuffy Doll"},
                {name: "Precursor Golem"}
            ]
        }
    });

    for(let card of await Card.findAll()) {
        console.log(`Card: ${card.name} -> ${card.description}`);
    }


    console.log("Connection has been successfully estabilished.");
  } catch (error) {
    console.log("Unable to connect to the databsase: ", error);
  }

  await connection.close();
  process.exit();
};

main();
