

const userModel = require("./userModel");


const apiResponse = (status, success, data, message) => {
  return {
    status,
    success,
    data,
    message,
  };
};


const getUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({}).sort({ _id: -1 }).exec();

    res.status(200).send(apiResponse(200,true,allUsers,"get all users from database"));
  
  } catch (err) {
    console.log(err);
    
    res.status(500).send(apiResponse(500,false,{},"server error, please try later..."));
  }
};

const createUser = async (req, res) => {
  try {
    const result = await userModel.create(
      {
        userName: req.body.userName,
        password: req.body.password,
        
      },
    );
    res.status(200).send(apiResponse(200,true,result,"user added from database"));

  } catch (err) {
    console.log(err);

    res.status(500).send(apiResponse(500,false,{},"server error, please try later..."));
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const userName = req.body.userName;
  const password = req.body.password;

  try {
    const data = await userModel
      .findByIdAndUpdate(
        id,
        {
          userName: userName,
          password: password,
        },
        { new: true }
      )
      .exec();
    // console.log("updated: ", data);

    res.status(200).send(apiResponse(200,true, data,"user updated from database successfully"));

  } catch (err) {
    console.log(err);

    res.status(500).send(apiResponse(500,false,{},"server error, please try later..."));
  }

};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await userModel.deleteOne({ _id: id });

    res.status(200).send(apiResponse(200,true,data,"user has been deleted from database"));

  } catch (err) {
    console.log(err);

    res.status(500).send(apiResponse(500,false,{},"server error, please try later..."));
  }

  // reply.send(apiResponse(200, true, {}, "Delete user successfully"));
};



module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
