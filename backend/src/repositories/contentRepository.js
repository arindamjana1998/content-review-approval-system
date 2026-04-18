const Content = require("../models/Content");

class ContentRepository {
  async findAll(query = {}, skip = 0, limit = 10) {
    const [contents, total] = await Promise.all([
      Content.find(query)
        .populate("createdBy", "username")
        .populate("updatedBy", "username")
        .populate("approvalHistory.actedBy", "username")
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limit),
      Content.countDocuments(query),
    ]);
    return { contents, total };
  }

  async findById(id) {
    return await Content.findById(id)
      .populate("createdBy", "username")
      .populate("updatedBy", "username")
      .populate("approvalHistory.actedBy", "username");
  }

  async create(contentData) {
    return await Content.create(contentData);
  }

  async update(id, updateData) {
    return await Content.findByIdAndUpdate(id, updateData, { new: true })
      .populate("createdBy", "username")
      .populate("updatedBy", "username")
      .populate("approvalHistory.actedBy", "username");
  }

  async save(content) {
    return await content.save();
  }
}

module.exports = new ContentRepository();
