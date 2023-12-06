import { getStore } from "@netlify/blobs";

export default async (req, context) => {

  const store = getStore("hitcounter");
  let hits = await store.get("hits");
  if(!hits) hits = 0;
  hits++;
  await store.set("hits", hits);

  return new Response(JSON.stringify({hits}), {
    headers:
      { 'Content-Type':'application/json' }
    
  });

};

export const config = {
  path: "/hits"
}