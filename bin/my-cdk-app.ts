#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { MyCdkStack } from "../lib/my-cdk-app-stack";

// 💡 Initialize CDK App
const app = new cdk.App();

// 🚀 Deploy your main CDK stack
new MyCdkStack(app, "MyCdkAppStack");
