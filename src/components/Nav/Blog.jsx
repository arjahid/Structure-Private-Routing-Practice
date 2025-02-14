import React from 'react';


const Blog = () => {
    return (
        <div className=' bg-base-200'>
            <div className="carousel w-full h-[650px]">
  <div id="item1" className="carousel-item w-full ">
    <img
      src="/src/img/smoke-physical-structure-explode-fiery-destruction-generative-ai.jpg
      
      "
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img 
      src="/src/img/generative-ai-soldiers-walking-down-street-city-ruins.jpg"
      className="w-full " />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="/src/img/armed-forces-ignite-inferno-releasing-fumes-ash-into-sky-generated-by-ai.jpg"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="/src/img/armed-forces-ignite-inferno-releasing-fumes-ash-into-sky-generated-by-ai.jpg"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>

    );
};

export default Blog;