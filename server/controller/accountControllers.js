const Account = require('../models/accountSchema');

const SignUp = async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    const account = {
      username: username,
      password: password,
      orders: []
    }

    const userExist = await Account.findOne({username: username});

    if(userExist !== null){
      res.json(false)
    } else{
      const createUser = await Account.create(account);
      if(createUser){
        res.json(true);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

const SignIn = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  const account = {
    username: username,
    password: password
  }

  try {
    const checkUser = await Account.findOne(account);

    if(checkUser !== null){
      res.json(true)
    } else{
      res.json(false);
    }
  } catch (error) {
    console.error(error)
  }
}

const CreateOrders = async (req, res) => {
  const dataOrder = req.body;
  const query = {username: dataOrder.username};
  const dataBefore = await Account.findOne(query);
  const createOrder = await Account.findOneAndUpdate(query, {orders: [dataOrder.orders, ...dataBefore.orders]});

  if(createOrder !== null){
    res.json([dataOrder.orders, ...dataBefore.orders]);
  } else{
    res.json(false);
  }
}

const GetOrders = async (req, res) => {
  const username = req.query.username;
  const dataOrder = await Account.findOne({username: username});

  res.json(dataOrder.orders);
}

module.exports = {
  SignUp,
  SignIn,
  CreateOrders,
  GetOrders
}