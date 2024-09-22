# Simple CDK - Infrastructure as Code Framework with AWS CDK

---

We are under construction. Please check back later.

## Overview

Welcome to the Simple CDK, a comprehensive, enterprise-grade framework solution built on top of AWS CDK (Cloud Development Kit). This framework empowers development teams and cloud architects to define, deploy, and manage cloud infrastructure in a scalable and reusable way, adhering to modern Object-Oriented Programming (OOP) principles. It allows companies to streamline their cloud operations with best-in-class tools for multi-environment deployments, security, and operational excellence with the least amount of effort.

The framework offers reusable Level 3 (L3) constructs with pre-configured monitoring, logging, and alarm systems, ensuring developers can deploy fully functional, production-ready infrastructure in just a few lines of code and unlocking infrastructure teams to work on the overall and more critical infrastructure. It's designed with flexibility and extensibility in mind, allowing you to easily manage cloud resources across multiple environments, accounts, and regions while maintaining a consistent deployment experience.

## Key Features

1. **Object-Oriented Infrastructure Design**
   - The framework is built using TypeScript and follows OOP principles to ensure modularity, reusability, and scalability.
   - The framework uses well-defined class structures, inheritance, and encapsulation to allow the creation of infrastructure components that are easy to extend and customize.
2. **Pre-Built L3 Constructs**
   - L3 constructs flavours built with industry standards. All constructs include default configurations for CloudWatch alarms using standard alarms practices, have methods to setup SNS actions and customization, reducing the operational burden on developers, infrastructure and sre teams.
   - Every infrastructure component, whether it's a DynamoDB table, Lambda function, or SQS queue, is fully equipped with default operational monitoring and security best practices.
   - These constructs encapsulate common patterns for reliability and scaling, allowing you to focus on business logic instead of cloud configuration.
3. **Seamless Multi-Environment and Multi-Region Support**
   - The framework is designed to support multi-environment projects (e.g., development, staging, production), allowing teams to manage different stages of their infrastructure lifecycle with ease.
   - Easily deploy your infrastructure to single or multiple AWS accounts and regions without changing the underlying codebase.
   - This is ideal for teams working with complex, geographically distributed architectures or shared services across different business units.
4. **Flexible Configuration Options**

   - Simple and flexible configuration management through multiple options:
   - CDK CLI arguments for quick configuration adjustments during deployment.
   - AWS SSM Parameter Store to securely store and retrieve configuration values, ensuring sensitive data stays encrypted and safe.
   - simplecdk-config.json provides an easy-to-use, centralized configuration file for project-specific settings, such as AWS accounts, regions, and environment variables.

   By using these options, the framework adapts to various deployment strategies, from CI/CD automation to on-demand infrastructure provisioning.

5. **Enterprise-Ready for Large-Scale Deployments**
   - Designed to handle large, multi-account infrastructures that need to scale across environments, departments, or regions.
   - The shared contract approach ensures that all components adhere to a common interface, making them interoperable and reducing integration overhead.
   - Pre-configured resource tagging, IAM roles, and policies ensure enterprise-level security, compliance, and operational transparency.
6. **Streamlined Monitoring, Security, and Compliance**
   - Each L3 construct comes with pre-built monitoring capabilities via AWS CloudWatch, ensuring proactive alerts for anomalies.
   - The framework adheres to AWS security best practices, automatically applying IAM policies, resource-based policies, and encryption mechanisms.
   - Easily track resource costs with auto-generated tags that are applied consistently across environments and regions, enabling detailed cost allocation and governance.
7. **Default Alarms and Operational Readiness**
   - Every deployed stack includes default CloudWatch alarms for critical services, ensuring that operations teams are alerted to any issues as soon as they occur.
   - Integrated SNS notifications make sure the right team members are informed about alarms, without the need to manually configure these settings for each service.
   - This operational readiness is built-in, saving time and effort while ensuring a smooth transition from development to production.
