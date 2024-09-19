import { Client,Account, Databases } from 'appwrite';

// Import type models for Appwrite
import { type Models } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID!); // Replace with your project ID

export const databases = new Databases(client) 
