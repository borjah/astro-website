import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        name: z.string(),
        url: z.string().optional(),
        tags: z.array(z.string()),
        github: z.string().optional(),
    }),
});

export const collections = { projects };