import User from "../models/Users";

class userServices {
  async create(nome, email, password) {
    try {
      const newuser = new User(nome, email, password);
      await newuser.save();
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const users = User.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      await User.findByIdAndDelete(id);
      console.log(`O Usuario com id ${id} foi deletado`);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, nome, email, password) {
    try {
      await User.findByIdAndUpdate(id, {
        nome,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  async getOne(id){
    try{
        const user = await User.findOne({_id:id})
        return user
    }catch(error){
        console.log(error)
    }
  }
}

export default new userServices;
