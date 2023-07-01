import { Modal } from "components/modal/Modal";
import { UserDp } from "components/userDp/UserDp";
import { useAuth } from "context/AuthContext";
import CreatePostStyles from "./CreatePost.module.css";
import { Image, Video, Smile, X } from "react-feather";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { usePosts } from "context/PostsContext";

const CreatePost = ({ setShowCreatePost }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [postInputValues, setPostInputValues] = useState({
    content: "",
    mediaUrl: {
      image: "",
      video: "",
    },
  });
  const [previewLink, setPreviewLink] = useState({
    image: "",
    video: "",
  });

  const { userInfo } = useAuth();
  const { handleUploadPost } = usePosts();

  const handleImageSelection = (e) => {
    const selectedImage = e.target.files[0];
    const maxSizeInBytes = 10 * 1024 * 1024; // 5MB

    if (selectedImage.size <= maxSizeInBytes) {
      setPreviewLink((prev) => ({
        ...prev,
        image: URL.createObjectURL(selectedImage),
      }));
    } else {
      // Handle the case when the selected image exceeds the size limit
      alert("Please select an image smaller than 10MB.");
    }
  };

  const handleVideoSelection = (e) => {
    const selectedVideo = e.target.files[0];
    const maxSizeInBytes = 100 * 1024 * 1024; // 100MB

    if (selectedVideo.size <= maxSizeInBytes) {
      setPreviewLink((prev) => ({
        ...prev,
        video: URL.createObjectURL(selectedVideo),
      }));
    } else {
      // Handle the case when the selected image exceeds the size limit
      alert("Please select an video smaller than 100MB.");
    }
  };

  const handleCancelPreview = (fileType) => {
    setPreviewLink((prev) => ({
      ...prev,
      [fileType]: "",
    }));
  };

  const handleEmojiClick = (e) => {
    setPostInputValues((prev) => ({
      ...prev,
      content: `${prev.content}${e.emoji}`,
    }));
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (previewLink.image) {
      const data = new FormData();
      const imagefile = e.target.image.files;
      data.append("file", imagefile[0]);
      data.append("upload_preset", "surreal");

      const requestOptions = {
        method: "POST",
        body: data,
      };

      await fetch(
        "https://api.cloudinary.com/v1_1/dnj52nahi/image/upload",
        requestOptions
      )
        .then((res) => res.json())
        .then((file) => {
          console.log(file);
          const updatedPostInputValues = {
            ...postInputValues,
            mediaUrl: {
              ...postInputValues.mediaUrl,
              image: file.url,
            },
          };

          setPostInputValues(updatedPostInputValues);
          handleUploadPost(updatedPostInputValues);
        });
    } else {
      handleUploadPost(postInputValues);
    }
  };

  return (
    <Modal setShowModal={setShowCreatePost}>
      <div>
        <h1 className={CreatePostStyles.header}>New Post</h1>

        <form className={CreatePostStyles.form} onSubmit={handlePostSubmit}>
          <div className={CreatePostStyles.formHeader}>
            <UserDp dpUrl={userInfo?.dpUrl} dimensions={CreatePostStyles.dp} />
            <textarea
              placeholder="Express your thoughts..."
              value={postInputValues?.content}
              rows="5"
              cols="50"
              required
              onChange={(e) =>
                setPostInputValues((prev) => ({
                  ...prev,
                  content: `${e.target.value}`,
                }))
              }
            ></textarea>
          </div>

          {previewLink?.image && (
            <div>
              <X
                className={CreatePostStyles.cancel}
                onClick={() => handleCancelPreview("image")}
              />
              <img src={previewLink?.image} />
            </div>
          )}

          {previewLink?.video && (
            <div>
              <X
                className={CreatePostStyles.cancel}
                onClick={() => handleCancelPreview("video")}
              />
              <video controls>
                <source src={previewLink?.video} type="video/mp4" />
              </video>
            </div>
          )}

          <div className={CreatePostStyles.fileInputs}>
            <label>
              <Image />
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageSelection}
              />
            </label>

            <label>
              <Video />
              <input
                type="file"
                accept="video/*"
                name="video"
                onChange={handleVideoSelection}
              />
            </label>

            <div className={CreatePost.emojiContainer}>
              <Smile onClick={() => setShowEmojiPicker((prev) => !prev)} />
              {showEmojiPicker && (
                <span className={CreatePostStyles.emojiPicker}>
                  <EmojiPicker height={300} onEmojiClick={handleEmojiClick} />
                </span>
              )}
            </div>
          </div>

          <button className={CreatePostStyles.postButton}>Post</button>
        </form>
      </div>
    </Modal>
  );
};

export { CreatePost };
