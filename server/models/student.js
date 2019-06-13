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
    }
  });

  Student.associate = models => {
    Student.belongsTo(models.Campus, {
      foreignKey: "campusId",
      onDelete: "CASCADE"
    });
  };
  return Student;
};
