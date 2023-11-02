import { Exception } from "../utils.js";
import StudentModel from "../models/student.model.js";
export default class StudentManager {
  static get(query = {}) {
    const criteria = {};
    if (query.course) {
      criteria.course = query.course;
    }
    return StudentModel.find(criteria);
  }

  static async getById(sid) {
    const student = await StudentModel.findById(sid);
    if (!student) {
      throw new Exception(`Student with id: ${sid} doesn't exist`, 404);
    }
    return student;
  }

  static async create(data) {
    const student = await StudentModel.create(data);
    console.log("Studiant created successfully ✔️");
    return student;
  }

  static async updateById(sid, data) {
    const student = await StudentModel.findById(sid);
    if (!student) {
      throw new Exception(`Student with id: ${sid} doesnt exist`, 404);
    }
    const criteria = { _id: sid };
    const operation = { $set: data };
    await StudentModel.updateOne(criteria, operation);
    console.log("Studiant updated successfully ✔️");
  }

  static async deleteById(sid) {
    const student = await StudentModel.findById(sid);
    if (!student) {
      throw new Exception(`Student with id: ${sid} doesnt exist`, 404);
    }
    const criteria = { _id: sid };
    await StudentModel.updateOne(criteria);
    console.log("Student successfully deleted");
  }
}
