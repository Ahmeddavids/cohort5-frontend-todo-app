const express = require('express');
const { createContent, getOneContent, getAllContent, updateContent, deleteContent, getAllContentInTrash, moveToTrash, restoreDeleted } = require('../controllers/todoController');
const { authenticate } = require('../middleware/authorization');
const router = express.Router();

router.post('/create-content', authenticate, createContent);

router.get('/one-content/:todoId', authenticate, getOneContent);

router.get('/all-content/', authenticate, getAllContent);

router.get('/all-trash-content/', authenticate, getAllContentInTrash);

router.patch('/trash-content/:todoId', authenticate, moveToTrash);

router.patch('/update-content/:todoId', authenticate, updateContent);

router.patch('/restore-content/:todoId', authenticate, restoreDeleted);

router.delete('/delete-content/:todoId', authenticate, deleteContent);

module.exports = router