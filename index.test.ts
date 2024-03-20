import { SyncLabs } from "./index";

describe("sync-labs-typescript-sdk", () => {
    it("initialize client", async () => {
        const synclabs = new SyncLabs({
            apiKey: "API_KEY",
        });
    });
});
