import { ArrowUpRight, CodeXml, FolderOpen, Github, Image as ImageIcon } from 'lucide-react'
import { projects } from '../data/projects.js'
import { ExternalLink, publicAsset, Reveal, SectionHeading } from './Shared.jsx'

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.liveUrl && <ExternalLink href={project.liveUrl}>View Project <ArrowUpRight className="project-arrow" size={16} aria-hidden="true" /></ExternalLink>}
      {project.repositoryUrl && <ExternalLink href={project.repositoryUrl}><Github size={16} aria-hidden="true" /> GitHub Repository</ExternalLink>}
      {project.status && <span className="project-status"><Github size={16} aria-hidden="true" /> {project.status}</span>}
    </div>
  )
}

function ProjectCard({ project, showDetail, index }) {
  const title = project.placeholder ? 'Project Placeholder' : project.title

  function openProject() {
    showDetail({
      title,
      wide: Boolean(project.image),
      content: project.placeholder ? <p>Add a name, description, screenshot, technologies, and links to publish your project here.</p> : (
        <>
          {project.image && <img className="project-detail-image" src={publicAsset(project.image)} alt={project.imageAlt} />}
          <p>{project.description}</p>
          <ProjectLinks project={project} />
        </>
      ),
    })
  }

  return (
    <article className="card interactive project-card">
      <div className="project-preview" data-style={index % 3}>
        {project.image ? (
          <img src={publicAsset(project.image)} alt={project.imageAlt} loading="lazy" />
        ) : (
          <div className="preview-art" aria-hidden="true">
            <div className="preview-window">
              <span className="window-dots"><i /><i /><i /></span>
              <span className="preview-symbol">{index % 2 ? <CodeXml size={31} /> : <ImageIcon size={29} />}</span>
            </div>
          </div>
        )}
      </div>
      <div className="project-body">
        {project.category && <p className="project-category">{project.category}</p>}
        <h3><button className="project-open" type="button" onClick={openProject}>{title}<ArrowUpRight className="project-arrow" size={19} aria-hidden="true" /></button></h3>
        <p>{project.placeholder ? 'Add your project screenshot, technologies, and repository.' : project.description}</p>
        {project.technologies.length > 0 && <div className="tags">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>}
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

export function Projects({ showDetail }) {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <Reveal>
        <SectionHeading id="projects-title" icon={FolderOpen} label="Portfolio">Featured Projects</SectionHeading>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} showDetail={showDetail} />)}
        </div>
      </Reveal>
    </section>
  )
}
