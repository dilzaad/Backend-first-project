
import { Router } from "express";

import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,

    // Subscription Controllers
    createSubscription,
    deleteSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels,
    isSubscribed

} from "../controllers/user.controller.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getWatchHistory } from "../controllers/user.controller.js";

const router = Router();


// ==============================
// AUTH ROUTES
// ==============================

// Register User
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
);

// Login User
router.route("/login").post(loginUser);

// Logout User
router.route("/logout").post(
    verifyJWT,
    logoutUser
);

// Refresh Access Token
router.route("/refresh-token").post(refreshAccessToken);


// ==============================
// USER ROUTES
// ==============================

// Change Password
router.route("/change-password").post(
    verifyJWT,
    changeCurrentPassword
);

// Get Current User
router.route("/current-user").get(
    verifyJWT,
    getCurrentUser
);

// Update Account Details
router.route("/update-account").patch(
    verifyJWT,
    updateAccountDetails
);

// Update Avatar
router.route("/update-avatar").patch(
    verifyJWT,
    upload.single("avatar"),
    updateUserAvatar
);

// Update Cover Image
router.route("/update-cover-image").patch(
    verifyJWT,
    upload.single("coverImage"),
    updateUserCoverImage
);


// ==============================
// SUBSCRIPTION ROUTES
// ==============================

// Create Subscription
router.route("/subscribe/:channelId").post(
    verifyJWT,
    createSubscription
);

// Delete Subscription
router.route("/unsubscribe/:subscriptionId").delete(
    verifyJWT,
    deleteSubscription
);

// Get Channel Subscribers
router.route("/channel-subscribers/:channelId").get(
    verifyJWT,
    getUserChannelSubscribers
);

// Get Subscribed Channels
router.route("/subscribed-channels/:subscriberId").get(
    verifyJWT,
    getSubscribedChannels
);

// Check Subscription Status
router.route("/is-subscribed/:channelId").get(
    verifyJWT,
    isSubscribed
);
// Get Watch History
router.route("/watch-history").get(
    verifyJWT,
    getWatchHistory
);



export default router;
