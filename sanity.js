import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
	projectId: 'ti0c6t8j',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21',
})

// import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "ti0c6t8j",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2022-02-03"
// });

const builder = imageUrlBuilder(client)
export const urlFor = source => builder.image(source)

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client
