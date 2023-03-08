const { body, param } = require("express-validator");

exports.postValidation = [
  body("full_name").isString().withMessage("Invalid Name"),
  body("email").trim().normalizeEmail().isEmail().withMessage("Invalid Email"),
  body("password")
    .isString()
    .withMessage("Password Must Be Hybird")
    .isLength({ Min: 4 })
    .withMessage("Password must be > 8"),
  body("image").optional().isString().withMessage("Invalid image"),
  body("phone_number").isString().withMessage("Invalid Phone Number"),
  body("birth_date").isDate().withMessage("Invalid Date"),
  body("address").isObject().withMessage("Address is Invalid"),
  body("address.city").isString().withMessage("Invalid City"),
  body("address.street").isString().withMessage("Invalid Street"),
  body("address.building").isInt().withMessage("Invalid Building Number"),
  body("full_name").isString().withMessage("Invalid Name"),
  body("email").trim().normalizeEmail().isEmail().withMessage("Invalid Email"),
  body("password")
    .isString()
    .withMessage("Password Must Be Hybird")
    .isLength({ Min: 4 })
    .withMessage("Password must be > 8"),
  body("image").optional().isString().withMessage("Invalid image"),
  body("phone_number").isString().withMessage("Invalid Phone Number"),
  body("birth_date").isDate().withMessage("Invalid Date"),
  body("address").isObject().withMessage("Address is Invalid"),
  body("address.city").isString().withMessage("Invalid City"),
  body("address.street").isString().withMessage("Invalid Street"),
  body("address.building").isInt().withMessage("Invalid Building Number"),
];

exports.patchValidation = [
  body("full_name").optional().isString().withMessage("Invalid Name"),
  body("password")
    .optional()
    .isString()
    .withMessage("Password Must Be Hybird")
    .isLength({ Min: 4 })
    .withMessage("Password must be > 8"),
  body("image").optional().isString().withMessage("Invalid image"),
  body("phone_number").optional().isString().withMessage("Invalid Phone Number"),
  body("birth_date").optional().isDate().withMessage("Invalid Date"),
  body("address").optional().isObject().withMessage("Address is Invalid"),
  body("address.city").optional().isString().withMessage("Invalid City"),
  body("address.street").optional().isString().withMessage("Invalid Street"),
  body("address.building").optional().isInt().withMessage("Invalid Building Number"),
];

exports.checkId = [body("id").isNumeric().withMessage("Invalid Member ID")];
exports.checkID = [param("id").isNumeric().withMessage("Invalid Member ID")];

exports.validateSearchMember = [body("full_name").isString().withMessage("Invalid Name")];
