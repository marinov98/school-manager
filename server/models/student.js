module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
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
    }
  });

  Student.associate = models => {};

  return Student;
};
