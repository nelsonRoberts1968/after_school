module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define('class', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    category: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Class;
};
