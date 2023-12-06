
export default async (req, context) => {

  return new Response(JSON.stringify(context.geo), {
    headers:
      { 'Content-Type':'application/json' }
    
  });

};

export const config = {
  path: "/whereami"
}