// src/sanity.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'daqhg7t5', // 🔁 Replace this
  dataset: 'production',
  apiVersion: '2025-05-24', // You can use current date
  useCdn: true,
});

export default client;
