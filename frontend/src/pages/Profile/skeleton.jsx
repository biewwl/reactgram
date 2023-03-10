import React from "react";
import { connect } from "react-redux";
import ProfileConfigMenu from "../../components/ProfileConfigMenu";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import config from "../../app_config.json";
import "./styles/ProfileSkeleton.css";
import "./styles/Profile-mobile.css";

function ProfileSkeleton({ isBlocked, profileMenuProps }) {
  const { Profile } = config["app.components"];
  const icons = Profile["actions.icons"];

  const { profile: nick } = useParams();

  let openConfigMenu;
  let handleOpenConfig;
  let profileOwnerIsBlocked;

  if (profileMenuProps) {
    openConfigMenu = profileMenuProps.openConfigMenu;
    handleOpenConfig = profileMenuProps.handleOpenConfig;
    profileOwnerIsBlocked = profileMenuProps.profileOwnerIsBlocked;
  }

  const actionBlock = profileOwnerIsBlocked ? "unblock" : "block";

  return (
    <>
      <div className={`div-page-content profile-skeleton ${actionBlock}`}>
        {isBlocked && profileOwnerIsBlocked && (
          <div className="profile_blocked-feedback">
            <Icon icon="fluent:presence-blocked-20-regular" />
            <span>
              <strong>{nick}</strong> is blocked!
            </span>
          </div>
        )}
        <main className="page_profile">
          <div className="cover">
            <div className="img"></div>
          </div>
          <section className="profile_content">
            <div className="profile_avatar-and-user">
              <div className="img"></div>
              <span className="name">
                <span>{name}</span>
              </span>
              <span className="nick"></span>
            </div>
            <div className="profile_actions">
              {isBlocked && (
                <button
                  className="profile_action-btn config"
                  onClick={handleOpenConfig}
                >
                  <Icon icon={icons["config"]} />
                </button>
              )}
            </div>
          </section>
          {openConfigMenu && (
            <ProfileConfigMenu profileMenuProps={profileMenuProps} />
          )}
        </main>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  accountDataREDUX: state.userReducer.accountData,
  token: state.userReducer.token,
});

export default connect(mapStateToProps)(ProfileSkeleton);

ProfileSkeleton.propTypes = {
  token: PropTypes.string,
  profileMenuProps: PropTypes.shape(),
  isBlocked: PropTypes.bool,
};
