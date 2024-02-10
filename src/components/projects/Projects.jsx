import React from 'react';

const Projects = () => {
  const galleryItems = [
    {
      imageUrl: "/project-3.png",
      projectName: "Realtime Weather App",
      githubLink: "https://github.com/sriman01/weatherApp",
      deployLink: "https://sriman-weatherapp.netlify.app/"
    },
    {
      imageUrl: "/project-1.png",
      projectName: "SHOP|MART - ecommerse",
      githubLink: "https://github.com/sriman01/shop-mart",
      deployLink: "https://exquisite-rolypoly-8ab6bc.netlify.app/"
    },
    {
      imageUrl: "/project-2.png",
      projectName: "PIZZA SITE UI",
      githubLink: "https://github.com/sriman01/Pizza-site",
      deployLink: "https://sriman-pizza-site.netlify.app/"
    },
    {
      imageUrl: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
      projectName: "TEXT TO SPEECH PROJECT",
      githubLink: "https://github.com/sriman01/TS-Project",
      deployLink: "https://github.com/sriman01/TS-Project"
    },
    {
      imageUrl: "/project-4.png",
      projectName: "A TODO LIST",
      githubLink: "https://github.com/sriman01/todo",
      deployLink: "https://todo-sriman.netlify.app/"
    },
    {
      imageUrl: "/project-5.png",
      projectName: "SIMPLE ECOMMERSE SITE",
      githubLink: "https://github.com/sriman01/KHARIDO",
      deployLink: "https://reliable-smakager-72e39d.netlify.app/"
    },
    
    // Add more gallery items as needed
  ];

  return (
    <div className=" mx-auto px-5 py-2 text-center">
      <h3 className="w-full mb-[1.5rem] text-xl sm:text-xl md:text-2xl xl:text-[3rem] font-semibold py-5 xl:py-10 text-white">Project <span className='text-yellow-500'>Section</span></h3>
      <div className="flex flex-wrap justify-evenly items-start gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="w-full md:w-[300px] lg:w-[400px] 2xl:w-[600px] p-1 md:p-2 relative flex-1/3">
            <img
              alt="gallery"
              className="block h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[450px] w-full rounded-lg object-cover object-center"
              src={item.imageUrl}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 text-white rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold">{item.projectName}</h3>
                <div className="mt-2">
                  <a href={item.githubLink} className="text-blue-300 hover:text-blue-400 mr-2" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={item.deployLink} className="text-blue-300 hover:text-blue-400" target="_blank" rel="noopener noreferrer">Deployed</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
