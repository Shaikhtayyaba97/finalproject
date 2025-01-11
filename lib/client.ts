import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'bf0yjqkz', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name (e.g., 'production')
  apiVersion: '2023-01-01', // Use the latest Sanity API version
  useCdn: process.env.NODE_ENV === 'production',
  token: 'skUpF76Vz6TjSwyN0GDqp4OsJIW0KY4PQXEfs8HuvfmLamcgHpqtQll9Ww99JAq0YtJEn4wF4OvGxZmZAW3ypssk7ggYC28OfqIbdncacDCxDauVYn6ss7Bj55VSpxaNSxZf7XxfNwSGXxBgd2RCNjMVKnvrFCvnw0XNa9EDOYsUhh69nPVe' // true for cached requests; false for real-time data
});

export default client;