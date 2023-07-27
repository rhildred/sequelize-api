import {User} from "../models/User.js";

describe("model tests", ()=>{
    it("instantiates a user", async ()=>{
        const oUser = new User();
        expect(oUser).not.toBe(null);
    });
    it("creates and retrieves a user Jane", async () =>{
        const jane = await User.create({firstName: "Jane", lastName: "Smith"});
        const users = await User.findAll();
        expect(users.length).toBe(1);
    });
});