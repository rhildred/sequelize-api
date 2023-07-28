import { app } from "../src/app.js";
import request from "supertest";
import { User } from "../models/User.js";

describe("api tests", () => {
    it("tests get of users", async () => {
        await User.create({ firstName: "Jane", lastName: "Fuller" });
        const response = await request(app).get("/api/users");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });
    it("tests create of user", async () => {
        const response = await request(app).post("/api/users").send({firstName: "Rich", lastName: "Hildred"});
        expect(response.statusCode).toBe(200);
        expect(response.body.lastName).toBe("Hildred");
    });
    it("tests update of user Jane", async () => {
        const user = await User.create({ firstName: "Jane", lastName: "Fuller" });
        const response = await request(app).post(`/api/users/${user.id}`).send({lastName: "Smith"});
        expect(response.statusCode).toBe(200);
        expect(response.body.lastName).toBe("Smith");
        const users = await User.findAll({where:{id:user.id}});
        expect(users[0].lastName).toBe("Smith");
    });
    it("tests deleting user Jane", async () => {
        const user = await User.create({ firstName: "Jane", lastName: "Fuller" });
        const response = await request(app).delete(`/api/users/${user.id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe("deleted");
        const users = await User.findAll({where:{id:user.id}});
        expect(users.length).toBe(0);
    });
})