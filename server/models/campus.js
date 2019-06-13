module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define("Campus", {
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
    }
  });

  Campus.associate = models => {
    Campus.hasMany(models.Student, {
      foreignKey: "campusId" // Campus has many Students that use 'campusId' as a foreign key
    });
  };
  return Campus;
};
