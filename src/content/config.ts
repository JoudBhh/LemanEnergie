import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.string(),
        width: z.string(),
        height: z.string(),
        alt: z.string(),
        tags: z.array(z.string()),
        firstline: z.string()
    })
});

// 🖼️ Image collection
// const imageCollection = defineCollection({
//     schema: z.object({
//       title: z.string(),
//       description: z.string().optional(),
//       src: z.string(), // The path to the image file
//       alt: z.string().optional(), // Optional alt text for accessibility
//       date: z.date().optional(), // Optional date for when the image was added
//     }),
//   });
  


export const collections ={
    blog: blogCollection,
    // images: imageCollection

};