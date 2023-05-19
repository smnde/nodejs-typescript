import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port: number = 5000;

app.use("/", async (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).send("Hello from root");
});

app.listen(port, (): void => console.log(`Running at ${port}`));
