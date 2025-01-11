import client from "../../lib/client";
import React from "react";
interface CollectionView {
    heading: string;
    paragraph: string;
  
    buttonText: string;
  }
  
  const collectionQuery = `*[_type == "collectionView"] {
    heading,
    paragraph,
    buttonText
  }`;
export default async function Content() {
    const collectionData: CollectionView[] = await client.fetch(collectionQuery)
    return(

        <div className="flex-1 bg-blue-900 text-white p-6 ">
          {collectionData.length > 0 && (
            <div>
              <h1 className="text-3xl font-semibold">{collectionData[0].heading}</h1>
              <p className="mt-4">{collectionData[0].paragraph}</p>
              <button className="mt-72 bg-blue-600 py-2 px-4 hover:bg-blue-700">
                {collectionData[0].buttonText}
              </button>
            </div>
          )}
        </div>)}