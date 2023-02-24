const UserModel = (sequelize, DATA_TYPE) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DATA_TYPE.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DATA_TYPE.STRING(30),
        allowNull: false,
      },
      nick: {
        type: DATA_TYPE.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DATA_TYPE.STRING(30),
        allowNull: false,
      },
      password: {
        type: DATA_TYPE.STRING(50),
        allowNull: false,
      },
      avatarUrl: {
        type: DATA_TYPE.STRING,
        field: "avatar_url",
        defaultValue:
          "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png",
      },
      coverUrl: {
        type: DATA_TYPE.STRING,
        field: "cover_url",
        defaultValue:
          "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png",
      },
      accountPrivacy: {
        type: DATA_TYPE.STRING,
        field: "account_privacy",
        defaultValue: "public",
      },
      accountVerified: {
        type: DATA_TYPE.STRING,
        field: "account_verified",
        defaultValue: "none",
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  return User;
};

module.exports = UserModel;
