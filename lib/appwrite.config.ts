import * as sdk from 'node-appwrite'

// export const {
//   NEXT_PUBLIC_ENDPOINT: ENDPOINT,
//   PROJECT_ID,
//   API_KEY,
//   DATABASE_ID,
//   PATIENT_COLLECTION_ID,
//   DOCTOR_COLLECTION_ID,
//   APPOINTMENT_COLLECTION_ID,
//   NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
// } = process.env

const projectId = process.env.APPWRITE_PROJECT_ID
const apiKey = process.env.APPWRITE_API_KEY

const client = new sdk.Client()

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(projectId!)
  .setKey(apiKey!)

export const databases = new sdk.Databases(client)
export const users = new sdk.Users(client)
export const messaging = new sdk.Messaging(client)
export const storage = new sdk.Storage(client)
