'use client';

const techStack = [
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' },
  { name: 'Docker', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png' },
  { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
];

const TechStackDev = () => {
  const doubled = [...techStack, ...techStack];


  return (
    <>

      <section className="w-max-xs w-full mx-auto flex md:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center text-center md:text-left">
   
     <div className="flex md:col-span-1 flex-col gap-2 py-6 md:mb-0">
          <h2 className="md:text-xl text-xl text-start font-bold text-gray-400">
                Teknologi Yang Kami Gunakan:
            </h2>
        </div>

        <div className="overflow-hidden relative max-w-xl justify-center mx-auto ">
         
          <div className="marquee-track">
            {doubled.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center mx-8 gap-2 hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default"
                style={{ minWidth: '80px' }}
              >
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default TechStackDev;
