import { FormInput, Modal, UserDp } from "components";
import { useAuth } from "context/AuthContext";
import { useState } from "react";
import EditProfileStyles from "./EditProfile.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera} from "react-feather";
import { editInputs } from "utils/formInputsData";
import {avatars} from "utils/avatarsData";
import { useUser } from "context/UserContext";

const EditProfile = () => {
  const { userInfo } = useAuth();
  const {handleEditUser} = useUser();
  const [profileValues, setProfileValues] = useState({
    dpUrl: "",
    name: userInfo?.name,
    username: userInfo?.username,
    bio: userInfo?.bio,
    website: userInfo?.website,
  });
  const [showAvatars, setShowAvatars] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    setProfileValues((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    handleEditUser(profileValues);
    navigate(-1);
  };

  const handleSelectedImage = (e) => {
    setProfileValues((prevInputs) => ({
      ...prevInputs,
      dpUrl: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleAvatarSelect = (avatarLink) => {
    setProfileValues(prevInputs => ({...prevInputs, dpUrl: avatarLink}));
    setShowAvatars(false);
  }

  const handleEditDiscard = () => {
    navigate(-1);
  };

  return (
    <div className="content-container">
      <div className={EditProfileStyles.header}>
        <ArrowLeft onClick={handleEditDiscard} />
        <h2>Edit Profile</h2>
      </div>
      <form className={EditProfileStyles.form} onSubmit={handleEditProfile}>
        <div className={EditProfileStyles.imageContainer}>
          <UserDp
            dpUrl={profileValues.dpUrl || userInfo?.dpUrl}
            username={userInfo?.username}
            dimensions={EditProfileStyles.dp}
          />

          <label className={EditProfileStyles.dpInput}>
            <Camera className={EditProfileStyles.cameraIcon} />
            <input
              type="file"
              accept="image/*"
              onChange={handleSelectedImage}
            />
          </label>
        </div>

        <div className={EditProfileStyles.selectAvatar}>
          <button
          type="button"
            className={EditProfileStyles.avatarButton}
            onClick={() => setShowAvatars(true)}
          >
            Select Avatar
          </button>

          {showAvatars && <Modal setShowModal={setShowAvatars}>
            <>
            <h3 className={EditProfileStyles.avatarSectionHead}>Avatars</h3>
            <ul className={EditProfileStyles.avatarsContainer}>
              {avatars.map((avatar, index) => (
                <li key={index} onClick={() => handleAvatarSelect(avatar)}>
                  <UserDp dpUrl={avatar} username="avatar" dimensions={EditProfileStyles.avatarsDp}/>
                </li>
              ))}
            </ul>
            </>
            
            </Modal>}
        </div>

        {editInputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={profileValues[input.name]}
            onChange={onChange}
          />
        ))}

        <div className={EditProfileStyles.buttonsContainer}>
          <button
          type="button"
            className={EditProfileStyles.discard}
            onClick={handleEditDiscard}
          >
            Discard
          </button>
          <button className={EditProfileStyles.save}>Save</button>
        </div>
      </form>
    </div>
  );
};

export { EditProfile };

// {
//   id: "1",
//   name: "dpUrl",
//   type: "file",
//   accept: "image/*",
// },
