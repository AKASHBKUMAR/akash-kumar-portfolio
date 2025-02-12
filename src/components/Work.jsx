import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: '/images/project-1.jpeg',
    title: 'Food Order App',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://food-app-frontend-steel.vercel.app/'
  },
  {
    imgSrc: '/images/project-2.png',
    title: 'Movie Rating App app',
    tags: ['API', 'Role-Based Access'],
    projectLink: 'https://github.com/AKASHBKUMAR/movie-rating-app'
  }
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5  grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc,title,tags,projectLink},key)=>(
            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work