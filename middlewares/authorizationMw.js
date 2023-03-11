exports.isSuperAdmin = (request, response, next) => {
  if (request.role == "super-admin") {
    next();
  } else {
    console.log(request)
        throw new Error("not permitted");
  }
};

exports.isAdmin = (request, response, next) => {
  if (["super-admin", "admin"].includes(request.role)) {
    next();
  } else {
    throw new Error("not permitted");
  }
};

exports.isEmployee = (request, response, next) => {
  if (["super-admin", "admin", "employee"].includes(request.role)) {
    next();
  } else {
    throw new Error("not permitted");
  }
};

exports.isMember = (request, response, next) => {
  if (["super-admin", "admin", "employee", "member"].includes(request.role)) {
    next();
  } else {
    throw new Error("not permitted");
  }
};
