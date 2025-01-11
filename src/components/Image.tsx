
import client from "../../lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
;

// Create an image URL builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL
const urlFor = (source: { _ref: string }) => builder.image(source);
interface ImageOnly {
    image: { asset: { _ref: string } };
  }
  
  const imageQuery = `*[_type == "imageOnly" && imageIdentifier == "black"] {
    image
  }`;


export default async function Imagee(){
const imagesData: ImageOnly[] = await client.fetch(imageQuery); 
return(

    <div>
<div>
    <div className="flex-1">
              {imagesData.length > 0 && (
                <Image
                  src={urlFor(imagesData[0].image.asset).width(500).url()}
                  alt="Sanity Image"
                  height={800}
                  width={800}
                  className="object-cover rounded-lg"
                />
              )}
            </div>
            
    <div>


    </div>
</div>
    </div>)
}