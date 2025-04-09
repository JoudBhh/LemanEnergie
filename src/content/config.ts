import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string().optional(),
        image: z.string(),
        imgageTitle: z.string().optional(),
        width: z.string().optional(),
        height: z.string().optional(),
        alt: z.string(),
        tags: z.array(z.string()).optional(),
        firstline: z.string().optional()
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