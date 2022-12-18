import express from "express";
const router = express.Router();

// middleware
import { requireSignin, isAdmin } from "../middlewares";
// controllers
import {
  create,
  tags,
  removeTag,
  updateTag,
  postsByTag,
} from "../controllers/tag";

router.post("/tag", requireSignin, isAdmin, create);
router.get("/tags", tags);
router.delete("/tag/:slug", requireSignin, isAdmin, removeTag);
router.put("/tag/:slug", requireSignin, isAdmin, updateTag);
router.get("/posts-by-tag/:slug", postsByTag);

export default router;
