import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const stores = defineCollection({
    loader: glob({ pattern: '**/*.json', base: "./src/content/stores" }),
    schema: z.object({
        name: z.string(),
        url: z.string(),
        latLon: z.tuple([z.number(), z.number()]),
        address: z.string(),
        stops: z.object({
            rapid: z.array(z.object({
                name: z.string(),
                latLon: z.tuple([z.number(), z.number()]),
                routes: z.array(z.object({
                    label: z.string(),
                    bg: z.string(),
                    text: z.string().optional(), // default white
                    url: z.string(),
                    notes: z.string().optional(),
                }))
            })).optional(),
            local: z.array(z.object({
                name: z.string(),
                latLon: z.tuple([z.number(), z.number()]),
                routes: z.array(z.object({
                    label: z.string(),
                    bg: z.string(),
                    text: z.string().optional(), // default white
                    url: z.string(),
                    notes: z.string().optional(),
                }))
            })).optional(),
        }),
        walkScore: z.object({
            walkScore: z.number().optional(),
            transitScore: z.number().optional(),
            bikeScore: z.number().optional(),
            url: z.string(),
        }).optional(),
        debug: z.boolean().optional(),
    }),
});

export const collections = { stores };