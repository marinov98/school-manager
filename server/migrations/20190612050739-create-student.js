"use strict";
module.exports = {
  up: (queryInterface, DataTypes) =>
    queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      imageURL: {
        type: DataTypes.STRING,
        defaultValue: "/img/default_student.jpg"
      },
      gpa: {
        type: DataTypes.DECIMAL,
        validate: {
          min: 0.0,
          max: 4.0
        }
      },
      campus: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      campusId: {
        // The column name that will be in the Students table
        type: DataTypes.INTEGER,
        references: {
          model: "Campuses", // The table that will be looked at
          key: "id" // to find the key to build a reference with
        }
      }
    }),
  down: (queryInterface /* , DataTypes */) =>
    queryInterface.dropTable("Students")
};
