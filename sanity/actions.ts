import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams{
    query:string;
    category:string;
    page:string;
}

export const getResources = async (params: GetResourcesParams)=>{
    const{query,category,page}=params
    try{
        const resources = await readClient.fetch(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page)
            })}{
                title,
                _id,
                downloadLink,
                "image": poster.assets->url,
                views,
                slug,
                category
            }`
        )
        return resources
    } catch(error) {
        console.log(error)
    }
}