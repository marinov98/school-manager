"use strict";
module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable("Campuses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      imageURL: {
        type: DataTypes.STRING,
        defaultValue: "/img/default_campus.jpg"
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }),
  down: (queryInterface /* , DataTypes */) =>
    queryInterface.dropTable("Campuses")
};
