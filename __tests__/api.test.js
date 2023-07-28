import {app} from "../src/app.js";
import request from "supertest";

describe("api tests", () =>{
    it("tests get of api routes", async ()=>{
        const response = await request(app).get("/api");
        expect(response.statusCode).toBe(200);

    });
})