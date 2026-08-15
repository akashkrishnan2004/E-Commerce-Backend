// import mongoose from "mongoose";

// const announcementSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },

//     message: {
//       type: String,
//       required: true,
//     },

//     image: {
//       type: String, // base64 or image URL
//       required: true,
//     },

//     redirectLink: {
//       type: String, // ex: /product-details/123
//       required: false,
//     },

//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Announcement", announcementSchema);


import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",   // optional
    },

    message: {
      type: String,
      default: "",   // optional
    },

    image: {
      type: String, // base64 or image URL
      required: true,
    },

    redirectLink: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Announcement", announcementSchema);