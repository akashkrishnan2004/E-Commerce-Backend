// import Announcement from "../models/Announcement.js";

// /* ==============================
//    CREATE ANNOUNCEMENT
// ================================ */
// export const createAnnouncement = async (req, res) => {
//   try {
//     const { productId, message, isActive } = req.body;

//     const newAnnouncement = new Announcement({
//       productId,
//       message,
//       isActive,
//     });

//     await newAnnouncement.save();

//     res.status(201).json({
//       message: "Announcement created successfully",
//       newAnnouncement,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

// /* ==============================
//    GET ALL ANNOUNCEMENTS (Admin)
// ================================ */
// export const getAllAnnouncements = async (req, res) => {
//   try {
//     const announcements = await Announcement.find().populate("productId");

//     res.status(200).json({ announcements });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

// /* ==============================
//    GET ACTIVE ANNOUNCEMENTS (User)
// ================================ */
// export const getActiveAnnouncements = async (req, res) => {
//   try {
//     const announcements = await Announcement.find({ isActive: true })
//       .populate("productId");

//     res.status(200).json({ announcements });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

// /* ==============================
//    UPDATE ANNOUNCEMENT
// ================================ */
// export const updateAnnouncement = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const updatedAnnouncement = await Announcement.findByIdAndUpdate(
//       id,
//       req.body,
//       { new: true }
//     );

//     res.status(200).json({
//       message: "Announcement updated successfully",
//       updatedAnnouncement,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

// /* ==============================
//    DELETE ANNOUNCEMENT
// ================================ */
// export const deleteAnnouncement = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await Announcement.findByIdAndDelete(id);

//     res.status(200).json({
//       message: "Announcement deleted successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

import Announcement from "../models/announcement-model.js";

/* ==============================
   CREATE ANNOUNCEMENT
================================ */
// export const createAnnouncement = async (req, res) => {
//   try {
//     const { title, message, image, redirectLink, isActive } = req.body;

//     // if (!title || !message || !image) Title, message and image are required
//     if (!image) {
//       return res.status(400).json({
//         message: "Image is required",
//       });
//     }

//     const newAnnouncement = new Announcement({
//       title,
//       message,
//       image, // base64 or image URL
//       redirectLink,
//       isActive,
//     });

//     await newAnnouncement.save();

//     res.status(201).json({
//       message: "Announcement created successfully",
//       newAnnouncement,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

export const createAnnouncement = async (req, res) => {
  try {
    const { title, message, image, redirectLink, isActive } = req.body;

    if (!image) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const newAnnouncement = new Announcement({
      title: title || "",
      message: message || "",
      image,
      redirectLink: redirectLink || "",
      isActive: isActive ?? true,
    });

    await newAnnouncement.save();

    res.status(201).json({
      message: "Announcement created successfully",
      newAnnouncement,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

/* ==============================
   GET ALL ANNOUNCEMENTS (Admin)
================================ */
export const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({
      createdAt: -1,
    });

    res.status(200).json({ announcements });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/* ==============================
   GET ACTIVE ANNOUNCEMENTS (User)
================================ */
export const getActiveAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find({
      isActive: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({ announcements });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/* ==============================
   UPDATE ANNOUNCEMENT
================================ */
export const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
    );

    if (!updatedAnnouncement) {
      return res.status(404).json({
        message: "Announcement not found",
      });
    }

    res.status(200).json({
      message: "Announcement updated successfully",
      updatedAnnouncement,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/* ==============================
   DELETE ANNOUNCEMENT
================================ */
export const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

    if (!deletedAnnouncement) {
      return res.status(404).json({
        message: "Announcement not found",
      });
    }

    res.status(200).json({
      message: "Announcement deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
