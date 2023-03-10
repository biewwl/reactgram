const PostsSaved = (sequelize, DATA_TYPE) => {
  const PostSaved = sequelize.define(
    "PostSaved",
    {
      id: {
        type: DATA_TYPE.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      postId: {
        type: DATA_TYPE.INTEGER,
        allowNull: false,
        field: "post_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "Post",
          key: "id",
        },
      },
      userId: {
        type: DATA_TYPE.INTEGER,
        allowNull: false,
        field: "user_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "posts_saved",
    }
  );

  PostSaved.associate = (models) => {
    models.PostSaved.belongsTo(models.User, {
      as: "userSaved",
      through: "PostSaved",
      foreignKey: "userId",
    });
    models.PostSaved.belongsTo(models.Post, {
      as: "postSaved",
      through: "PostSaved",
      foreignKey: "postId",
    });
  };

  return PostSaved;
};

module.exports = PostsSaved;
